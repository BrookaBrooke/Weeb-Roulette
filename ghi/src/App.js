import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeList from "./animeComs/animelistPage";
import MyAnimeList from "./animeComs/mylistPage";
import MainPage from "./MainPage";
import SignupForm from "./accounts/signup";
import LoginForm from "./accounts/login";
import Nav from "./Nav";



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/animelist" element={<AnimeList />} />
          <Route path="/mylists" element={<MyAnimeList />} />
          {/* <Route path="/animedetail/:id" element={<AnimeDetail/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
