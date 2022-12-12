from fastapi.testclient import TestClient
from main import app
from accounts.queries import AccountQueries

client = TestClient(app)


class MockAccountRepository:
    def create_account(self, info, hashed_password):
        response = {
            "info": {
                "username": "string",
                "email": "string",
                "password": "string"
            },
            "profile": {
                "bio": "string",
                "signature": "string",
                "city": "string",
                "state": "string"
            }
            }
        return response
def test_create_account():

#Arrange
    app.dependency_overrides[AccountQueries] = MockAccountRepository
#Act
    account = {
            "info": {
                "username": "ayo",
                "email": "weeb@weeb.com",
                "password": "6666"
            },
            "profile": {
                "bio": "",
                "signature": "",
                "city": "",
                "state": ""
            }
            }
    response = client.post('/api/accounts')
#Assert
    assert response.status_code == 200
    assert response.json()['info'['username']]== 'ayo'

#1. you can post to an account
