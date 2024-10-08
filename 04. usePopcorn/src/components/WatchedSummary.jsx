import { Movie } from "./Movie";
export function WatchedSummary() {
  return (
    <div className="self-stretch space-y-2 my-4 rounded-md bg-[#6b21a8] p-4">
      <h1>Movies You watched</h1>
      <div className="grid grid-cols-4">
        <span>1 Movies</span>
        <span>⭐ Rating</span>
        <span>🌟Rating</span>
        <span>⌛ Time</span>
      </div>
    </div>
  );
}
