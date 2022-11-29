from pydantic import BaseModel
from accounts.models import Account
from .anime import AnimeQueue

class Profile(BaseModel):
    id: str
    username: str
    name: str
    bio: str
    avatar: str
    signature: str
    account: Account
    animequeue: list[AnimeQueue]
