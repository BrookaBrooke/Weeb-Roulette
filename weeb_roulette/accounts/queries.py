
from .models import Account, AccountIn, AccountOut
from pymongo.errors import DuplicateKeyError
from .client import Queries
from bson import ObjectId


class DuplicateAccountError(ValueError):
    pass

class AccountQueries(Queries):
    DB_NAME = "weeb_roulette"
    COLLECTION = "accounts"

    def get(self, email: str) -> Account:
        props = self.collection.find_one({"email": email})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return Account(**props)

    def all(self) -> list[Account]:
        props = self.collection.find()
        if not props:
            return None
        results = []
        for prop in props:
            prop["id"] = str(prop["_id"])
            results.append(Account(**prop))
        return results

    def create(self, info: AccountIn, hashed_password: str, roles=["user"]) -> Account:
        self.collection.create_index("email", unique=True)
        self.collection.create_index("username", unique=True)
        props = info.dict()
        props["password"] = hashed_password
        props["roles"] = roles
        try:
            self.collection.insert_one(props)
        except DuplicateKeyError:
            raise DuplicateAccountError()
        props["id"] = str(props["_id"])
        return Account(**props)

    def update(self, id: str, username: str, email: str, password: str ):
        self.collection.update_one(
            {"_id": ObjectId(id)},
            {"$set" : {
                "username" : username,
                "email" : email,
                "password" : password
                }
            }
        )
        return AccountOut(id=id, username=username, email=email)

    def delete(self, id: str):
        self.collection.delete_one({"_id": ObjectId(id)})
