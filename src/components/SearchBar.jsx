import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    if (city.trim()) onSearch(city.trim());
  };

  const handleKey = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name (e.g. Mumbai, London)..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKey}
        disabled={loading}
      />
      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;