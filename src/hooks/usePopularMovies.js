import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = () => {
    axios
      .request({
        url: "https://api.themoviedb.org/3/movie/popular?page=1",
        headers: API_OPTIONS,
      })
      .then((res) => {
        const response = res.data.results;
        dispatch(addPopularMovies(response));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
