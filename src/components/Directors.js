import React from "react";
import { directors } from "../data";

function Directors() {
  const directorElements = directors.map((director, index) => {
    return (
      <div key={index + 1}>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map((movie, index) => {
            return <li key={index}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <>
      <h1>Directors Page</h1>
      {directorElements}
    </>
  );
}

export default Directors;
