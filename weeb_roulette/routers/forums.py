from fastapi import APIRouter, Depends, HTTPException, status
from models.forums import ThreadIn, ThreadOut, PostIn, PostOut, ThreadList, PostInWithThread
from queries.forums import ThreadQueries, PostQueries
from token_auth import get_current_user
from routers.sockets import socket_manager

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
    # account: dict = Depends(get_current_user),
    ):
    # if "user" not in account.roles:
    #     raise not_authorized
    thread = repo.create(thread)
    # await socket_manager.broadcast_refetch()
    return thread


@router.get("/threads", response_model=ThreadList)
def get_threads(repo: ThreadQueries = Depends()):
    return ThreadList(threads=repo.get_all())


@router.get("threads/{thread_id}", response_model=ThreadOut)


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
    post_request = PostInWithThread(thread_id=thread_id, content=post.content)
    post_request = repo.create(post_request)
    return post_request

# @router.get("/forum_threads", response_model=Thread)
# def forum_threads(id: int):
#     data = db.all(Thread.id)
#     return data

# @router.get("/posts", response_model=Post)
# def posts():
#     data = db.all()
