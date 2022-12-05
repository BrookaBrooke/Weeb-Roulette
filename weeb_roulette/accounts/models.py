from bson.objectid import ObjectId
from pydantic import BaseModel, EmailStr, constr


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

class SessionOut(BaseModel):
    jti: str
    account_id: str


class AccountIn(BaseModel):
    username: str
    email: constr(to_lower=True)
    password: str

class Account(AccountIn):
    id: PydanticObjectId
    roles: list[str]

class AccountOut(BaseModel):
    id: str
    username: str
    email: str
    roles: list[str]

class AccountPassword(AccountOut):
    password: str
