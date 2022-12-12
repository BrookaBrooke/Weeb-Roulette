from fastapi.testclient import TestClient
from main import app
from accounts.queries import AccountQueries

client = TestClient(app)


class MockAccountRepository:
    def all(self):
        return []


def test_get_all_accounts():

    # Arrange
    app.dependency_overrides[AccountQueries] = MockAccountRepository

    # Act
    response = client.get("/api/accounts")

    # Assert
    assert response.status_code == 200
    assert response.json() == []

    # Clean up
    app.dependency_overrides = {}
