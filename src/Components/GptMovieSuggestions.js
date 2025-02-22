import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt);
  const { gptMovies } = gpt;
  if (!gptMovies) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <MovieList title={"Search Results"} movies={gptMovies} />
    </div>
  );
};

export default GptMovieSuggestions;
