import { Container, Card, Image, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

const AnimeDetail = () => {
  const [animes, setAnimes] = useState({});

  // const { id } = useParams();

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_detail/1";
    // const url = `http://localhost:8000/anime_detail/${id}`;

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
      <Container>
        <Card className="container">
          <Col>
            <Image src={animes?.attributes?.posterImage?.small} />
          </Col>
          <Col className="extra">
            <h3 className="header-title">
              {animes?.attributes?.canonicalTitle}
            </h3>
            <p>{animes?.attributes?.description}</p>
            <p>Start Date: {animes?.attributes?.startDate}</p>
            <p>End Date: {animes?.attributes?.endDate}</p>
            <p>Rating: {animes.attributes?.ageRatingGuide}</p>
          </Col>
        </Card>
      </Container>
    </div>
  );
};

export default AnimeDetail;
