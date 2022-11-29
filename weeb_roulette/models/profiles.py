from pydantic import BaseModel
from accounts.models import Account, AccountIn
from models.anime import AnimeQueue
from typing import Optional

class Profile(AccountIn):
    id: str
    bio: Optional[str]
    signature: Optional[str]
    account: Account
    animequeue: Optional[list[AnimeQueue]]

class ProfileOut(BaseModel):
    id: str
    username: str
    firstname: str
    lastname: str
    account: Account

# what's the point of profileOut here. Wouldn't I rather have one Profile class that has ALL information
# and we pick which information gets displayed where on a profile page through the front end?
# is Out only for Swagger?
