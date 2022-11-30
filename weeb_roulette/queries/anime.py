from bson import ObjectId
from models.anime import AnimeQueueIn, AnimeQueue, AnimeIdRequest
from queries.db import database, Queries

collection = database['animequeue']

class AnimeQueueQueries(Queries):
    DB_NAME = "weeb_roulette"
    COLLECTION = "animequeue"

    def create_queue(self, animequeue: AnimeQueueIn) -> AnimeQueue:
        props = animequeue.dict()
        self.collection.insert_one(props)
        props["id"] = str(props["_id"])
        return AnimeQueue(**props)


    def delete_queue(self, id: str):
        self.collection.delete_one(
            {
                "_id" : ObjectId(id)
            }
        )
    

    def add_queue_item(self, id:str, anime_id:str):
        props = self.collection.update_one(
            {"_id": ObjectId(id)},
            {"$push": { "anime_ids" : anime_id  }}
        )
        return AnimeIdRequest(id=id, anime_id=anime_id)


    def delete_queue_item(self, id: str, anime_id: str):
        props = self.collection.update_one(
            {"_id": ObjectId(id)},
            {"$pull": { "anime_ids" : anime_id  }}
        )
        return AnimeIdRequest(id=id, anime_id=anime_id)


    def update_queue(self, id:str, name:str):
        self.collection.update_one(
            {"_id": ObjectId(id)},
            {"$set" : {"name" : name}}
        )
        return AnimeQueue(id=id, name=name)


    def get_queue(self, id: str) -> AnimeQueue:
        props = self.collection.find_one({"_id": ObjectId(id)})
        if not props:
            return None
        props["id"] = str(props["_id"])
        return AnimeQueue(**props)


    def get_queues(self) -> list[AnimeQueue]:
        result = self.collection.aggregate(
            [
                {
                    "$lookup": {
                        "from": "animequeues",
                        "localField": "_id",
                        "foreignField": "id",
                        "as": "animequeues",
                    }
                },
                {"$sort": {"posted": 1}},
            ]
        )
        animequeuePropsList = list(result)
        for animequeueProps in animequeuePropsList:
            animequeueProps["id"] = str(animequeueProps["_id"])
            animequeueProps["animequeues"] = [
                str(props["id"]) for props in animequeueProps["animequeues"]
            ]
        return [AnimeQueue(**animequeue) for animequeue in animequeuePropsList]



