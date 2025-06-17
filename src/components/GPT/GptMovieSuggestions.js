import { useSelector } from "react-redux";
import MovieList from "../Movie/MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieTMBDResults } = useSelector(
    (store) => store.gptSearch
  );

   if (!movieNames) return null;
  return (

    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames?.map((movieNames, index) => (
          <MovieList
            title={movieNames}
            key={movieNames}
            movies={movieTMBDResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
