
import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies} from "../utilis/moviesSlice";
import { API_OPTIONS } from "../utilis/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
            const data = await response.json();
            dispatch(addUpcomingMovies(data.results));
        } catch (error) {
            console.error("Error fetching now playing movies:", error);
        }
    };
    useEffect(() => {
        getUpcomingMovies();
    }, []); 
};

export default useUpcomingMovies;
