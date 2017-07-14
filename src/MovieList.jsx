import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const MovieList = ({ movies }) => (
  <GridList cols="4" cellHeight="auto">
    {movies.map(movie => (
      <GridTile key={movie.imdbID} title={movie.Title} subtitle={movie.Year}>
        <img src={movie.Poster} alt={movie.Title} />
      </GridTile>
    ))}
  </GridList>
);

export default MovieList;