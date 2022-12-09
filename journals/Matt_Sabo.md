11/14/2022:
Created Poller.py for Anime_api
Created db.py in Anime_api
Added get_accounts function to main.py
Created AnimeList.js component in ghi/animeComs

11/15/2022
bugfixed: FastAPI now shows at localhost:8000/docs
deleted poller.py
renamed Anime_api to weeb_roulette, only using one api

11/16/2022
worked with the team to create connection between mongodb container and fastapi container.
Updated requirements.txt file.

11/17/2022
I studied the Authentication so that I could implement it on the 21st.

11/18/2022
I played Pokemon: Scarlet all day, no work done :P

11/21/2022
created weeb-roulette/accounts and the files within. made Authentication functional. Will work on more in the future.
added Accounts.py in the weeb-roulette/routers directory.

11/22/2022
Authentication completed. Can create accounts, get accounts, and create/delete tokens on login

11/23/2022
studied mongodb lecture/content on Learn.

11/28/2022
changed DB name to match our app name. Added correct collections to our queries.

11/29/2022
username attached to account, Profile models created, profile queries created.

11/30/2022
client.py added, back-end just about finished, profile routers/queries completed.

12/01/2022
back-end finished, roles added to accounts "users", Forums/Anime attached to Profile.

12/02/2022
Watched the webhooks videos on Learn in preparation to write our front-end using webhooks and redux tool-kit

12/05/2022
Started making the signup form for the front-end.

12/06/2022
Made signup functional, started loginform, but struggling to get it to work. Going to try
using Redux to implement Login with mutations.

12/07/2022
Added some css and bootstrap to the project to give it some character. Trying to implement Redux into the front-end now, store is operational. Just need to create the actions and reducers for the components.

12/08/2022
Converted the signup and login to RTK, neither work now. Getting a method not allowed error for signup, and not sure why. Then after wasting the entire day on changing signup to RTK, I'm putting it back to a standard React Component.
