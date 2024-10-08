export function Movie({ movie, setSelected }) {
  return (
    <div className="flex items-center gap-4 hover:cursor-pointer hover:bg-[#6b21a8]  rounded-md" onClick={() => setSelected((selected)=>selected === movie.imdbID? '':movie.imdbID)}>
      <img src={movie.Poster} alt="" className="w-24" />
      <div>
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
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
