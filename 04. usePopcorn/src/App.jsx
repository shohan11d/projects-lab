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




function App() {
  const [query, setQuery] = useState();
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
