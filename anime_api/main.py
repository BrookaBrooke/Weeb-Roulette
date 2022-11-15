from db import AccountsVOQueries
from fastapi import FastAPI, Depends
from models import AccountVO
from poller import poll
import asyncio
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.environ.get("CORS_HOST", "http://localhost:3000")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/launch-details")
def launch_details():
    return {
        "launch_details": {
            "year": 2022,
            "month": 12,
            "day": "9",
            "hour": 19,
            "min": 0,
            "tz:": "PST"
        }
    }
@app.get("/api/accounts", response_model=list[AccountVO])
def get_accounts(queries: AccountsVOQueries=Depends()):
    accounts = queries.get_all_accounts()
    return accounts

@app.on_event("startup")
async def schedule_poller():
    loop = asyncio.get_event_loop()
    loop.create_task(poll())
