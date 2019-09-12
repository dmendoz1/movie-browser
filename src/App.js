import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Movie from './components/Movie';
import Popular from './components/Popular';
import TheatersToday from './components/TheatersToday';
import Discover from './components/Discover';
import Nav from './components/Nav';
import './App.css';

const MovieApp = _ => {
  const [movies, setMovies] = useState([]);
  async function fetchMovies(typeOfQuery,query) {
    const url = await fetch('https://api.themoviedb.org/3/' + typeOfQuery + '/movie?api_key=2b0d7ae1b2d446dcbb6954fabb182f1e&query=' + query);
    const data = await url.json();
    setMovies(data.results)
  }


  return (
    <Router>
      <div className="movie-container">
        <Nav />
        <Route
          path={process.env.PUBLIC_URL + '/'}
          exact
          render={(props) => <Discover fetchMovies={fetchMovies}/>}
        />
        <Route
          path={process.env.PUBLIC_URL + '/theaters-today'}
          exact
          render={(props) => <TheatersToday fetchMovies={fetchMovies}/>}
        />
        <Route
          path={process.env.PUBLIC_URL + '/popular'}
          exact
          render={(props)=> <Popular fetchMovies={fetchMovies}/>}
        />
        {movies && movies.map((movie, index) => {
          return <Movie key={index} movie={movie}/>
        })}
      </div>
    </Router>
  )
}

export default MovieApp;
