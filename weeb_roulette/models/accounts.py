from pydantic import BaseModel

class Account(BaseModel):
    name: str
    username: str
    password: str
    email: str
    bio: str
    avatar: str
    signature: str
    admin: bool
    banned: bool
