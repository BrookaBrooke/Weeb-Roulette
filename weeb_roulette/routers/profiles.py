from fastapi import (
    Depends,
    HTTPException,
    status,
    APIRouter,
)
from accounts.authenticator import authenticator

from models.profiles import Profile, ProfileList, ProfileIn
from queries.profiles import ProfileQueries
from accounts.models import AccountOut
from queries.forums import ThreadQueries
from queries.anime import AnimeQueueQueries

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.get("/profiles/{profile_id}", response_model=Profile)
def get_profile(
    profile_id: str,
    repo: ProfileQueries = Depends(),
    anime_repo: AnimeQueueQueries = Depends(),
    forum_repo: ThreadQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
    ):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
        raise not_authorized
    animequeues = anime_repo.get_by_profile(profile_id)
    threads = forum_repo.get_by_profile(profile_id)
    profile = repo.get(profile_id)
    profile.animequeues = animequeues
    profile.threads = threads
    return profile

@router.get("/profiles", response_model=ProfileList)
def get_profiles(repo: ProfileQueries = Depends()):
    return ProfileList(profiles = repo.all())

@router.put("/profiles/{profile_id}", response_model= Profile)
def update_profile(
    profile_id: str,
    profile: ProfileIn,
    repo: ProfileQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
        raise not_authorized
    if profile_id not in repo:
        return {"Error": "Profile does not exist."}

    if profile.bio != None:
        repo[profile_id].bio = profile.bio

    if profile.signature != None:
        repo[profile_id].signature = profile.signature

    if profile.city != None:
        repo[profile_id].city = profile.city

    if profile.state != None:
        repo[profile_id].state = profile.state

    return repo[profile_id]
