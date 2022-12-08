import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const FrontPage = () => {
  const [animes, setAnimes] = useState([]);
  const [homepageCards, setHomepageCards] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_list/1";
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
    setHomepageCards(array);
  };

  useEffect(() => {
    fetchAnimes();
  }, []);

  return (
    <Container className="card-carousel">
      <Carousel style={{ width: "100%" }}>
        {homepageCards.map((i) => {
          return (
            <Carousel.Item key={i[1].id}>
              <div style={{ display: "flex" }}>
                <span className="m-2" style={{ width: "100%" }}>
                  <AnimeCard
                    title={i[1].attributes.canonicalTitle}
                    image={i[1].attributes.posterImage?.tiny}
                  />
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  <AnimeCard
                    title={i[2].attributes.canonicalTitle}
                    image={i[2].attributes.posterImage?.tiny}
                  />
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  <AnimeCard
                    title={i[3].attributes.canonicalTitle}
                    image={i[3].attributes.posterImage?.tiny}
                  />
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  <AnimeCard
                    title={i[4].attributes.canonicalTitle}
                    image={i[4].attributes.posterImage?.tiny}
                  />
                </span>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};
export default FrontPage;
