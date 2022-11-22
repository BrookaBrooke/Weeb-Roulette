
from .models import Account, AccountIn, AccountPassword
from pymongo.errors import DuplicateKeyError
from db import Queries


class DuplicateAccountError(ValueError):
    pass

class AccountQueries(Queries):
    DB_NAME = "anime"
    COLLECTION = "accounts"

    def get(self, email: str) -> AccountPassword:
        props = self.collection.find_one({"email": email})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AccountPassword(**props)

    def create(self, info: AccountIn, hashed_password: str, roles=["user"]) -> Account:
        props = info.dict()
        props["password"] = hashed_password
        props["roles"] = roles
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return Account(**props)
