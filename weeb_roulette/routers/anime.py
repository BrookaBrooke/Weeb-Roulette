from fastapi import APIRouter, Depends
from queries.api_call import get_anime, get_anime_list
from accounts.authenticator import authenticator
from models.accounts import Profile
from accounts.models import AccountOut
from models.anime import AnimeQueueIn, AnimeQueue, AnimeQueueOut
from queries.animequeue import AnimeQueueQueries

router = APIRouter()

@router.get("/anime_list")
def get_anime_lists():
    data = get_anime_list()
    return data

@router.get("/anime_detail/{id}")
def get_anime_detail(id):
    data = get_anime(id)
    return data

#getting anime queues that are attached to a specific profile
@router.get("/anime_queues", response_model=AnimeQueue)
def get_anime_queue():
    pass

#add an anime to user's queue
@router.put("/add_to_queue")
def add_to_queue():
    pass

#create new anime queue
@router.post("/anime_queues", response_model=AnimeQueueOut)
async def create_anime_queue(
    animequeues: AnimeQueueIn,
    repo: AnimeQueueQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
        raise "error"
    animequeues = repo.create(animequeues)
    return animequeues

#delete anime queue
@router.delete("/anime_queues")
def delete_queue():
    pass
    