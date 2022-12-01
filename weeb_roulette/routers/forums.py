from fastapi import APIRouter, Depends, HTTPException, status
from models.forums import ThreadIn, ThreadOut, PostIn, PostOut, ThreadList
from queries.forums import ThreadQueries, PostQueries
from token_auth import get_current_user
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
    thread: ThreadIn,
    repo: ThreadQueries = Depends(),
    # account: dict = Depends(authenticator.get_current_account_data),
    ):
    # if "user" not in account.roles:
    #     raise not_authorized
    thread = repo.create(thread)
    # await socket_manager.broadcast_refetch()
    return thread


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
    # account: dict = Depends(get_current_user),
):
    # if "user" not in account.roles:
    #     raise not_authorized
    # await socket_manager.broadcast_refetch()
    # , account_id=account.id
    post_request = PostIn(thread_id=thread_id, content=post.content)
    post_request = repo.create(post_request)
    return post_request

# @router.get("/forum_threads", response_model=Thread)
# def forum_threads(id: int):
#     data = db.all(Thread.id)
#     return data

# @router.get("/posts", response_model=Post)
# def posts():
#     data = db.all()
