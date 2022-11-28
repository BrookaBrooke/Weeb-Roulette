from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import anime, accounts, forums
from queries.api_call import get_anime, get_anime_list
from accounts.authenticator import authenticator
from models.accounts import Profile


app = FastAPI()
app.include_router(accounts.router)
app.include_router(authenticator.router)
app.include_router(anime.router)
app.include_router(forums.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# @app.get("/all")
# def get_all():
#     data = db.all()
#     return {"data": data}


