import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MovieList from './MovieList';
import TextField from 'material-ui/TextField';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
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

  onSearch = async (event, query) => {
    const movies = await this.fetchMovies(query);

    this.setState({
      movies
    });
  }

  fetchMovies = async (query) => {
    const rs = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=f8922089`);
    const json = await rs.json();

    return json.Search || [];
  }
}

export default App;
