from bson import ObjectId
from models.anime import AnimeQueueIn, AnimeQueue, AnimeQueueOut
from db import database, Queries


collection = database['animequeue']
# do we need "collection" when COLLECTION exists

class AnimeQueueQueries(Queries):
    DB_NAME = "weeb_roulette"
    COLLECTION = "animequeue"

    def create_queue(self, animequeue: AnimeQueueIn) -> AnimeQueueOut:
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
