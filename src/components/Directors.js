import React from "react";
import { uuid } from "uuidv4";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map(director => (
    <div key={uuid()}>
      <h3>Name: {director.name}</h3>
      <p>Movies: </p>
      <ul>
        {director.movies.map(movie => (<li key={uuid()}>{movie}</li>))}
      </ul>
    </div>
  ))

  return (
  <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>);
}

export default Directors;
