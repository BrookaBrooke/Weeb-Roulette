import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const FrontPage = () => {
  const [animes, setHomepageCards] = useState([]);
  // const [homepageCards, setHomepageCards] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_list/1";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setHomepageCards(data.data);
    const array = [];
    let slideObject = {};
    let index = 0;
    animes.cards.forEach((animes, i) => {
      slideObject[index] = animes;
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
      <Carousel style={{ width: "290px" }}>
        {animes.map((i) => {
          return (
            <Carousel.Item key={i.id["1"]}>
              <div style={{ display: "flex" }}>
                <span className="m-2" style={{ width: "100%" }}>
                  <Link to={`/card/${cardObject["1"].multiverse_id}`}>
                    <AnimeCard
                      title={i.attributes.canonicalTitle}
                      images={i.attributes.posterImages?.tiny}
                    />
                  </Link>
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  <Link to={`/card/${cardObject["2"].multiverse_id}`}>
                    <AnimeCard
                      title={i.attributes.canonicalTitle}
                      images={i.attributes.posterImage?.tiny}
                    />
                  </Link>
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  <Link to={`/card/${cardObject["3"].multiverse_id}`}>
                    <AnimeCard
                      title={i.attributes.canonicalTitle}
                      images={i.attributes.posterImage?.tiny}
                    />
                  </Link>
                </span>
                <span className="m-2" style={{ width: "100%" }}>
                  <Link to={`/card/${cardObject["4"].multiverse_id}`}>
                    <AnimeCard
                      title={i.attributes.canonicalTitle}
                      images={i.attributes.posterImage?.tiny}
                    />
                  </Link>
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

// useEffect(() => {
//   fetchAnimes();
// }, []); // componentDidMount

// return (
//   <div className="container">
//     <div
//       id="carouselExampleIndicators"
//       className="carousel slide"
//       data-bs-ride="carousel"
//     >
//       {animes.map((i) => {
//         console.log("hello", i.id);

//           return (
//             <>
//               <div className="carousel-inner">
//                 <div className="carousel-item active">
//                   <AnimeCard
//                     key={i.id}
//                     title={i.attributes.canonicalTitle}
//                     // description={i.attributes.description}
//                     image={i.attributes.posterImage?.small}
//                   />
//                 </div>
//               </div>
//               <button
//                 className="carousel-control-prev"
//                 type="button"
//                 data-bs-target="#carouselExampleControls"
//                 data-bs-slide="prev"
//               >
//                 <span
//                   className="carousel-control-prev-icon"
//                   aria-hidden="true"
//                 />
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button
//                 className="carousel-control-next"
//                 type="button"
//                 data-bs-target="#carouselExampleControls"
//                 data-bs-slide="next"
//               >
//                 <span
//                   className="carousel-control-next-icon"
//                   aria-hidden="true"
//                 />
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
