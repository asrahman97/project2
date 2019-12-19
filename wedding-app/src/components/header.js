import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="header">
        <Link to="./main">
          <h3 className="nav-head">Main</h3>
        </Link>
        <Link to="./photos">
          <h3 className="nav-head">Photos</h3>
        </Link>
        <Link to="./registry">
          <h3 className="nav-head">Registry</h3>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
