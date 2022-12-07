import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeList from "./animeComs/animelistPage";
import MainPage from "./MainPage";
import SignupForm from "./accounts/signup";
import LoginForm from "./accounts/login";
import Nav from "./Nav";
import AnimeDetail from "./animeComs/animeDetail";

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
          {/* <Route path="/animedetail/:id" element={<AnimeDetail/>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
