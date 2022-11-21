
from .models import User, UserIn
from pymongo.errors import DuplicateKeyError
from db import Queries

class DuplicateUserError(ValueError):
    pass

class UserQuery(Queries):
    DB_NAME = "library"
    COLLECTION = "accounts"

    def get(self, email: str) -> User:
        props = self.collection.find_one({"email": email})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return User(**props)

    def create(self, info: UserIn, hashed_password: str, roles=["user"]) -> User:
        props = info.dict()
        props["password"] = hashed_password
        props["roles"] = roles
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateUserError()
        props["id"] = str(props["_id"])
        return User(**props)
