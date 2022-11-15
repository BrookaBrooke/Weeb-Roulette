from pydantic import BaseModel

class AccountVO(BaseModel):
    name: str
    username: str
    email: str
    bio: str
    avatar: str
    signature: str
    admin: bool
