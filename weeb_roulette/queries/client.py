from bson import ObjectId
import pymongo, os
from models.anime import AnimeQueueIn, AnimeQueue, AnimeQueueOut

client = pymongo.MongoClient(os.environ["DATABASE_URL"])

class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]