from fastapi.testclient import TestClient
from main import app
from queries.anime import AnimeQueueQueries

client = TestClient(app)

class AnimeDetailInfo:
    def get_anime_detail(self):
        return []

def test_anime_detail():
    #Arrange
    app.dependency_overrides[AnimeQueueQueries] = AnimeDetailInfo

    #Act
    # response = client.get("/anime_detail/{id}")
    response = client.get("/anime_detail/")

    #Clean Up
    app.dependency_overrides = {}

    assert response.status_code == 200
    assert response.json() == {"anime": []}




