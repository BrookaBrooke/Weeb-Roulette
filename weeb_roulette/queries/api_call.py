import json
import requests

def get_anime(id):
    headers = {"Accept": "application/vnd.api+json", "Content-Type": "application/vnd.api+json"}
    url = f"https://kitsu.io/api/edge/anime/{id}"
    response = requests.get(url, headers)
    content = json.loads(response.content)
    return content


def get_anime_list(id):
    headers = {"Accept": "application/vnd.api+json", "Content-Type": "application/vnd.api+json"}
    url = f"https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]={id}"
    response = requests.get(url, headers)
    content = json.loads(response.content)
    return content
