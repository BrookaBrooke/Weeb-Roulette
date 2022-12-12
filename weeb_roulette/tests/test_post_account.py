from fastapi.testclient import TestClient
from main import app
from accounts.queries import AccountQueries

client = TestClient(app)


class MockAccountRepository:
    def create_account(self, account):
        response = {
            "id": 1337,
            "owner": {
            "id": "nerd",
            "username": "weeb",
            "email": "weeb@weeb.com",
            "roles":[]}
        }
        response.update(1337)

def test_create_account():

#Arrange
    app.dependency_overrides[AccountQueries] = MockAccountRepository
#Act
    account = {
    'username': 'weeb',
    'password': 'pass',
    }
    response = client.post('/api/accounts/')
#Assert
    assert response.status_code == 200
    assert response.json()['username']== 'weeb'

#1. you can post to an account
