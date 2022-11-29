from pydantic import BaseModel
from datetime import datetime

from .accounts import Profile

class PostIn(BaseModel):
    content: str

class PostInWithThread(PostIn):
    thread_id: str

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
    author: Profile | None = Profile
    content: str
    posted: datetime | None = datetime
    edited: bool | None = False
    likes: int | None = 0
    dislikes: int | None = 0

class ThreadIn(BaseModel):
    title: str
    content: str

# class Thread(ThreadIn):
#     id: str
#     title: str
#     date_created: datetime
#     content: str
#     last_updated: datetime
#     author: Profile
#     number_of_replies: int
#     likes: int
#     dislikes: int
#     posts: list[Post]

class ThreadOut(ThreadIn):
    id: str
    title: str
    date_created: datetime | None = datetime
    content: str
    last_updated: datetime | None = datetime
    author: Profile | None = Profile
    number_of_replies: int | None = 0
    likes: int | None = 0
    dislikes: int | None = 0
    posts: list[PostOut]

class ThreadList(BaseModel):
    threads: list[ThreadOut]
