from bson import ObjectId
from models.anime import AnimeQueueIn, AnimeQueue, AnimeQueueOut
from db import Queries

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

    def get_by_profile(self, profile_id: str) -> list[AnimeQueue]:
        props = self.collection.find({"profile_id" : profile_id})
        if not props:
            return None
        animequeues = []
        for animequeue in props:
            animequeue["id"] = str(animequeue["_id"])
            i = AnimeQueue(**animequeue)
            animequeues.append(i)
        return animequeues
