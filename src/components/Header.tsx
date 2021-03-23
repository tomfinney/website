import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdHome, MdDescription, MdFace, MdMenu, MdClose } from "react-icons/md";
import routes from "../constants/routes";

const links = [
  { to: routes.home, Icon: MdHome, text: "Home" },
  { to: routes.about, Icon: MdFace, text: "About" },
  { to: routes.posts, Icon: MdDescription, text: "Posts" },
];

export default function Header() {
  const router = useRouter();

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
            <button className="toggle" onClick={() => setShowNav(!showNav)}>
              {showNav ? <MdClose /> : <MdMenu />}
            </button>
            <nav
              className={`nav ${showNav ? "nav--show" : ""}`}
              onClick={showNav ? () => setShowNav(false) : undefined}
            >
              {links.map((link) => {
                let active = false;

                if (link.to === "/") {
                  active = router.asPath === "/";
                } else {
                  active = router.asPath.includes(link.to);
                }

                return (
                  <Link key={link.to} href={link.to}>
                    <a className={`${active ? "active" : ""}`}>
                      <link.Icon className="icon" />
                      <div className="spacer" />
                      <span>{link.text}</span>
                    </a>
                  </Link>
                );
              })}
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
            font-weight: 800;
          }

          a {
            color: #111111;
            display: inline-flex;
            align-items: center;
            line-height: 1;
            padding: 4px 12px;
            border-radius: 40px;
            font-size: 0.85em;
            transition: 0.3 ease-in-out;
            border: 1px solid;
            border-color: transparent;
          }

          .nav a {
            background-color: #ffffff;
          }

          .active {
            border-color: #000000;
          }

          .spacer {
            width: 4px;
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
            padding: 0.125em 1em 0.125em 0.25em;
            position: relative;
            z-index: 2;
            height: 100%;
          }

          .header_links {
            flex: 1;
            text-align: right;
          }

          .toggle {
            border-radius: 50%;
            width: 24px;
            height: 24px;
            border: 1px solid #000000;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #ffffff;
          }

          @media (min-width: 900px) {
            .toggle {
              display: none;
            }
            a + a {
              margin-left: 24px;
            }
          }

          @media (max-width: 899px) {
            .toggle {
              position: relative;
              z-index: 3;
            }

            a + a {
              margin-top: 12px;
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
              transition: 0.3 ease-in-out;
              background: rgba(255, 255, 255, 0.8);
            }
            .nav--show {
              opacity: 1;
              pointer-events: all;
            }
          }
        `}
      </style>
    </React.Fragment>
  );
}
