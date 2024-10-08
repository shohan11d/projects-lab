import { useDebugValue, useEffect, useState } from "react";
import Header from "./components/Header";
import { Logo } from "./components/Logo";
import { Results } from "./components/Results";
import { Search } from "./components/Search";
import Box from "./components/Box";
import Main from "./components/Main";
import { MovieList } from "./components/MovieList";
import { WatchedSummary } from "./components/WatchedSummary";
import WatchedList from "./components/WatchedList";
const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inceptiown",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

function App() {
  const [query, setQuery] = useState(tempMovieData);
  const [search, setSearch] = useState("inception");
  const [movieData, setMovieData] = useState([]);
  const [selected, setSelected] = useState('')

  const KEY = "2f74e8e2";

  useEffect(
    function () {
      async function fetchData() {
        const url = `http://www.omdbapi.com/?apikey=${KEY}&s=${search}`;

        try {
          const response = await fetch(url);
          const result = await response.json();
          setMovieData(result.Search);
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    },
    [search],
  );
  return (
    <>
      <Header>
        <Logo />
        <Search search={search} setSearch={setSearch} />
        <Results movieData={movieData}/>
      </Header>
      <Main>
        <Box>
          <MovieList  movieData={movieData} setSelected={setSelected}/>
        </Box>
        <Box>
          <div className="flex flex-col gap-4">
           {!selected && <WatchedSummary query={query} movieData={movieData}/> }  
            {selected && <WatchedList query={query} movieData={movieData} selected={selected } KEY={KEY} />}
          </div>
        </Box>
      </Main>
    </>
  );
}
console.log(3)
export default App;
