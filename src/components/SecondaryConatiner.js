import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'


const SecondaryConatiner = () => {

  const movies = useSelector(store => store.movies);

  return movies.nowPlayingMovies && (
    <div className='p-6 bg-black'>
      <MovieList title = "Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title = "Trending" movies={movies.nowPlayingMovies} />
      <MovieList title = "Free To Watch" movies={movies.nowPlayingMovies} />
      <MovieList title = "Upcoming" movies={movies.nowPlayingMovies} />
      <MovieList title = "Top Rated" movies={movies.nowPlayingMovies} />

    </div>
  )
}

export default SecondaryConatiner