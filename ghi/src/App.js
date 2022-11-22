import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./animeComs/mainPage";
import AnimeList from "./animeComs/animelistPage";
import TopNav from "./animeComs/nav";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
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
  );
}

export default App;
