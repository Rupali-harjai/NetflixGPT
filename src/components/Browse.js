import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./Container/MainContainer.js";
import SecondaryContainer from "./Container/SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopRatedMovies from "../hooks/useTopRatedMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import { useSelector } from "react-redux";
import GptSearch from "./GPT/GptSearch.js";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showgptView = useSelector((store) => store.gptSearch.showgptSearch);
  return (
    <>
      <div className="flex flex-col relative">
        <Header />
        {showgptView ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
