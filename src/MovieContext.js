import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'starwars1',
      description: "blabla",
      id: 1
    },
    {
      name: 'starwars2',
      description: "blabla",
      id: 2
    },
    {
      name: 'starwars3',
      description: "blabla",
      id: 3
    },
    {
      name: 'starwars4',
      description: "blabla",
      id: 4
    }, {
      name: 'starwars5',
      description: "blabla",
      id: 5
    }, {
      name: 'starwars6',
      description: "blabla",
      id: 6
    }
  ])
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}
