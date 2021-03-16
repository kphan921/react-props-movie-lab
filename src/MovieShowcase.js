import React from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

const MovieShowcase = () => {


  return ( 
    <div id = "movie-showcase" > {
      movieData.map((movie, idx) => <MovieCard 
          key = {idx}
          title = {movie.title}
          IMDBRating = {movie.IMDBRating}
          genres = {movie.genres}
          poster = {movie.poster}
        />
      )
    } 
    </div>
  )
}

export default MovieShowcase;




  //   title: 'ChromeBoi',
  //   IMDBRating: 5,
  //   genres: ['thriller', 'romance'],
  //   poster: 'chromeboi'