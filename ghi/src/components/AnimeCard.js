import React from "react";

const AnimeCard = (props) => {
  return (
    <div className="carousel-item" style={{ width: "18rem" }}>
      <img src={props.image} className="d-block w-100" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {/* <p className="card-text">{props.description}</p> */}

        <a href="" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default AnimeCard;

// JUNK

/* <div
  id="carouselExampleControls"
  className="carousel slide"
  data-bs-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>; */

//  <div
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
