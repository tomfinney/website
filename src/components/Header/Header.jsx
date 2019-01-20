import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MdHome, MdDescription, MdFace, MdWork } from "react-icons/md";
import routes from "../../constants/routes";

import "./header.scss";

const links = [
  { to: routes.home, Icon: MdHome, text: "Home" },
  { to: routes.about, Icon: MdFace, text: "About" },
  { to: routes.blogs, Icon: MdDescription, text: "Blogs" },
  { to: routes.projects, Icon: MdWork, text: "Projects" }
];

export default function Header() {
  return (
    <header className="header">
      <div>
        <h2>
          <Link to={routes.home}>tomjf.com</Link>
        </h2>
        <nav className="navLinks">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} exact={link.to === routes.home}>
              <link.Icon />
              <span>{link.text}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
