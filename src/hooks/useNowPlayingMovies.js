import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import axios from "axios";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = () => {
    axios
      .request({
        url: "https://api.themoviedb.org/3/movie/now_playing?page=1",
        headers: API_OPTIONS,
      })
      .then((res) => {
        const response = res.data.results;
        dispatch(addNowPlayingMovies(response));
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
