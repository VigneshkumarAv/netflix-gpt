import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LANDING_BG_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="-z-10 fixed">
        <img src={LANDING_BG_IMAGE} alt="bg_image" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
