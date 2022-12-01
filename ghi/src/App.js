import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./animeComs/mainPage";
import AnimeList from "./animeComs/animelistPage";
import MiniDrawer from "./navData/sidebar/nav";
//import TopNav from "./animeComs/navData/nav";

function App() {
  return (
    <MiniDrawer>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="home">
              <Route index element={<MainPage />} />
            </Route>
            <Route path="animelist">
              <Route element={<AnimeList />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </MiniDrawer>
  );
}

export default App;
