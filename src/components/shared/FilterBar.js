import React, { useState } from 'react';
import './FilterBar.css';

function FilterBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="filter-bar">
      <button className="ask-button">Ask New Question</button>

      <div className="filters">
        <button>Newest</button>
        <button>Unanswered</button>

        <div className="dropdown-container">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="more-button"
          >
            More ▼
          </button>

          {showDropdown && (
            <div className="dropdown">
              <button>Most Viewed</button>
              <button>Highest Voted</button>
              <button>Recent Activity</button>
            </div>
          )}
        </div>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
    </div>
  );
}

export default FilterBar;
