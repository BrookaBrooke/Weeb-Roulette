import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AnimeList from "./AnimeComs/animelistPage";
import MainPage from "./MainPage";
import SignupForm from "./accounts/signup";
import LoginForm from "./accounts/login";
import AnimeList from "./animeComs/animelistPage";

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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
