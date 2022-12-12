from fastapi.testclient import TestClient
from main import app
from queries.profiles import ProfileQueries

client = TestClient(app)


class MockProfileRepository:
    def all(self):
        return []


def test_get_queue():

    # Arrange
    app.dependency_overrides[ProfileQueries] = MockProfileRepository

    # Act
    response = client.get("/profiles")

    # Assert
    assert response.status_code == 200
    assert response.json() == {'profiles': []}

    # Clean up
    app.dependency_overrides = {}

