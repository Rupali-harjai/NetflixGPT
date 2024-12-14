import React, { useEffect, useState } from 'react';

const NowPlayingMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // Using the proxy to fetch now playing movies
                const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://api.themoviedb.org/3/movie/now_playing?api_key=2982d29e976dcc5f14a50f9343a7ca45')}`);
                https://api.allorigins.win/get?url=https://api.themoviedb.org/3/movie/now_playing?page=1
                if (!response.ok) {
                    throw new Error(`Network response was not ok. Status: ${response.status}`);
                }

                const data = await response.json();
              
                const moviesData = JSON.parse(data.contents); // Parse the JSON 
                // contents
                
                setMovies(moviesData.results || []);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMovies();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Now Playing Movies</h1>
            {movies.length > 0 ? (
                <ul>
                    {movies.map((movie) => (
                        <><li key={movie.id}>{movie.title} </li><li><img src={movies.poster_path} /></li></>
                    ))}
                </ul>
            ) : (
                <p>No movies currently playing.</p>
            )}
        </div>
    );
};

export default NowPlayingMovies;
