import pymongo, os

client = pymongo.MongoClient(os.environ["DATABASE_URL"])
dbname = os.environ['DATABASE_NAME']
db = client[dbname]
collection = db['anime']

class Queries:
    @property
    def collection(self):
        db = client[self.DB_NAME]
        return db[self.COLLECTION]

def create(data):
    data = dict(data)
    response = collection.insert_one(data)
    return str(response.inserted_id)

def all():
    response = collection.find()
    data = []
    for i in response:
        i["_id"] = str(i["_id"])
        data.append(i)
    return data
