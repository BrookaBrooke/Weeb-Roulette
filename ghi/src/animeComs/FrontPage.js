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

<>
  /*{" "}
  <Container className="card-carousel">
    <Carousel>
      return(
      <div
        id="carouselBasicExample"
        class="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
              class="d-block w-100"
              alt="Sunset Over the City"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
              class="d-block w-100"
              alt="Canyon at Nigh"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>

          <div class="carousel-item">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
              class="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      )
    </Carousel>
  </Container>
</>;
