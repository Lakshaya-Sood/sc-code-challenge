import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <React.Fragment>
    <p>
      <Link to="/table">Table</Link>
    </p>
    <p>
      <Link to="/chart">Chart</Link>
    </p>
  </React.Fragment>
);

export default Menu;
