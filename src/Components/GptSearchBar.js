import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config?.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-gray-100 text-center w-1/2 grid grid-cols-12 ">
        <input
          type="text"
          placeholder={lang[selectedLang]?.gptSearchPlaceholder}
          className="p-3 m-3 col-span-9 border border-black "
        />
        <button className="px-3 py-2 m-3 bg-red-700 text-white rounded-lg col-span-3">
          {lang[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
