import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const FrontPage = () => {
  const [animes, setAnimes] = useState([]);

  const fetchAnimes = async () => {
    const url = "http://localhost:8000/anime_list/1";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data);
    setAnimes(data.data);
  };

  useEffect(() => {
    fetchAnimes();
  }, []); // componentDidMount

  return (
    <Container className="card-carousel">
      <Carousel style={{ width: "290px" }}>
        {animes.map((i) => {
          return (
            <Carousel.Item key={i.id}>
              <div>
                <AnimeCard
                  title={i.attributes.canonicalTitle}
                  image={i.attributes.posterImage?.tiny}
                />
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
};

export default FrontPage;

//   return (
//     <div className="container">
//       <div
//         id="carouselExampleIndicators"
//         className="carousel slide"
//         data-bs-ride="carousel"
//       >
//         {animes.map((i) => {
//           console.log("hello", i.id);

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

//     <div
//       id="carouselExampleIndicators"
//       className="carousel slide"
//       data-bs-ride="true"
//     >
//       <div className="carousel-indicators">
//         <button
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide-to={0}
//           className="active"
//           aria-current="true"
//           aria-label="Slide 1"
//         />
//         <button
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide-to={1}
//           aria-label="Slide 2"
//         />
//         <button
//           type="button"
//           data-bs-target="#carouselExampleIndicators"
//           data-bs-slide-to={2}
//           aria-label="Slide 3"
//         />
//       </div>
//       <div className="carousel-inner">
//         {animes.map((i) => {
//           return (
//             <AnimeCard
//               key={i.id}
//               title={i.attributes.canonicalTitle}
//               // description={i.attributes.description}
//               image={i.attributes.posterImage?.small}
//             />
//           );
//         })}
//         ;
//       </div>
//       <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="prev"
//       >
//         <span className="carousel-control-prev-icon" aria-hidden="true" />
//         <span className="visually-hidden">Previous</span>
//       </button>
//       <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleIndicators"
//         data-bs-slide="next"
//       >
//         <span className="carousel-control-next-icon" aria-hidden="true" />
//         <span className="visually-hidden">Next</span>
//       </button>
//     </div>
//   );
// };
