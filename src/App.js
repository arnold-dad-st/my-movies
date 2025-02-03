import React, { useState, useEffect } from "react";
import { Header } from "./components/header/header";
import { omdbApi } from "./api/movie.api";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("Home");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await omdbApi.fetchMoviesBySearch(searchQuery || "");

      if (response.success) {
        setData(response.data.Search || []);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      <main className="container mt-4">
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
              <tr key={movie.imdbID}>
                <td>
                  <img width="50" src={movie.Poster} alt={movie.Title} />
                </td>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Type}</td>
                <td className="text-md-end">{movie.imdbID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
