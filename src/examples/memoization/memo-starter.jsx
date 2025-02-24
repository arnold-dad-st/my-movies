import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./styles.css";

const generateItems = () => {
  return Array.from({ length: 10 }, () => ({
    name: faker.commerce.productName(),
    topic: faker.hacker.noun(),
    rating: faker.number.float({ multipleOf: 0.25, min: 0, max: 10 }),
  }));
};

const items = generateItems();

const Header = () => <header className="header">Item Search App</header>;
const Footer = () => <footer className="footer">© 2025 My App</footer>;

const ItemList = ({ items }) => {
  console.log("Rendering ItemList");
  return (
    <ul className="item-list">
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.name}</strong> - Topic: {item.topic} - Rating:{" "}
          {item.rating.toFixed(1)}
        </li>
      ))}
    </ul>
  );
};

const Statistics = ({ show }) => {
  console.log("Rendering Statistics");

  const averageRating = (
    items.reduce((sum, item) => sum + item.rating, 0) / items.length
  ).toFixed(1);

  return show ? <p className="stats">Average Rating: {averageRating}</p> : null;
};

const StatisticsApp = () => {
  const [query, setQuery] = useState("");
  const [showStats, setShowStats] = useState(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ItemList items={filteredItems} />
      <button
        className="toggle-btn"
        onClick={() => setShowStats((prev) => !prev)}
      >
        {showStats ? "Hide Stats" : "Show Stats"}
      </button>
      <Statistics show={showStats} />
      <Footer />
    </div>
  );
};

export default StatisticsApp;
