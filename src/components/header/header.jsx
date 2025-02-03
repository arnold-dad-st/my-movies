import React from "react";
import "./header.css";

export const Header = ({ onSearch, searchQuery }) => {
  return (
    <header className="bg-primary text-white p-3 d-flex justify-content-between">
      <div className="logo">
        <span role="img">🎬</span>
        <h1>My Movies</h1>
      </div>
      <input
        value={searchQuery}
        type="text"
        className="form-control w-25"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};
