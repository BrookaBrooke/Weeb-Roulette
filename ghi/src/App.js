import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimeList from "./animeComs/AnimeListPage";
import MainPage from "./MainPage";
import SignupForm from "./accounts/signup";
import LoginForm from "./accounts/login";

import Nav from "./Nav";
import AnimeDetail from "./animeComs/AnimeDetail";

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
          <Route path="/detail" element={<AnimeDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
