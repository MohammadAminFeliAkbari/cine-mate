import { Routes, Route, ScrollRestoration } from "react-router-dom";
import MovieDetails from "../pages/MovieDetails";
import MovieList from "../pages/MovieList";
import Search from "../pages/Search";
import NotFound from "../pages/NotFound";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path=""
          element={<MovieList apiPath={"now_playing"} title={"now Playing"} />}
        />

        <Route path="movie/:id" element={<MovieDetails />} />

        <Route
          path="movie/popular"
          title={"Popular"}
          element={<MovieList apiPath={"popular"} />}
        />

        <Route
          path="movie/top"
          element={<MovieList apiPath={"top_rated"} title={"top rated"} />}
        />

        <Route
          path="movie/upcoming"
          element={<MovieList apiPath={"upcoming"} title={"up coming"} />}
        />

        <Route path="Search" element={<Search />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
};

export default AllRoutes;
