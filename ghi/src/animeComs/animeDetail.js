import { Container, Row, Col, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function AnimeDetail() {
  const [animes, setAnimes] = useState([]);
  const [detailCards, setDetailCards] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_detail/1";
    const result = await fetch(url);
    const data = await result.json();
    setAnimes(data.data);
    const array = [];
    let slideObject = {};
    let index = 0;
    data.data.map((cards, i) => {
      slideObject[index] = cards;
      if (i % 4 === 0) {
        array.push(slideObject);
        slideObject = {};
        index = 0;
      }
      index++;
    });
    array.shift();
    setDetailCards(array);
  };
  useEffect(() => {
    fetchAnimes();
  }, []);

  return (
    <Container className="detail">
      {detailCards.map((i) => {
        return (
          <Container.Item key={i[1].id}>
            <div style={{ display: "flex" }}>
              <span className="m-2" style={{ width: "100%" }}>
                <Card
                  title={i.attributes.canonicalTitle}
                  image={i.attributes.posterimage?.tiny}
                />
              </span>
            </div>
          </Container.Item>
        );
      })}
    </Container>
  );
}

export default AnimeDetail;
