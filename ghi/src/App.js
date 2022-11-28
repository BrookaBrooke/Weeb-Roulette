import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './animeComs/mainPage';
import AnimeList from './animeComs/animelistPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="home">
            <Route index element = {<MainPage />} />
          </Route>
          <Route>
            <Route path="animelist" element = {<AnimeList />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
