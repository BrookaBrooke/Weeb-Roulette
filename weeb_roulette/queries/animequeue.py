from bson import ObjectId
import pymongo, os
from models.anime import AnimeQueueIn, AnimeQueue, AnimeQueueOut
from queries.client import Queries

# client = pymongo.MongoClient(os.environ["DATABASE_URL"])
# dbname = os.environ['DATABASE_NAME']
# db = client[dbname]
# collection = db['animequeue']

# class Queries:
#     @property
#     def collection(self):
#         db = client[self.DB_NAME]
#         return db[self.COLLECTION]

#     def create(data):
#         data = dict(data)
#         response = collection.insert_one(data)
#         return str(response.inserted_id)

#     def all():
#         response = collection.find()
#         data = []
#         for i in response:
#             i["_id"] = str(i["_id"])
#             data.append(i)
#         return data


class AnimeQueueQueries(Queries):
    DB_NAME = "anime"
    COLLECTION = "animequeue"
    
    def create(self, animequeue: AnimeQueueIn) -> AnimeQueueOut:
        props = animequeue.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return AnimeQueueOut(**props)
    
    def delete(self, anime_ids: str):
        self.collection.delete_one(
            {
                "anime_ids": ObjectId(anime_ids)
            }
        )

    def get(self, id: str) -> AnimeQueueOut:
        props = self.collection.find_one({"id": id})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AnimeQueueOut(**props)
