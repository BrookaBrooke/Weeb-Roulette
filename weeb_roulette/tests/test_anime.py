from fastapi.testclient import TestClient
from main import app
from queries.anime import AnimeQueueQueries

client = TestClient(app)


# class MockAnimeRepository:
