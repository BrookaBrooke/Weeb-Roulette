import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainPage from "./animeComs/mainPage";
import AnimeList from "./animeComs/animelistPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="home">
            <Route index element={<mainPage />} />
          </Route>
          <Route path="animelist">
            <Route element={<animelistPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
