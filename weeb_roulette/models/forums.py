from pydantic import BaseModel
from datetime import datetime

from .profiles import Profile

class Post(BaseModel):
    author: str
    posted: datetime
    edited: bool
    likes: int
    dislikes: int

class Thread(BaseModel):
    id: int
    title: str
    date_created: datetime
    content: str
    last_updated: datetime
    author: str
    number_of_replies: int
    likes: int
    dislikes: int
    posts: list[Post]
