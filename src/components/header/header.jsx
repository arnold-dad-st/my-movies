import React, { useRef, useContext, useEffect } from "react";
import { MoviesContext, tab } from "../../contexts/movies-context";
import "./header.css";

export const Header = () => {
  const { searchQuery, onSearch, activeTab } = useContext(MoviesContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header className="bg-primary text-white p-3 d-flex justify-content-between">
      <div className="logo">
        <span role="img">🎬</span>
        <h1>My Movies</h1>
      </div>
      {activeTab === tab.search && (
        <input
          ref={inputRef}
          value={searchQuery}
          type="text"
          className="form-control w-25"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
        />
      )}
    </header>
  );
};
