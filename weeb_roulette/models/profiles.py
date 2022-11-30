from pydantic import BaseModel
from accounts.models import Account, AccountIn
from models.anime import AnimeQueue
from typing import Optional

class ProfileIn(BaseModel):
    bio: Optional[str]
    signature: Optional[str]
    city: Optional[str]
    state: Optional[str]

class Profile(ProfileIn):
    id: str
    account: Account
    animequeue: Optional[list[AnimeQueue]]
