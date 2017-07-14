import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import MovieList from './MovieList';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <MovieList/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
