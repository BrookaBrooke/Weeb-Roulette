# from fastapi.testclient import TestClient
# from main import app
# # # from queries.anime import AnimeQueueQueries

# client = TestClient(app)

# class AnimeDetailInfo:
#     def get_anime_detail(self):
#         return [] or {}
#         #not sure if it is an object or array yet 

# def test_anime_detail():
# #     #Arrange
#     app.dependency_overrides[AnimeQueueQueries] = AnimeDetailInfo

# #     #Act
# #     # response = client.get("/anime_detail/{id}")
#     response = client.get("/anime_detail/")

# #     #Clean Up
#     app.dependency_overrides = {}

#     assert response.status_code == 200
#     assert response.json() == {"data": {}}
#^ my first try for test. Failed

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
