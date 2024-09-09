import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    console.log(movies);
  return (
    <div>
        <h1> {title} </h1>
        <div>
            {movies.map(movie => <MovieCard key={movie.id} posterPath = {movie.poster_Path} />) }
            
        </div>
    </div>
  )
}

export default MovieList