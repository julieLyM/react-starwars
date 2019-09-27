import React, { useContext } from 'react';
import Movie from './Movie';
import {MovieContext} from '../MovieContext';

export default function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      <h2>List of movies : {movies.length}</h2>

      {movies.map(movie => (
        <ul key={movie.id}>
          <Movie
            name={movie.name}
            description={movie.description}
          />
        </ul>
      ))}
    </div>
  )
}
