import { useRef } from "react";
import lang from "../../utilis/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_GPT_KEY } from "../../utilis/constants";
import { addGptMovieResult } from "../../utilis/store/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchTmbdMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const genAI = new GoogleGenerativeAI(OPENAI_GPT_KEY);

  const handleGptSearchClick = async () => {
    const userInput = searchText.current.value;

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      userInput +
      ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(gptQuery);
      const response = await result.response;
      const text = response.text();
      const movieResults = text.split(",");

      const promiseArray = movieResults.map((movie) => searchTmbdMovies(movie));

      const tmbdResuts = await Promise.all(promiseArray);

      dispatch(
        addGptMovieResult({
          movieNames: movieResults,
          movieTMBDResults: tmbdResuts,
        })
      );
    } catch (err) {
      console.error("Error calling Gemini API:", err);
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder || "Ask GPT..."}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
