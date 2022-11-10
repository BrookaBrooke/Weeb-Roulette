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

## Account Creation

### Get account information

* Endpoint path: /news
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Response: A list of news items
* Response shape:
    ```json
    {
      "n": [
        {

        }
      ]
    }
    ```

## Page Template

### Search Bar

### Account Info

### Roulette

## Main Page Information

### Trending Anime

### Recent Forum Post

### Ads

## Anime Page information


### Anime List


### Anime Detail



## Manga Page Information

### Manga List

### Manga Detail


## Forum Page Information

### Category List

### Category List Detail

### Threat List 

### Thread List Detail

### Post List Detail