import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleOnClick = () => {
    localStorage.setItem("user", null);
  };

  return (
    <nav>
      <li>
        <NavLink to="/" className="links">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="links">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="links">
          Contact
        </NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink to="/login" onClick={handleOnClick} className="links">
            Logout
          </NavLink>
        </li>
      )}
    </nav>
  );
};

export default Navbar;
