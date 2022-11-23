import React from "react";
import SideBar from "./navData/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <h1>Weeb Roulette</h1>
      <div>
        <SideBar>
          <Route path="/" component="AnimeList" />
        </SideBar>
      </div>
    </div>
  );
}
export default MainPage;
