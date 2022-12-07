import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import AnimeList from "./animeComs/animelistPage";
// import AnimeDetail from "./animeComs/animeDetail";
import AnimeDetail from "./animeComs/animeDetail";
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/home" index element={<MainPage />} />
          <Route path="/detail" index element={<AnimeDetail />} />
          <Route path="/animelist" element={<AnimeList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
