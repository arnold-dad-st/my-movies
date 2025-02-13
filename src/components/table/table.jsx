import imdbLogo from "../../assets/images/imdb.svg";

export const Table = ({ data, onRowClick }) => {
  const handleOpenIMDBbMovie = (event, imdbID) => {
    event.stopPropagation();
    window.open(`https://www.imdb.com/title/${imdbID}`, " ");
  };

  return (
    <table className="table table-striped mt-3 table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Year</th>
          <th>Type</th>
          <th className="text-md-end">IMDB ID</th>
        </tr>
      </thead>
      <tbody>
        {data.map((movie) => (
          <tr key={movie.imdbID} onClick={() => onRowClick(movie)}>
            <td>
              <img width="50" src={movie.Poster} alt={movie.Title} />
            </td>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.Type}</td>
            <td className="text-md-end">
              <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={(event) => handleOpenIMDBbMovie(event, movie.imdbID)}
                >
                  Watch on IMDB
                  <img src={imdbLogo} alt="" width={20} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
