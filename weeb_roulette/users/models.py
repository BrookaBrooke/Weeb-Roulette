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

class UserIn(BaseModel):
    username: str
    email: str
    password: str
    full_name: str

class User(UserIn):
    id: PydanticObjectId
    roles: List[str]

class UserOut(BaseModel):
    id: str
    username: str
    email: str
    full_name: str

class UserPassword(UserOut):
    hashed_password: str

class SessionOut(BaseModel):
    jti: str
    user_id: str
