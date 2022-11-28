from pydantic import BaseModel
from accounts.models import Account

class Profile(BaseModel):
    name: str
    bio: str
    avatar: str
    signature: str
    account: Account
    animequeue: list[str]
