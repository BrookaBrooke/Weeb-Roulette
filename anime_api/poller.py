import asyncio
import os
import requests
from db import AccountsVO

account_url = os.environ["ACCOUNT_API_HOST"] + "/api/account"
POLL_INTERVAL_SECS = int(os.environ.get("POLL_INTERVAL_SECS", 10))

async def poll():
    queries = AccountsVO()

    while True:
        print("the poller is running")
        try:
            response = requests.get(account_url)
            if response.status_code == 200:
                print("data from accounts:", response)
                accounts = response.json()
                for account in accounts:
                    queries.create_accountvo(account)

        except Exception as ex:
            print("Exception caught in poller", ex)

        await asyncio.sleep(POLL_INTERVAL_SECS)

if __name__ == "__main__":
    poll()
