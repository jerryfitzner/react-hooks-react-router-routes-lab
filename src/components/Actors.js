import React from "react";
import { uuid } from "uuidv4";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map(actor => (
    <div key={uuid()}>
      <h3>Name: {actor.name}</h3>
      <p>Movies: </p>
      <ul>
        {actor.movies.map(movie => (<li key={uuid()}>{movie}</li>))}
      </ul>
    </div>
  )); 

  return (
    <div>
      <h1>Actors Page </h1>
      {actorList}
    </div>
  );
}

export default Actors;
