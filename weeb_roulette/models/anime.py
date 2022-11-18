from pydantic import BaseModel
from typing import Optional

class Anime(BaseModel):
    id: str
    type: str
    links: str
    attributes: dict = {}
    canonicalTitle: str
    startDate: str
    endDate: str
    ageRating: str
    ageRatingGuide: str
    status: str
    posterImage: dict = {}
    coverImage: dict = {}
    episodeCount: int
    episodeLength: int
    youtubeVideoId: str
    nsfw: bool

class AnimeList(BaseModel):
    AnimeList: list[Anime]

#class QueueIn(BaseModel):

#class QueueOut(BaseModel):
