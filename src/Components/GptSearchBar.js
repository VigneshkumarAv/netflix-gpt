import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import axios from "axios";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const gptSearchRef = useRef(null);
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config?.lang);

  const searchMovie = async () => {
    axios
      .request({
        url:
          "https://api.themoviedb.org/3/search/movie?query=" +
          gptSearchRef.current.value +
          "&include_adult=false&language=en-US&page=1",
        headers: API_OPTIONS,
      })
      .then((res) => {
        console.log(res.data.results);
        dispatch(addGptMovieResult(res.data.results));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleGptSearchClick = async () => {
    //Make api call to open ai and get movie results
    const query =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      gptSearchRef.current.value +
      ". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Leo, Master, Jailer, Dragon, Beast";
    try {
      /* const gptResults = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      console.log(gptResults.choices?.[0]?.message?.content); */
      //const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); //array of 5 movies
      //const promiseArray = gptMovies.map((movie) => searchMovie(movie)); //returns array of promises
      //const tmdbResults = await Promise.all(promiseArray); // with help of promise.all we can convert array of promises into array of objects
      //console.log(tmdbResults);
      /* dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      ); */
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-gray-100 text-center w-1/2 grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder={lang[selectedLang]?.gptSearchPlaceholder}
          className="p-3 m-3 col-span-9 border border-black "
          ref={gptSearchRef}
        />
        <button
          className="px-3 py-2 m-3 bg-red-700 text-white rounded-lg col-span-3"
          onClick={searchMovie}
        >
          {lang[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
