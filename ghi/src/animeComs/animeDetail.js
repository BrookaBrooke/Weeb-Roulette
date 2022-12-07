import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function AnimeDetail() {
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
  }, []); // componentDidMount

  return (
    <div className="container">
      <h1 className="header-title">yo</h1>
      {animes.map((anime) => {
        return (
          <tr key={anime.id}>
            <h1>{anime.attributes.canonicalTitle}</h1>
          </tr>
        );
      })}
    </div>
  );
}

export default AnimeDetail;
