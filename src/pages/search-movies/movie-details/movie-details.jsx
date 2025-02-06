import React, { useState, useEffect } from "react";
import { omdbApi } from "../../../api/movie.api";
import { useLocalStorageState } from "../../../hooks/use-local-storage-state";

export const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState({});
  const [isMovieFavorite, setIsMovieFavorite] = useState(false);
  const [moviesState, setMovies] = useLocalStorageState([], "movies");

  useEffect(() => {
    setIsMovieFavorite(!!moviesState.filter((m) => m.imdbID === id).length);
  }, [id]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await omdbApi.fetchByID(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      getMovie();
    } else {
      setMovie({});
    }

    return () => {
      console.log("cleanup");
    };
  }, [id]);

  const handelUpdateFavoriteStatus = () => {
    const movies = [...moviesState];
    const target = movies.find((m) => m.imdbID === id);

    if (target) {
      const index = movies.findIndex((m) => m.imdbID === id);
      movies.splice(index, 1);
      setMovies(movies);
      setIsMovieFavorite(false);
    } else {
      movies.push(movie);
      setMovies(movies);
      setIsMovieFavorite(true);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between">
        <div className="me-5">
          <img
            src={movie.Poster}
            alt={movie.Title}
            width={300}
            className="h-auto rounded d-block"
          />
        </div>
        <div>
          <p className="text-gray-600 d-flex align-items-center justify-content-between">
            <span>
              <strong>Directed by:</strong> {movie.Director}
            </span>
            <button
              className="btn btn-link"
              onClick={handelUpdateFavoriteStatus}
            >
              {isMovieFavorite ? (
                <i
                  className="bi-star-fill"
                  style={{ fontSize: "2rem", color: "rgb(245, 197, 24)" }}
                ></i>
              ) : (
                <i
                  className="bi-star"
                  style={{ fontSize: "2rem", color: "rgb(245, 197, 24)" }}
                ></i>
              )}
            </button>
          </p>
          <p className="text-gray-600">
            <strong>Writer:</strong> {movie.Writer}
          </p>
          <p className="text-gray-600">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="text-gray-600">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="text-gray-600">
            <strong>Language:</strong> {movie.Language}
          </p>
        </div>
      </div>
    </div>
  );
};
