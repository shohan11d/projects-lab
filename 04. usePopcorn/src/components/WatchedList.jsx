import { Movie } from "./Movie";
import WatchedMovie from "./WatchedMovie";

function WatchedList({ query }) {
  return (
    <div>
      {query.map((movie) => (
        <WatchedMovie movie={movie} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}

export default WatchedList;
