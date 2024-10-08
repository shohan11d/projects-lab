import { useEffect, useState } from "react";
import { Movie } from "./Movie";
import WatchedMovie from "./WatchedMovie";

function WatchedList({ query, selected, KEY }) {
  const [details, setDetails] = useState({});
  console.log(details);
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Ratings: ratings,
    Runtime: runtime,
    Country: country,
    Language: lang,
    Plot: plot,
    Released: released,
  } = details;

  console.log(title, year, ratings, runtime, country, lang, plot, released);
  useEffect(
    function () {
      async function fetchByID() {
        const url = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selected}`,
        );
        const data = await url.json();
        setDetails(data);
      }
      fetchByID();
    },
    [selected],
  );
  return (
    <div>
      <div className="">
        <img src={poster} width="120px"  />
        <h1 className="text-xl">{title}</h1>
        <div className="grid grid-cols-2 ">

        <p>{country}</p>
        <p className="">{year}</p>
        <p>{lang}</p>
        <p>{released}</p>
        </div>
      </div>
      <p>{plot}</p>
    </div>
  );
}

export default WatchedList;
