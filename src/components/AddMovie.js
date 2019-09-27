import React, {useState,useContext} from 'react';
import {MovieContext} from '../MovieContext';
const AddMovie = () => {

const [name, setName] = useState('');
const [description, setDescription] = useState('');
// appel du contextMovies
const [movies, setMovies] = useContext(MovieContext)

const updateName = (e) => {
  setName(e.target.value);
}

  const updateDescription = (e) => {
    setDescription(e.target.value);
  }

  const addMovie = e => {
    // stop refresh
    e.preventDefault();
    // context du movie context
    //[...preMovies] copie du tableau d'objet dans le movieContext et ensuite creation d'un nouveau objet pour inserer dans l'input
    setMovies(preMovies => [...preMovies, {name: name, description: description}]);

  }

  return (
    <div>
      {/* dans form fonction addMovie pour que ca execute la fonction */}
      <form onSubmit={addMovie}>
        <input type='text' name='name' value={name} onChange={updateName} />
        <input type='text' name='description' value={description} onChange={updateDescription}/>
        <button>click</button>
      </form>
    </div>
  )
}

export default AddMovie;
