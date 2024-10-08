import { Movie } from "./Movie";
export function MovieList({ query, movieData, setSelected }) {
  return (
    <div className="grid gap-4 p-4">
      {movieData?.map((movie) => (
        <Movie movie={movie} key={crypto.randomUUID()} setSelected={setSelected} />
      ))}
    </div>
  );
}
