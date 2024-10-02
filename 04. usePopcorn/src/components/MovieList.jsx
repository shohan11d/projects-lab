import { Movie } from "./Movie";
export function MovieList({ query }) {
  return (
    <div className="grid gap-4 p-4">
      {query.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
