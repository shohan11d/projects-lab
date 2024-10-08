import { useEffect, useState } from "react";

function WatchedMovie({ movie, selected, KEY }) {
  
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <img src={movie.Poster} alt="" className="w-24" />
        <div>
          <p>{movie.Title}</p>
          <div className="flex gap-2">
            <p>{movie.Year}</p>
            <p>{movie.imdbID}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchedMovie;
