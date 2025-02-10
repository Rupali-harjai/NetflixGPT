import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
     <h1 className="font-bold py-2 my-2 text-2xl text-white">{title}</h1>
    <div className="flex overflow-x-scroll ">
   
      <div className="flex gap-2">
        {movies?.map((movie) => (
          <MovieCard posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
