import os
from psycopg_pool import ConnectionPool


pool = ConnectionPool(conninfo=os.environ["DATABASE_URL"])

class AccountsVO:
    def get_all_accounts(self):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                cursor.execute("""
                SELECT name, username, email, bio, avatar, signature, admin
                FROM account_vo
                """)

                rows = cursor.fetchall()
                accounts = []
                for row in rows:
                    account = {
                        "name": row[0],
                        "username": row[1],
                        "email": row[2],
                        "bio": row[3],
                        "avatar": row[4],
                        "signature": row[5],
                        "admin": row[6],
                    }
                    accounts.append(account)
                return accounts

    def create_account_vo(self, account):
        with pool.connection() as connection:
            with connection.cursor() as cursor:
                query = """
                INSERT INTO account_vo (name, username, email, bio, avatar, signature, admin)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                ON CONFLICT (email, username) DO NOTHING
                """
                cursor.execute(query, [
                    account["name"],
                    account["username"],
                    account["email"],
                    account["bio"],
                    account["avatar"],
                    account["signature"],
                    account["admin"],
                ])
