import React from "react";
import Header from "./Header";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpComingMovies from "../hooks/useUpComingMovies";

import MainContainer from "./MainContainer";
import SecondaryConatiner from "./SecondaryConatiner";
import GPTMovieSuggetion from "./GPTMovieSuggetion";
import { useSelector } from "react-redux";

const Browse = () => {

  const showGPTSearchView = useSelector((store) => store.gpt.showGPTSearchView);
  
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();

  return (
    <>
      <Header />
      {showGPTSearchView ? (
        <GPTMovieSuggetion />
      ) : (
        <>
          <MainContainer />
          <SecondaryConatiner />
        </>
      )}
    </>
  );
};

export default Browse;
