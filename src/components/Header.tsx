import React from "react";

const Header = () => {
  return (
    <div id="header-container">
      <h3>
        FinanceMe{" "}
        <span role="img" aria-label="Flying Dollar Bills">
          💸
        </span>
      </h3>
      <h3>
        Settings{" "}
        <span role="img" aria-label="Gear">
          ⚙️
        </span>
      </h3>
    </div>
  );
};

export default Header;
