from fastapi import APIRouter
from queries.forums import ThreadIn

router = APIRouter()

@router.post("/threads")
def create_thread(thread: ThreadIn):
    return thread

# @router.get("/forum_threads", response_model=Thread)
# def forum_threads(id: int):
#     data = db.all(Thread.id)
#     return data

# @router.get("/posts", response_model=Post)
# def posts():
#     data = db.all()
