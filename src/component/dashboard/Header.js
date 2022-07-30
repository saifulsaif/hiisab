import React from "react";
import { Link } from "react-router-dom";

console.log(process.env);

const Header = () => {
  return (
    <div>
      <Link to="/home"> Dashboard </Link>
      <h1>Welcome to home page</h1>
    </div>
  );
};

export default Header;
