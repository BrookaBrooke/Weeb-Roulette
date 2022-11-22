from pydantic import BaseModel
from datetime import datetime

from .accounts import Account

class Post(BaseModel):
    author: Account.username
    posted: datetime.datetime
    edited: bool
    likes: int
    dislikes: int

class Thread(BaseModel):
    id: int
    title: str
    date_created: datetime.datetime
    content: str
    last_updated: datetime.datetime
    author: Account.username
    number_of_replies: int
    likes: int
    dislikes: int
    posts: Post | None = None
