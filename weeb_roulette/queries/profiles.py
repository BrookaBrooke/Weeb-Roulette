from bson import ObjectId
from models.profiles import Profile, ProfileOut
from db import database, Queries


collection = database["profiles"]

class ProfileQueries(Queries):
    DB_NAME = "weeb_roulette"
    COLLECTION = "profiles"

    def create_profile(self, profile: Profile) -> ProfileOut:
        props = profile.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return ProfileOut(**props)

    def delete(self, profile_id: str):
        self.collection.delete_one(
            {
                "profile_id": ObjectId(profile_id)
            }
        )

    def get(self, id: str) -> ProfileOut:
        props = self.collection.find_one({"id": id})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return ProfileOut(**props)
