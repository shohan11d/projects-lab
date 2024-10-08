export function Movie({ movie, setSelected }) {
  return (
    <div className="flex items-center gap-4 hover:cursor-pointer hover:bg-[#a855f7] p-4 rounded-md" onClick={() => setSelected((selected)=>selected === movie.imdbID? '':movie.imdbID)}>
      <img src={movie.Poster} alt="" className="w-24" />
      <div>
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
        <p>{movie.imdbID}</p>
      </div>
    </div>
  );
}

// export function Movie({ movie }) {
//   <div>
//     <img src={movie.Poster} alt={movie.Title} />
//     <h3>{movie.Title}</h3>
//     <p>{movie.Year}</p>
//   </div>;
// }
