import React, { useState } from "react";
import Link from "next/link";
import {
  MdHome,
  MdDescription,
  MdFace,
  MdWork,
  MdMenu,
  MdClose
} from "react-icons/md";
import routes from "../constants/routes";

import "./header.scss";

const links = [
  { to: routes.home, Icon: MdHome, text: "Home" },
  { to: routes.about, Icon: MdFace, text: "About" },
  { to: routes.blogs, Icon: MdDescription, text: "Blogs" },
  { to: routes.projects, Icon: MdWork, text: "Projects" }
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);
  return (
    <header className="header">
      <div>
        <h2>
          <Link href={routes.home}>
            <a>tomfinney.com</a>
          </Link>
        </h2>
        <div className="headerInner">
          <div className="navToggle" onClick={() => setShowNav(!showNav)}>
            {showNav ? <MdClose /> : <MdMenu />}
          </div>
          <nav className={`navLinks ${showNav ? "navLinksShow" : ""}`}>
            {links.map(link => (
              <Link key={link.to} href={link.to}>
                <a>
                  <link.Icon />
                  <span>{link.text}</span>
                </a>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
