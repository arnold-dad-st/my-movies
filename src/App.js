import React, { useState } from "react";
import { Header } from "./components/header/header";
import { SearchMovies } from "./pages/search-movies/search-movies";
import { Movies } from "./pages/movies/movies";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const tab = {
  search: "search",
  movies: "movies",
};

function App() {
  const [searchQuery, setSearchQuery] = useState("Home");
  const [activeTab, setActiveTab] = useState(tab.search);

  return (
    <div>
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={() => setActiveTab(tab.search)}
            className="nav-link active"
          >
            Search Movies
          </button>
        </li>
        <li className="nav-item">
          <button onClick={() => setActiveTab(tab.movies)} className="nav-link">
            My Movie List
          </button>
        </li>
      </ul>

      {activeTab === tab.search ? (
        <SearchMovies searchQuery={searchQuery} />
      ) : (
        <Movies />
      )}

      <main className="container mt-4"></main>
    </div>
  );
}

export default App;
