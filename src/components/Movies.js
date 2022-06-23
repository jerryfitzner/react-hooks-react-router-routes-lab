import React from "react";
import { movies } from "../data";
import { v4 as uuidv4 } from 'uuid';
import { uuid } from "uuidv4";

function Movies() {
  const eachMovie = movies.map(movie => (
    <div key={movie.time}>
      <h3>Name: {movie.title}</h3>
      <p>Time: {movie.time} minutes</p>
      <p>Genres:</p>
      <ul>
        {movie.genres.map(genre => (<li key={uuid()}>{genre}</li>))}
      </ul>
    </div>
  ));
  
  return (
  <div>
    <h1>Movies Page</h1>
    {eachMovie}
  </div>
  );
}

export default Movies;
