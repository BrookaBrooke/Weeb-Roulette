from bson.objectid import ObjectId
from pydantic import BaseModel
from typing import List


class PydanticObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, value: ObjectId | str) -> ObjectId:
        if value:
            try:
                ObjectId(value)
            except:
                raise ValueError(f"Not a valid object id: {value}")
        return value

class AccountIn(BaseModel):
    username: str
    email: str
    password: str

class Account(AccountIn):
    id: PydanticObjectId

class AccountOut(BaseModel):
    id: str
    username: str
    email: str

class AccountPassword(AccountOut):
    password: str
