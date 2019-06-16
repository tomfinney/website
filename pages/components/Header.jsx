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
import { useRough } from "../hooks/useRough";

const links = [
  { to: routes.home, Icon: MdHome, text: "Home" },
  { to: routes.about, Icon: MdFace, text: "About" },
  { to: routes.blogs, Icon: MdDescription, text: "Blogs" },
  { to: routes.projects, Icon: MdWork, text: "Projects" }
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const { containerRef, canvasRef } = useRough({
    color: "#ebeff5",
    hachureGap: 4,
    strokeWidth: 0,
    stroke: "transparent"
  });

  return (
    <header ref={containerRef} className="header">
      <canvas ref={canvasRef} />
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
