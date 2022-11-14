## User Authentication

### Log in

* Endpoint path: /token
* Endpoint method: POST

* Request shape (form):
  * username: string
  * password: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        "username" : string,
        "password" : string,
        "email" : email,
        "avatar" : picture_url,
        "signature" : string,
        "admin" : boolean,
      },
      "token": string
    }
    ```



### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```


### Account Page Information

## Account Page 

### Get account information

* Endpoint path: /account_info
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: List of items that make up an account
* Response shape:
    ```json
    {
      "account_info": [
        {
          name: str,
          username: str,
          email: str,
          bio: str,
          avatar: picture_url,
          signature: str,
        }
      ]
    }
    ```

### Edit account information

* Endpoint path: /account_info
* Endpoint method: PUT

* Headers:
  * Authorization: Bearer token

* Request Body:
    ```json
    {
      "account_info": [
        {
          name: str,
          username: str,
          email: str,
          bio: str,
          avatar: picture_url,
          signature: str,
        }
      ]
    }
    ```
* Response: An indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean,
      "message": string
    }
    ```

## Create Account Page

### Create an account

* Endpoint path: /account_info
* Endpoint method: POST

* Request Body:
    ```json
    {
      "account_info": [
        {
          name: str,
          username: str,
          email: str,
          bio: str,
          avatar: picture_url,
          signature: str,
          admin: boolean,
        }
      ]
    }
    ```
* Response: An indication of success or failure
* Response shape:
    ```json
    {
      "success": boolean,
      "message": string
    }
    ```

## Index

### Search Bar

* Endpoint path: /concat_list
* Endpoint method: GET
* Query parameters:
  * q: the word(s) to search for

* Response: A list of Animes that match the query parameter
* Response shape:
    ```json
    {
      "anime": [
        {
          name: str,
          href: url,
        }
      ]
    }
    ```

### Account Info

* Endpoint path: /account_info
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: Avatar and username for topright bar
* Response shape:
    ```json
    {
      "account_main": [
        {
          username: string,
          avatar: string,
          href: url,
        }
      ]
    }
    ```

### Roulette

* Endpoint path: /anime_list
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: Get random Anime from Anime List
* Response shape:
    ```json
    {
      "roulette": [
        {
          id: int,
          href: url,
        }
      ]
    }
    ```

## Main Page Information

### Trending Anime

* Endpoint path: /anime_list
* Endpoint method: GET

* Response: List of items that make up highest hit count Animes
* Response shape:
    ```json
    {
      "trending_anime": [
        {
          name: str,
          hits: int,
          href: url,
        }
      ]
    }
    ```

### Recent Forum Post

* Endpoint path: /forum_posts
* Endpoint method: GET

* Response: List of items that make up most recent forum posts
* Response shape:
    ```json
    {
      "recent_forum": [
        {
          title: str,
          href: url,
        }
      ]
    }
    ```

## Anime Page information

### Anime List

* Endpoint path: /https://kitsu.io/api/edge/anime
* Endpoint method: GET

* Response: List of animes
* Response shape:
    ```json
    {
      "anime_list": [
        {
          id: int,
          type: str,

        }
      ]
    }
    ```

### Anime Detail

## Manga Page Information *

### Manga List

### Manga Detail


## Forum Page Information

### Category List

### Category List Detail

### Threat List 

### Thread List Detail

### Post List Detail