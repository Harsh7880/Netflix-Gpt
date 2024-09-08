
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTarilerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const VIDEO_API_URL = 'https://api.themoviedb.org/3/movie/'+ movieId  + '/videos?language=en-US';

    const getMoviesData = async () => {
      const data = await fetch(VIDEO_API_URL, API_OPTIONS);
      const json = await data.json();
      const trailers = json.results.filter((e) => e.type === "Trailer");
      const mainTariler = trailers.length ? trailers[0] : json.results[0];
      dispatch(addTarilerVideo(mainTariler));
    };
  
    useEffect(() => {
      getMoviesData();
    }, []);
};

export default useMovieTrailer;