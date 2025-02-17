import React, { useState, useContext } from "react";
import { Header } from "./components/header/header";
import { SearchMovies } from "./pages/search-movies/search-movies";
import { Movies } from "./pages/movies/movies";
import { MoviesProvider, tab, MoviesContext } from "./contexts/movies-context";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Tabs = () => {
  const { setActiveTab, activeTab } = useContext(MoviesContext);

  const getTabClasses = (tab) => {
    return `nav-link ${activeTab === tab ? "active" : ""}`;
  };

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item ">
        <button
          onClick={() => setActiveTab(tab.search)}
          className={getTabClasses(tab.search)}
        >
          Search Movies
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setActiveTab(tab.movies)}
          className={getTabClasses(tab.movies)}
        >
          My Movie List
        </button>
      </li>
      <li className="nav-item">
        <button
          onClick={() => setActiveTab(tab.quiz)}
          className={getTabClasses(tab.quiz)}
        >
          Quiz
        </button>
      </li>
    </ul>
  );
};

const Layout = () => {
  const { activeTab } = useContext(MoviesContext);

  return activeTab === tab.search ? <SearchMovies /> : <Movies />;
};

function App() {
  return (
    <MoviesProvider>
      <div>
        <Header />
        <Tabs />
        <Layout />
        <main className="container mt-4"></main>
      </div>
    </MoviesProvider>
  );
}

export default App;
