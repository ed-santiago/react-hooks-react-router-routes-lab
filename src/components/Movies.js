import React from "react";
import { movies } from "../data";

function Movies() {
  const movieElements = movies.map((movie, index) => {
    const {title, time, genres} = movie;

    const genreElement = genres.map((genre, index) => {
      return <li key={index + 1}>{genre}</li>
    })

    return (
      <div key={index + 1}>
        <h3>Name: {title}</h3>
        <h4>Time: {time}</h4>
        <p>Genres: </p>
        <ul>
          {genreElement}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {movieElements}
    </div>
  );
}

export default Movies;
