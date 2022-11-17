from pydantic import BaseModel
from models.pool import pool

class attributes(BaseModel):
    synopsis: str

class posterImage(BaseModel):
    tiny : str
    small: str
    medium: str
    large: str
    original: str

class coverImage(BaseModel):
    tiny: str
    small: str
    large: str
    original: str

class Anime(BaseModel):
    id: str
    type: str
    links: str
    attributes: attributes
    canonicalTitle: str
    startDate: str
    endDate: str
    ageRating: str
    ageRatingGuide: str
    status: str
    posterImage: posterImage
    coverImage: coverImage
    episodeCount: int
    episodeLength: int
    youtubeVideoId: str
    nsfw: bool

class AnimeList(BaseModel):
    AnimeList: list[Anime]


