from pydantic import BaseModel
from models.anime import AnimeQueue
from models.forums import ThreadOut
from typing import Optional

class ProfileIn(BaseModel):
    bio: Optional[str] | None
    signature: Optional[str] | None
    city: Optional[str] | None
    state: Optional[str] | None

class Profile(ProfileIn):
    id: str
    account_id: str | None = None
    animequeues: list[AnimeQueue] | None = []
    threads: list[ThreadOut] | None = []

class ProfileList(BaseModel):
    profiles: list[Profile]
