from fastapi import APIRouter, Depends, Response, HTTPException, status
from queries.api_call import get_anime, get_anime_list
from accounts.authenticator import authenticator
from accounts.models import AccountOut
from models.anime import AnimeQueueIn, AnimeQueue, AnimeQueueList, AnimeIdRequest
from queries.anime import AnimeQueueQueries


router = APIRouter(tags=["animes"])

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)
@router.get("/anime_list/{id}")
def get_anime_lists(id):
    data = get_anime_list(id)
    return data

#get all details for an anime
@router.get("/anime_detail/{id}")
def get_anime_detail(id):
    data = get_anime(id)
    return data


#Pulls all anime queues in db currently
@router.get("/anime_queues")
def get_all_anime_queues(repo: AnimeQueueQueries = Depends()):
    return AnimeQueueList(animequeues=repo.get_queues())


#getting all anime queues that are attached to a specific profile
@router.get("/anime_queues/{id}")
def get_anime_queues_for_profile(profile_id: str, repo: AnimeQueueQueries = Depends()):
    return AnimeQueueList(animequeues=repo.get_by_profile(profile_id))


#getting individual queues attached to a specific profile
@router.get("/anime_queue/{id}", response_model=AnimeQueue)
def get_anime_queue_for_profile(
    id: str,
    repo: AnimeQueueQueries = Depends()
):
    animequeues=repo.get_queue(id)
    return animequeues

#add an anime to user's queue
@router.put("/add_anime_to_queue/{id}", response_model = AnimeQueue)
async def add_anime_to_queue(
    id: str,
    anime_id_request: AnimeIdRequest,
    response: Response,
    repo: AnimeQueueQueries = Depends(),
    # account_data: dict = Depends(authenticator.get_current_account_data),
):
    record = repo.add_queue_item(id, anime_id_request.anime_id)
    if record is None:
        response.status_code = 404
    return record

#remove an anime from user's queue
@router.put("/remove_anime_from_queue/{id}", response_model = AnimeQueue)
def remove_anime_from_queue(
    id: str,
    anime_id_request: AnimeIdRequest,
    response: Response,
    repo: AnimeQueueQueries = Depends(),
    # account_data: dict = Depends(authenticator.get_current_account_data),
):
    record = repo.delete_queue_item(id, anime_id_request.anime_id)
    if record is None:
        response.status_code = 404
    return record

#updates name of anime queue
@router.put("/update_queue_name/{id}", response_model = AnimeQueue)
def update_queue_name(
    id: str,
    anime_queue: AnimeQueueIn,
    response: Response,
    repo: AnimeQueueQueries = Depends(),
    # account_data: dict = Depends(authenticator.get_current_account_data),
):
    record = repo.update_queue(id, anime_queue.name)
    if record is None:
        response.status_code = 404
    return record

#create new anime queue attached to profile
@router.post("/anime_queues", response_model=AnimeQueue)
async def create_anime_queue(
    profile_id: str,
    animequeue: AnimeQueueIn,
    repo: AnimeQueueQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
         raise not_authorized
    animequeue_request = AnimeQueueIn(profile_id = profile_id, name = animequeue.name)
    animequeue_request = repo.create_queue(animequeue_request)
    return animequeue_request

#delete anime queue attached to profile
@router.delete("/anime_queues/{id}", response_model=bool)
async def delete_user_queue(
    id: str,
    repo: AnimeQueueQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
        raise not_authorized
    repo.delete_queue(id=id)
    return True
