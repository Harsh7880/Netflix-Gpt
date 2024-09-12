import React, { useEffect, useRef } from "react";
import { BACKGROUND_IMAGE, API_KEY, API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import languageConstant from "../utils/languageConstant";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { gptMovieresult } from "../utils/gptSlice";

const GPTSeachBar = () => {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const searchQuestion = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    handleSuggestMovies();
  }, []);

  const fetchSuggestedMovieTMDP = async (movie) => {
    // console.log(movie);
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";
    const data = await fetch(url, API_OPTIONS);
    const jsonData = await data.json();
    return jsonData.results;
  };

  const handleSuggestMovies = async () => {
    try {
      const geminiQuery =
        "Act as a movie recomendtaion system, suggest some movies for the query : " +
        searchQuestion.current.value +
        ". only gove me names of 5 movies, comma sepreted like exmaple, hera-pheri, gadar, gold,";
      const result = await model.generateContent(geminiQuery);
      const suggestedMovies = result.response.text().split(",");
      const data = suggestedMovies.map((movie) =>
        fetchSuggestedMovieTMDP(movie)
      );
      const tmdpResult = await Promise.all(data);
      dispatch(
        gptMovieresult({
          movieNames: suggestedMovies,
          movieResults: tmdpResult,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const language = useSelector((store) => store.config.lang);

  return (
    <div className="flex justify-center  p-3">
      <div className="absolute mt-0 -z-10">
        <img src={BACKGROUND_IMAGE} alt="backgound" />
      </div>
      <div className="bg-black w-1/2 p-5 grid grid-cols-12 mt-[10%]">
        <input
          ref={searchQuestion}
          type="text"
          placeholder={languageConstant[language].placeholder}
          className="col-span-9 p-2 mr-2 outline-0"
        />
        <button
          onClick={handleSuggestMovies}
          className="bg-red-600 px-6 py-2 rounded col-span-3 text-white"
        >
          {languageConstant[language].search}
        </button>
      </div>
    </div>
  );
};

export default GPTSeachBar;
