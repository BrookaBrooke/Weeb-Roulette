import { Container, Card, Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const AnimeDetail = () => {
  const [animes, setAnimes] = useState({});

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_detail/";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  return (
    <div>
      <Card className="container">
        <Image src={animes?.attributes?.posterImage?.large} />
      </Card>
      <Card className="container">
        <h3>{animes?.attributes?.canonicalTitle}</h3>
        <p>{animes?.attributes?.description}</p>
        <p>Start Date: {animes?.attributes?.startDate}</p>
        <p>End Date: {animes?.attributes?.endDate}</p>
        <p>Rating: {animes.attributes?.ageRatingGuide}</p>
      </Card>
    </div>
  );
};

export default AnimeDetail;
