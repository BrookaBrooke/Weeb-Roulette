from fastapi.testclient import TestClient
from main import app
from accounts.queries import AccountQueries

client = TestClient(app)
