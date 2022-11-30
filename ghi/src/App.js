import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainPage from "./animeComs/mainPage";
import AnimeList from "./animeComs/animelistPage";
import CardUI from "./Cads/CardUI";
import SignIn from "./SignIn/SignIn";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route path="/home">
            <Route index element={<mainPage />} />
          </Route>
          <Route path="/animelist">
            <Route element={<animelistPage />} />
          </Route> */}
          {/* <Route path="/animedetail">
            <Route element={<Cards />} />
          </Route> */}
          <Route path="/SignIn">
            <Route element={<SignIn />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// import React, { Component } from "react";
// import Card from "./Cads/CardUI";
// import "./Cads/card-style.css";

// import img1 from "./assets/ash.jpeg";
// import img2 from "./assets/vampire_hunter_d.jpg";
// import img3 from "./assets/chainsaw.jpeg";

// class Cards extends Component {
//   render() {
//     return (
//       <div className="container-fluid d-flex justify-content-center">
//         <div className="row-cols-4">
//           <div className="col-md-4">
//             <Card imgsrc={img1} title="Pokemon" />
//           </div>
//           <div className="col-md-4">
//             <Card imgsrc={img2} title="Vampire Hunter D" />
//           </div>
//           <div className="col-md-4">
//             <Card imgsrc={img3} title="Chainsaw Man" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Cards;
