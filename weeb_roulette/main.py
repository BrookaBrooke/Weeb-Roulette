# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# import os
# from routers import anime, accounts, forums, profiles
# from accounts.authenticator import authenticator


# app = FastAPI()
# app.include_router(accounts.router)
# app.include_router(authenticator.router)
# app.include_router(anime.router)
# app.include_router(forums.router)
# app.include_router(profiles.router)

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=[
#         os.environ.get("CORS_HOST", "http://localhost:3000")
#     ],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
