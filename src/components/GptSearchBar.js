import React from "react";
import lang from "../utilis/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <form className="bg-black grid grid-cols-12">
      <input
        className="m-2 p-3 col-span-9"
        type="form"
        placeholder={lang[langKey]?.gptSearchPlaceholder}
      />
      <button className="p-3 m-3 col-span-3 bg-red-700 rounded-lg">
        {lang[langKey]?.search}
      </button>
    </form>
  );
};

export default GptSearchBar;
