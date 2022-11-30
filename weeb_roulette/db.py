import pymongo, os

client = pymongo.MongoClient(os.environ["DATABASE_URL"])
dbname = os.environ['DATABASE_NAME']
db = client[dbname]

class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]
