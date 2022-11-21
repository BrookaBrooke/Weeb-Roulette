from users.sessions import SessionQueries
from fastapi import (
    Depends,
    HTTPException,
    status,
    Response,
    APIRouter,
    Request,
)
from jwtdown_fastapi.authentication import Token
from users.authenticator import authenticator

from pydantic import BaseModel

from users.models import (
    User,
    UserIn,
    UserOut,
)
from users.users import (
    UserQuery,
    DuplicateUserError
)

class AccountForm(BaseModel):
    username: str
    password: str

class AccountToken(Token):
    account: UserOut

class HttpError(BaseModel):
    detail: str

router = APIRouter()


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

@router.post("/api/accounts", response_model=AccountToken | HttpError)
async def create_account(
    info: UserIn,
    request: Request,
    response: Response,
    repo: UserQuery = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.create(info, hashed_password)
    except DuplicateUserError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Account with that Username or Password already exists.",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())

@router.delete("/api/sessions/{user_id}", response_model=bool)
async def delete_session(
    user_id: str,
    account: dict = Depends(authenticator.get_current_account_data),
    repo: SessionQueries = Depends(),
) -> bool:
    if "librarian" not in account["roles"]:
        raise not_authorized
    repo.delete_sessions(user_id)
    return True
