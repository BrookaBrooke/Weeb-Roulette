import React from "react";
import SideBar from "./navData/sidebar/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./navData/navBar/nav";

function MainPage() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <h1>Weeb Roulette</h1>
      <div>
        <SideBar>
          <Route path="./animelistPage" component="AnimeList" />
        </SideBar>
      </div>
    </div>
  );
}
export default MainPage;
