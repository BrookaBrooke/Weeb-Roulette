import { BrowserRouter, Routes, Route } from "react-router-dom";
// import mainPage from "./animeComs/mainPage";
// import AnimeList from "./animeComs/animelistPage";
// import AnimeDetail from "./animeComs/animeDetail";
// import AnimeDetail from "./animeComs/animeDetail";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
// import ListPage from "./animeComs/mylistPage";
import FrontPage from "./AnimeComs/FrontPage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* <Route path="/home" index element={<MainPage />} /> */}
          {/* <Route path="/detail" index element={<AnimeDetail />} /> */}
          {/* <Route path="/animelist" element={<AnimeList />} /> */}
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          {/* <Route path="/ListPage" element={<ListPage />} /> */}
          <Route path="/FrontPage" element={<FrontPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
