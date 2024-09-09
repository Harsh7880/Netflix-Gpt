import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log(posterPath);
  return (
    <div>
        <img alt='movie-poster'
        src={POSTER_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard