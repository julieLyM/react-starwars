import React, {useContext} from 'react';
import {MovieContext} from '../MovieContext';

export default function Movie({ name, description }) {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  )
}
