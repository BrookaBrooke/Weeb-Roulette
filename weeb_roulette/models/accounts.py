from pydantic import BaseModel

class Profile(BaseModel):
    name: str
    bio: str
    avatar: str
    signature: str
    admin: bool
    banned: bool
