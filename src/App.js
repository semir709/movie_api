import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Category, Home, List, Movie, Navigation, Search } from "./components";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/movie/:id"} element={<Movie />} />
        <Route path={"/search/:input"} element={<Search />} />
        <Route path={"/category/:catg"} element={<Category />} />
        <Route path={"/list/:list"} element={<List />} />
      </Routes>
    </>
  );
}

export default App;
