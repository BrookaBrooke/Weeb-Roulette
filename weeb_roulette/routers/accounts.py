from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from accounts.authenticator import authenticator

from pydantic import BaseModel

from accounts.models import (
    AccountIn,
    AccountOut,
)
from models.profiles import ProfileIn
from queries.profiles import ProfileQueries
from accounts.queries import (
    AccountQueries,
    DuplicateAccountError
)

class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: AccountOut

class HttpError(BaseModel):
    detail: str

router = APIRouter(tags=["accounts"])


not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)

@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: dict = Depends(authenticator.try_get_current_account_data)
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }

@router.post("/api/accounts/", response_model=AccountToken | HttpError)
async def create_account(
    info: AccountIn,
    profile: ProfileIn,
    request: Request,
    response: Response,
    repo: AccountQueries = Depends(),
    profile_repo: ProfileQueries = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.create(info, hashed_password)
        profile = profile_repo.create_profile(profile)
        profile.account_id = account.id
        profile_repo.update_account_id(id=profile.id, account_id=profile.account_id)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Account with that Email or Username already exists.",
        )
    form = AccountForm(username=info.email, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())

@router.get("/api/accounts")
def get_accounts(repo: AccountQueries = Depends()):
    return repo.all()

@router.get("/api/accounts/{username}", response_model=AccountOut)
def account_details(email: str, repo: AccountQueries = Depends()):
    account = repo.get(email)
    return account

@router.put("/api/accounts/{username}", response_model=AccountOut)
def account_update(
    id: str,
    account: AccountIn,
    repo: AccountQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
        raise not_authorized
    if id not in repo:
        return {"Error": "Account does not exist."}

    if account.username != None:
        repo[id].username = account.username

    if account.email != None and account.email not in repo:
        repo[id].email = account.email

    if account.password != None:
        repo[id].password = account.password

    return repo[id]

@router.delete("/api/accounts/{username}")
def account_delete(id: str, repo: AccountQueries = Depends()):
    if id not in repo:
        return {"Error": "Account does not exist."}
    repo.delete(id=id)
    return {"Message": "Account successfully deleted."}
