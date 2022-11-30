from pydantic import BaseModel
from accounts.models import Account
from models.anime import AnimeQueue

class Profile(BaseModel):
    id: str
    username: str
    firstname: str
    lastname: str
    bio: str
    avatar: str
    signature: str
    account: Account
    animequeue: list[AnimeQueue]

