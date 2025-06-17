import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addTrailerVideo } from "../utilis/store/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

const trailerVideo = useSelector((store)=> store.trailerVideo);

  const getMoviesBackground = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const videoData = json.results.filter((video) => video.type === "Trailer");

    const trailer = videoData.length ? videoData[0] : json.results[0];
    // setTrailerId(trailer.key);

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMoviesBackground();
  }, []);
};

export default useMovieTrailer;
