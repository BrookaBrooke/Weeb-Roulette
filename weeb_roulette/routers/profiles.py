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

from models.profiles import Profile, ProfileList
from queries.profiles import ProfileQueries
from accounts.queries import AccountQueries
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
    forum_repo: ThreadQueries = Depends()
    ):

    animequeues = anime_repo.get_by_profile(profile_id)
    threads = forum_repo.get_by_profile(profile_id)
    profile = repo.get(profile_id)
    profile.animequeues = animequeues
    profile.threads = threads
    return profile

@router.get("/profiles", response_model=ProfileList)
def get_profiles(repo: ProfileQueries = Depends()):
    return ProfileList(profiles = repo.all())
