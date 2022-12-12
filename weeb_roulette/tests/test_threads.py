from fastapi.testclient import TestClient
from main import app
from queries.forums import ThreadQueries

client = TestClient(app)

class MockThreadRepository:
    def get_all(self):
        return []

def test_get_all_threads():

    # Arrange
    app.dependency_overrides[ThreadQueries] = MockThreadRepository

    # Act
    response = client.get("/threads")

    # Assert
    assert response.status_code == 200
    assert response.json() == []

    # Clean Up
    app.dependency_overrides = {}
