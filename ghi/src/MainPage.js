import React, { useEffect, useState } from "react";
import AnimeCard from "./components/AnimeCard";
import { Container, Carousel, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPage = () => {
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

  const pillows = [
    "https://images.pexels.com/photos/1248583/pexels-photo-1248583.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/788587/pexels-photo-788587.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1524232/pexels-photo-1524232.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/776120/pexels-photo-776120.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/994172/pexels-photo-994172.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  return (
    <Container className="card-carousel">
      <Carousel style={{ width: "100%" }}>
        {homepageCards.map((i) => {
          return (
            <Carousel.Item key={i[1].id}>
              <div style={{ display: "flex" }}>
                <span className="m-2" style={{ width: "100%" }}>
                  {/* Link is ready when detail is set up for dynamic data */}
                  <Link to={`/detail/${i[1].id}`}>
                    <AnimeCard
                      title={i[1].attributes.canonicalTitle}
                      image={i[1].attributes.posterImage?.tiny}
                    />
                  </Link>
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  {/* Link is ready when detail is set up for dynamic data */}
                  <Link to={`/detail/${i[2].id}`}>
                    <AnimeCard
                      title={i[2].attributes.canonicalTitle}
                      image={i[2].attributes.posterImage?.tiny}
                    />
                  </Link>
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  {/* Link is ready when detail is set up for dynamic data */}
                  <Link to={`/detail/${i[3].id}`}>
                    <AnimeCard
                      title={i[3].attributes.canonicalTitle}
                      image={i[3].attributes.posterImage?.tiny}
                    />
                  </Link>
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  {/* Link is ready when detail is set up for dynamic data */}
                  <Link to={`/detail/${i[4].id}`}>
                    <AnimeCard
                      title={i[4].attributes.canonicalTitle}
                      image={i[4].attributes.posterImage?.tiny}
                    />
                  </Link>
                </span>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <Container>
          <Card style={{ width: "30rem" }}>
            <Carousel>
              {pillows.map((pillow) => {
                console.log(pillow);
                return (
                  <Carousel.Item>
                    <img
                      src={pillow}
                      alt=""
                      style={{ width: "30rem", height: "25rem" }}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Card>
        </Container>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "right" }}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://thumbs.dreamstime.com/b/website-under-construction-27041099.jpg"
              alt="Card cap"
              style={{ width: "30rem", height: "25rem" }}
            />
            <div className="card-body">
              <h2 className="card-text">Coming soon, forum section.</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
