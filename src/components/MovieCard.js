import React from 'react'
import { POSTER_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
    console.log(posterPath);
  return (
    <div className='w-48 mr-3'>
        <img alt='movie-poster'
        className=''
        src={POSTER_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard