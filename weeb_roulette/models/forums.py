from pydantic import BaseModel
from datetime import datetime

from accounts.models import AccountOut


# class PydanticObjectId(ObjectId):
#     @classmethod
#     def __get_validators__(cls):
#         yield cls.validate

#     @classmethod
#     def validate(cls, value: ObjectId | str) -> ObjectId:
#         if value:
#             try:
#                 ObjectId(value)
#             except:
#                 raise ValueError(f"Not a valid object id: {value}")
#         return value


class PostIn(BaseModel):
    content: str
    thread_id: str

# class PostInWithThread(PostIn):
#     thread_id: str

# class Post(PostIn):
#     id: str
#     author: Profile
#     content: str
#     posted: datetime
#     edited: bool
#     likes: int
#     dislikes: int

class PostOut(PostIn):
    id: str
    thread_id: str
    author: str | None = None
    content: str
    posted: datetime | None = datetime
    edited: bool | None = False
    likes: int | None = 0
    dislikes: int | None = 0

class PostList(BaseModel):
    posts: list[PostOut]

class ThreadIn(BaseModel):
    title: str
    content: str
    profile_id: str | None = None

# class Thread(ThreadIn):
#     id: PydanticObjectId

class ThreadOut(ThreadIn):
    id: str | None = None
    title: str
    date_created: datetime | None = datetime
    content: str
    last_updated: datetime | None = datetime
    number_of_replies: int | None = 0
    likes: int | None = 0
    dislikes: int | None = 0
    posts: list[PostOut] | None = []

class ThreadList(BaseModel):
    threads: list[ThreadOut]

class PostIdRequest(BaseModel):
    post_id: str
