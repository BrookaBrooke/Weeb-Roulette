from models.forums import ThreadIn, ThreadOut, PostIn, PostOut
import pymongo, os
from queries.client import Queries
from bson.objectid import ObjectId

# client = pymongo.MongoClient(os.environ["DATABASE_URL"])
# dbname = os.environ['DATABASE_NAME']
# db = client[dbname]
# collection = db['thread']


class ThreadQueries(Queries):
    DB_NAME = "weeb_roulette"
    COLLECTION = "thread"

    def create(self, thread: ThreadIn) -> ThreadOut:
        props = thread.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return ThreadOut(posts=[], **props)

    def get_all(self) -> list[ThreadOut]:
        result = self.collection.aggregate(
            [
                {
                    "$lookup": {
                        "from": "posts",
                        "localField": "_id",
                        "foreignField": "id",
                        "as": "posts",
                    }
                },
                {"$sort": {"posted": 1}},
            ]
        )
        threadPropsList = list(result)
        for threadProps in threadPropsList:
            threadProps["id"] = str(threadProps["_id"])
            threadProps["posts"] = [
                str(props["id"]) for props in threadProps["posts"]
            ]
        return [ThreadOut(**thread) for thread in threadPropsList]


class PostQueries(Queries):
    DB_NAME = "weeb_roulette"
    COLLECTION = "posts"

    def create(self, post: PostIn) -> PostOut:
        props = post.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return PostOut(**props)

    def delete(self, posts: str):
        self.collection.delete_one(
            {"posts": ObjectId(posts)}
        )

    def get(self, id: str) -> PostOut:
        props = self.collection.find_one({"id": id})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return PostOut(**props)
