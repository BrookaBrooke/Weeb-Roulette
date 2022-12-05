from fastapi import APIRouter, Depends, HTTPException, status, Response
from models.forums import ThreadIn, ThreadOut, PostIn, PostOut, ThreadList
from models.profiles import Profile
from accounts.models import AccountOut
from queries.forums import ThreadQueries, PostQueries
from routers.sockets import socket_manager
from accounts.authenticator import authenticator

router = APIRouter()

not_authorized = HTTPException(
    status_code=status.HTTP_401_UNAUTHORIZED,
    detail="Invalid authentication credentials",
    headers={"WWW-Authenticate": "Bearer"},
)


@router.post("/threads", response_model=ThreadOut)
async def create_thread(
    profile_id: str,
    thread: ThreadIn,
    repo: ThreadQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
        raise not_authorized
    thread_request = ThreadIn(profile_id = profile_id, title = thread.title, content = thread.content)
    thread_request = repo.create(thread_request)
    # await socket_manager.broadcast_refetch()
    return thread_request


@router.get("/threads", response_model=ThreadList)
def get_threads(repo: ThreadQueries = Depends()):
    return ThreadList(threads=repo.get_all())


@router.get("/threads/{thread_id}", response_model=ThreadOut)
def get_thread(
    thread_id = str,
    repo: ThreadQueries = Depends(),
    post_repo: PostQueries = Depends(),
):
    posts = post_repo.get_by_thread(thread_id)
    thread = repo.get(thread_id)
    thread.posts = posts
    return thread


@router.post("/threads/{thread_id}/posts", response_model=PostOut)
async def create_post(
    thread_id: str,
    post: PostIn,
    repo: PostQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
        raise not_authorized
    # await socket_manager.broadcast_refetch()
    post_request = PostIn(thread_id=thread_id, content=post.content)
    post_request = repo.create(post_request)
    return post_request

@router.delete("/threads/{id}", response_model=bool)
async def delete_thread(
    id: str,
    repo: ThreadQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    account = AccountOut(**account_data)
    if "user" not in account.roles:
        raise not_authorized
    repo.delete_thread(id=id)
    return True

@router.put("/update_thread/{id}", response_model=ThreadOut)
def update_thread(
    id: str,
    thread: ThreadOut,
    response: Response,
    repo: ThreadQueries = Depends(),
):
    record = repo.update_thread(id, thread.content)
    if record is None:
        response.status_code = 404
    return record
