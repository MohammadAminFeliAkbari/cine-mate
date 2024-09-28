import { Routes, Route } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import MovieList from "../pages/MovieList";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<MovieList apiPath={"now_playing"} />} />
      <Route path="movie/:id" element={<MovieDetails />} />
      <Route path="movie/popular" element={<MovieList apiPath={"popular"} />} />
      <Route path="movie/top" element={<MovieList apiPath={"top_rated"} />} />
      <Route path="movie/upcoming" element={<MovieList apiPath={"upcoming"} />} />
      <Route path="Search" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
