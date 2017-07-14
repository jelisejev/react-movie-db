import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import MovieList from './MovieList';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar title="React Movie Data Base" />
          <MovieList/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
