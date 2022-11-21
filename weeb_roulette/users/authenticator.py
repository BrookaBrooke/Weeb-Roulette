# authenticator.py
import os
from fastapi import Depends
from jwtdown_fastapi.authentication import Authenticator
from users.users import UserQuery
from users.models import UserPassword, UserOut


class MyAuthenticator(Authenticator):
    async def get_account_data(
        self,
        username: str,
        users: UserQuery,
    ):
        # Use your repo to get the account based on the
        # username (which could be an email)
        return users.get(username)

    def get_account_getter(
        self,
        users: UserQuery = Depends(),
    ):
        # Return the accounts. That's it.
        return users

    def get_hashed_password(self, user: UserPassword):
        # Return the encrypted password value from your
        # account object
        return user.hashed_password

    def get_account_data_for_cookie(self, user: UserOut):
        # Return the username and the data for the cookie.
        # You must return TWO values from this method.
        return user.username, UserOut(**user.dict())


authenticator = MyAuthenticator(os.environ["SIGNING_KEY"])
