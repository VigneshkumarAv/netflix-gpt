import axios from "axios";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = () => {
    axios
      .request({
        url: "https://api.themoviedb.org/3/movie/top_rated?page=1",
        headers: API_OPTIONS,
      })
      .then((res) => {
        const response = res.data.results;
        dispatch(addTopRatedMovies(response));
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
