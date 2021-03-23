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
        <div className="content">
          <MdCopyright />
          <div className="spacer" />
          <span>tomfinney.com {new Date().getFullYear()}</span>
        </div>
        <button onClick={handleClick}>Back up</button>
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
            padding: 2em 1em;
          }
          .content {
            display: flex;
            align-items: center;
          }
          .spacer {
            width: 0.25em;
            height: 0.25em;
          }
          button {
            background-color: transparent;
            border: 0;
          }
        `}
      </style>
    </footer>
  );
}
