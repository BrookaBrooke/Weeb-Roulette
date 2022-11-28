from pydantic import BaseModel
from models.anime import AnimeQueue

class Profile(BaseModel):
    id: str
    name: str
    bio: str
    avatar: str
    signature: str
    # admin: bool
    # banned: bool
    anime_queue: list[AnimeQueue]



    
