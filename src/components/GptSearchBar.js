import React from "react";

const GptSearchBar = () => {
  return (
    <form className="bg-black grid grid-cols-12">
      <input
        className="m-2 p-3 col-span-9"
        type="form"
        placeholder="What would you like to watch"
      />
      <button className="p-3 m-3 col-span-3 bg-red-700 rounded-lg">
        Search
      </button>
    </form>
  );
};

export default GptSearchBar;
