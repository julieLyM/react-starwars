import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MovieProvider } from './MovieContext';

import AddMovie from './components/AddMovie';
import Character from './components/Character';
import CharacterDetail from './components/CharacterDetail';
import Contact from './components/Contact';
import MoviesList from './components/MoviesList';
import Nav from './components/Nav';

import './App.css';

const Home = () => {
  return (
    <MovieProvider>
      <MoviesList />
      <AddMovie />
    </MovieProvider>
  )
}

function App() {
  return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/character" exact component={Character} />
            <Route path="/character/:id" component={CharacterDetail} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
