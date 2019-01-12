import React from "react";
import { NavLink } from "react-router-dom";
import { MdHome, MdDescription, MdFace, MdWork } from "react-icons/md";

import "./header.scss";

function Header() {
  return (
    <header className="header">
      <div>
        <h2>tomjf.com</h2>
        <nav className="navLinks">
          <NavLink to="/">
            <MdHome />
            <span>Home</span>
          </NavLink>
          <NavLink to="/about">
            <MdFace />
            <span>About</span>
          </NavLink>
          <NavLink to="/blogs">
            <MdDescription />
            <span>Blogs</span>
          </NavLink>
          <NavLink to="/projects">
            <MdWork />
            <span>Projects</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export { Header };
