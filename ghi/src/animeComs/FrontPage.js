import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import { Container, Carousel, Card } from "react-bootstrap";
// import Carousel from "react-multi-carousel";

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

<>
  return (
  <Container className="card-carousel">
    <Carousel>
      <Carousel.Item>
        <div style={{ display: "flex" }}>
          <span className="m-2" style={{ width: "100%" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/1654748/pexels-photo-1654748.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="First slide"
                />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  saepe praesentium magni ratione inventore consequatur facere
                  possimus quo placeat nisi. Et quo odit aspernatur atque nisi
                  quos impedit. Perspiciatis, odio?
                </Card.Text>
              </Card.Body>
            </Card>
          </span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: "flex" }}>
          <span className="m-2" style={{ width: "100%" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="First slide"
                />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  saepe praesentium magni ratione inventore consequatur facere
                  possimus quo placeat nisi. Et quo odit aspernatur atque nisi
                  quos impedit. Perspiciatis, odio?
                </Card.Text>
              </Card.Body>
            </Card>
          </span>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ display: "flex" }}>
          <span className="m-2" style={{ width: "100%" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <img
                  className="d-block w-100"
                  src="https://images.pexels.com/photos/3408353/pexels-photo-3408353.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="First slide"
                />
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id
                  saepe praesentium magni ratione inventore consequatur facere
                  possimus quo placeat nisi. Et quo odit aspernatur atque nisi
                  quos impedit. Perspiciatis, odio?
                </Card.Text>
              </Card.Body>
            </Card>
          </span>
        </div>
      </Carousel.Item>
    </Carousel>
  </Container>
  );
</>;

export default FrontPage;
