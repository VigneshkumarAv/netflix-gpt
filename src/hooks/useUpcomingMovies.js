import axios from "axios";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = () => {
    axios
      .request({
        url: "https://api.themoviedb.org/3/movie/upcoming?page=1",
        headers: API_OPTIONS,
      })
      .then((res) => {
        const response = res.data.results;
        dispatch(addUpcomingMovies(response));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
