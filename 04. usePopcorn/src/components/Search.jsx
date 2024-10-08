export function Search({ search, setSearch }) {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Search movies..."
      className="input input-bordered w-full max-w-xs bg-purple-800 hover:border-purple-900"
    />
  );
}
