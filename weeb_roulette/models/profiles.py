from pydantic import BaseModel
from accounts.models import AccountOut
from models.anime import AnimeQueue
from models.forums import ThreadOut
from typing import Optional

class ProfileIn(BaseModel):
    bio: Optional[str]
    signature: Optional[str]
    city: Optional[str]
    state: Optional[str]

class Profile(ProfileIn):
    id: str
    account_id: str | None = None
    animequeues: list[AnimeQueue] | None = []
    threads: list[ThreadOut] | None = []

class ProfileList(BaseModel):
    profiles: list[Profile]
