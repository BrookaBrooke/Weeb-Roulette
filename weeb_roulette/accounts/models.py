from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List

class AccountIn(BaseModel):
    email: str
    password: str

class Account(AccountIn):
    id: str
    roles: List[str]

class AccountOut(BaseModel):
    id: str
    email: str
    roles: List[str]

class AccountPassword(AccountOut):
    password: str

class SessionOut(BaseModel):
    jti: str
    account_id: str
