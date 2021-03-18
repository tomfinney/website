import React, { useState } from "react";
import Link from "next/link";
import {
  MdHome,
  MdDescription,
  MdFace,
  MdWork,
  MdMenu,
  MdClose,
} from "react-icons/md";
import routes from "../constants/routes";

const links = [
  { to: routes.home, Icon: MdHome, text: "Home" },
  { to: routes.about, Icon: MdFace, text: "About" },
  { to: routes.posts, Icon: MdDescription, text: "Posts" },
];

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <React.Fragment>
      <header className="header">
        <div className="header_inner">
          <h3>
            <Link href={routes.home}>
              <a>tomfinney.com</a>
            </Link>
          </h3>
          <div className="header_links">
            <div className="toggle" onClick={() => setShowNav(!showNav)}>
              {showNav ? <MdClose /> : <MdMenu />}
            </div>
            <nav
              className={`nav ${showNav ? "nav--show" : ""}`}
              onClick={showNav ? () => setShowNav(false) : undefined}
            >
              {links.map((link) => (
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
      <style jsx>
        {`
          .header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 42px;
            z-index: 2;
            border-bottom: 1px solid #ddd;
          }

          h3 {
            margin: 0;
            font-weight: 400;
          }

          .header::before {
            content: "";
            background-color: rgba(255, 255, 255, 0.7);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            backdrop-filter: saturate(180%) blur(20px);
          }

          .header_inner {
            display: flex;
            align-items: center;
            padding: 2px 16px;
            position: relative;
            z-index: 2;
            height: 100%;
          }

          .header_links {
            flex: 1;
            text-align: right;
          }

          a,
          h3 {
            color: #111111;
          }

          @media (min-width: 1000px) {
            .toggle {
              display: none;
            }
          }

          @media (max-width: 999px) {
            .toggle {
              position: relative;
              z-index: 3;
            }

            .nav {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              text-align: center;
              z-index: 2;
              pointer-events: none;
              opacity: 0;
              transition: 0.3s;
              background: rgba(255, 255, 255, 0.7);
            }
            .nav--show {
              opacity: 1;
              pointer-events: all;
            }
            .nav a {
              width: 100%;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
}
