from db import Queries
from .models import User, SessionOut
from bson.objectid import ObjectId
from typing import Optional

class SessionQueries(Queries):
    DB_NAME = "library"
    COLLECTION = "sessions"

    def get(self, jti: str):
        return self.collection.find_one({"jti": jti})

    def create(self, jti: str, user: User) -> Optional[User]:
        result = self.collection.insert_one(
            {
                "jti": jti,
                "user_id": ObjectId(user.id),
            }
        )
        if result and result.inserted_id:
            return SessionOut(jti=jti, user_id=user.id)
        return None

    def delete(self, jti: str):
        self.collection.delete_many({"jti": jti})

    def validate(self, jti: str):
        return self.collection.count_documents({"jti": jti}) > 0

    def delete_sessions(self, user_id: str):
        self.collection.delete_many({"user_id": ObjectId(user_id)})
