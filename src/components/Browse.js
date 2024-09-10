import React from 'react'
import Header from './Header'

import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'

import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';
const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  

  return (
    <>
    <Header />
    <MainContainer />
    <SecondaryConatiner />
    </>
  )
}

export default Browse