from pydantic import BaseModel

class Anime(BaseModel):
    id: str
    type: str
    links: str #url
    attributes: dict
    canonicalTitle: str
    startDate: str
    endDate: str
    ageRating: str
    ageRatingGuide: str
    status: str
    posterImage: dict #url
    coverimage: dict #url
    episodeCount: int
    episodeLength: int
    youtubeVideoId: str
    nsfw: bool

class AnimeList(BaseModel):
    AnimeList: list[Anime]

