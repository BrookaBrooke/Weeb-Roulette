import { BrowserRouter, Routes, Route } from "react-router-dom";
import mainPage from "./animeComs/mainPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
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
// test
export default App;
