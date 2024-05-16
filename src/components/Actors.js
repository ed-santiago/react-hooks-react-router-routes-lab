import React from "react";
import { actors } from "../data";

function Actors() {
  const actorElement = actors.map((actor, index) => {
    return (
      <div key={index + 1}>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          })}
        </ul>
      </div>
    );
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorElement}
    </div>
  );
}

export default Actors;
