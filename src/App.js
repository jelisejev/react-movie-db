import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MovieList from './MovieList';
import TextField from 'material-ui/TextField';
import './App.css';

import allMovies from './movies.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: allMovies
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="React Movie Data Base" />
          <p style={{paddingLeft: 20}}>
            Search: <TextField name="search" onChange={this.onSearch} />
          </p>
          <MovieList movies={this.state.movies} />
        </div>
      </MuiThemeProvider>
    );
  }

  onSearch = (event, query) => {
    const movies = allMovies.filter(movie => movie.Title.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    this.setState({
      movies
    });
  }
}

export default App;
