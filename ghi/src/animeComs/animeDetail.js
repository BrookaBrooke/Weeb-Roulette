import { Container, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const AnimeDetail = () => {
  const [animes, setAnimes] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_detail/1";
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
      {animes.map((anime) => {
        return (
          <div>
            <p>{anime.attributes.canonicalTitle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeDetail;
