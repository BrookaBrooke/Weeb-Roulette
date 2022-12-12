
from fastapi.testclient import TestClient
from queries.anime import AnimeQueueQueries

from main import app

client = TestClient(app)

class AnimeQueuesMock():
    def get_queues(self):
        return []

def test_get_queues():
    #arrange
    app.dependency_overrides[AnimeQueueQueries] = AnimeQueuesMock

    #act
    response = client.get("/anime_queues")

    #assert

    assert response.status_code == 200
    assert response.json() == {"animequeues": []}

    app.dependency_overrides = {}
