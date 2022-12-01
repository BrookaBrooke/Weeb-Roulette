import React from "react";
import SideBar from "../navData/sidebar/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../navData/navBar/nav";
//import Navbar from "../navBar/nav";

function MainPage() {
  return (
    <div>
      <div></div>
      <NavBar></NavBar>
      <div>
        <SideBar>
          <Route path="./animelistPage" component="AnimeList" />
        </SideBar>
      </div>
    </div>
  );
}
export default MainPage;
