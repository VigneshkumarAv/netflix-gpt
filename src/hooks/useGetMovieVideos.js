import axios from "axios";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useGetMovieVideos = ({ movieId, setTrailerId }) => {
  const getMovieVideos = () => {
    axios
      .request({
        url: "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
        headers: API_OPTIONS,
      })
      .then((res) => {
        const response = res.data;
        const officialTrailer = response?.results.filter(
          (item) => item.type === "Trailer" && item.name === "Official Trailer"
        );
        const trailer = officialTrailer.length
          ? officialTrailer[0]
          : response?.results[0];

        setTrailerId(trailer.key);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useGetMovieVideos;
