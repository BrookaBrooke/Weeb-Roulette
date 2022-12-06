import React from "react";
import "../Leos.css";

const FrontPage = () => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="title display-5 fw-bold text-center">Weeb Roulette</h1>
      <h2 className="title display-5 fw-bold">The Best in Weeb Culture</h2>
      <div className="container text-center">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.nicepng.com/png/detail/683-6833498_weeb-png.png"
                className="d-block w-25"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="slide-label">Mercedes-Benz AMG SL-63</h5> */}
                {/* <p className="description-text">
                $174,999.00 · 2-Door · AMG 4.0L V8 BiTurbo{" "}
              </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://i.guim.co.uk/img/media/66e444bff77d9c566e53c8da88591e4297df0896/120_0_1800_1080/master/1800.png?width=465&quality=85&dpr=1&s=none"
                className="d-block w-25"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="slide-label">Audi R8</h5>
              <p className="description-text">
                $164,999.00 · 2-Door · 5.2L V10
              </p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://www.digitaltrends.com/wp-content/uploads/2022/08/Chainsaw-Man-trailer.jpg?fit=720%2C405&p=1"
                className="d-block w-25"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5 className="slide-label">BMW M3 Competition xDrive</h5>
              <p className="description-text">
                $89,999.00 · 4-Door · inline-6 TwinTurbo
              </p> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;

// import React from "react";

// export default function frontPage() {
//   return (
//     <div>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <link
//         rel="stylesheet"
//         href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
//       />
//       <div className="container">
//         <h1>Grid</h1>
//         <p>
//           This example demonstrates a 50%/50% split on small, medium and large
//           devices. On extra small devices, it will stack (100% width).
//         </p>
//         <p>Resize the browser window to see the effect.</p>
//         <div className="row">
//           <div className="col-sm-6" style={{ backgroundColor: "yellow" }}>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             <br />
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
//             nisi ut aliquip ex ea commodo consequat.
//           </div>
//           <div className="col-sm-6" style={{ backgroundColor: "pink" }}>
//             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//             quae ab illo inventore veritatis et quasi architecto.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
