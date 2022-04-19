import { useEffect } from "react";
import MovieListings from "../MovieListing/MovieListings";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <>
      <div className="banner"></div>
      <MovieListings />
    </>
  );
};

export default Home;
