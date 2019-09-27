import React from 'react';
// import Test from './test'
import Nav from './components/Nav';
import Contact from './components/Contact';
import Character from './components/Character';
import CharacterDetail from './components/CharacterDetail';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MoviesList from './components/MoviesList';
import { MovieProvider } from './MovieContext';
import AddMovie from './components/AddMovie';

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
