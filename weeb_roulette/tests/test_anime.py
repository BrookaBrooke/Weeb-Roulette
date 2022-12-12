# from fastapi.testclient import TestClient
# from main import app
# from queries.anime import AnimeQueueQueries

# client = TestClient(app)


class MockAnimeRepository:
    def get_queues(self):
        return []


def test_get_anime_queues():

    # Arrange
    app.dependency_overrides[AnimeQueueQueries] = MockAnimeRepository

    # Act
    response = client.get("/anime_queues")

    # Assert
    assert response.status_code == 200
    assert response.json() == {'animequeues': []}

    # Clean up
    app.dependency_overrides = {}
