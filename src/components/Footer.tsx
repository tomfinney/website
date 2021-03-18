import React from "react";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer>
      <div className="inner">
        <div className="footer__content">
          <MdCopyright /> tomfinney.com {new Date().getFullYear()}
        </div>
        <div className="footer__content">
          <small onClick={handleClick}>Back up</small>
        </div>
      </div>
      <style jsx>
        {`
          footer {
            background-color: #333333;
          }
          footer * {
            color: #ffffff;
          }
          .inner {
            max-width: 800px;
            margin: 0 auto;
            padding: 32px 16px;
          }
        `}
      </style>
    </footer>
  );
}
