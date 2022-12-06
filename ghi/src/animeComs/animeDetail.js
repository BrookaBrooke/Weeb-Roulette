import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function AnimeDetail() {
  const [animes, setAnimes] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_detail/";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
  };

  useEffect(() => {
    fetchAnimes();
  }, []); // componentDidMount

  return (
    <div>
      {animes.map((anime) => {
        return (
          <tr key={anime.id}>
            <td className="model-title">{anime.attributes.canonicalTitle}</td>
          </tr>
        );
      })}
      <h1>title</h1>
    </div>
  );
}

export default AnimeDetail;
