from fastapi import APIRouter, Depends, Response, HTTPException, status
from queries.api_call import get_anime, get_anime_list
from accounts.authenticator import authenticator
from models.profiles import Profile
from accounts.models import AccountOut
from models.anime import AnimeQueueIn, AnimeQueue, AnimeQueueList, AnimeIdRequest
from queries.anime import AnimeQueueQueries
import queries.db


router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)

@router.get("/anime_list")
def get_anime_lists():
    data = get_anime_list()
    return data

@router.get("/anime_detail/{id}")
def get_anime_detail(id):
    data = get_anime(id)
    return data

#getting all anime queues that are attached to a specific profile
#Pulls all anime queues in db currently. Needs to pull queues based off profile
@router.get("/anime_queues")
def get_anime_queues(repo: AnimeQueueQueries = Depends()):
    return AnimeQueueList(animequeues=repo.get_queues())

#getting individual queues attached to a specific profile
@router.get("/anime_queue/{id}", response_model=AnimeQueue)
def get_anime_queue(
    id: str,
    repo: AnimeQueueQueries = Depends()
):
    animequeues=repo.get_queue(id)
    return animequeues

#add an anime to user's queue
@router.put("/add_anime_to_queue/{id}", response_model = AnimeQueue)
def add_anime_to_queue(
    id: str,
    anime_id_request: AnimeIdRequest,
    response: Response,
    repo: AnimeQueueQueries = Depends(),
):
    record = repo.add_queue_item(id, anime_id_request.anime_id)
    if record is None:
        response.status_code = 404
    return record

#remove an anime to user's queue
@router.put("/remove_anime_from_queue/{id}", response_model = AnimeQueue)
def remove_anime_from_queue(
    id: str,
    anime_id_request: AnimeIdRequest,
    response: Response,
    repo: AnimeQueueQueries = Depends(),
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
):
    record = repo.update_queue(id, anime_queue.name)
    if record is None:
        response.status_code = 404
    return record

#create new anime queue
@router.post("/anime_queues", response_model=AnimeQueue)
async def create_anime_queue(
    animequeues: AnimeQueueIn,
    repo: AnimeQueueQueries = Depends(),
    #  account_data: dict = Depends(authenticator.get_current_account_data),
):
    # account = AccountOut(**account_data)
    # if "user" not in account.roles:
    #      raise not_authorized
    animequeues = repo.create_queue(animequeues)
    return animequeues

#delete anime queue
@router.delete("/anime_queues/{id}", response_model=bool)
async def delete_user_queue(
    id: str,
    repo: AnimeQueueQueries = Depends(),
    # account_data: dict = Depends(authenticator.get_current_account_data),
):
    # account = AccountOut(**account_data)
    # if "user" not in account.roles:
    #     raise not_authorized
    repo.delete_queue(id=id)
    return True
