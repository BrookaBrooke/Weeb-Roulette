from bson import ObjectId
from models.profiles import ProfileIn, Profile
from db import Queries

class ProfileQueries(Queries):
    DB_NAME = "weeb_roulette"
    COLLECTION = "profiles"

    def create_profile(self, profile: ProfileIn) -> Profile:
        props = profile.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return Profile(**props)

    def delete(self, id: str):
        self.collection.delete_one(
            {
                "_id": ObjectId(id)
            }
        )

    def get(self, id: str) -> Profile:
        props = self.collection.find_one({"_id": ObjectId(id)})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return Profile(**props)

    def all(self) -> list[Profile]:
        props = self.collection.find()
        if not props:
            return None
        results = []
        for prop in props:
            prop["id"] = str(prop["_id"])
            results.append(Profile(**prop))
        return results

    def update(self, id: str, bio: str, signature: str, city: str, state: str):
        self.collection.update_one(
            {"_id": ObjectId(id)},
            {"$set" : {
                "bio" : bio,
                "signature" : signature,
                "city" : city,
                "state" : state
                }
            }
        )
        return Profile(id=id, bio=bio, signature=signature, city=city, state=state)
