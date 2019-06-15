import React from "react";
import { MdCopyright } from "react-icons/md";

export default function Footer() {
  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <footer className="footer">
      <div>
        <div className="footer__content">
          <MdCopyright /> tomfinney.com 2019
        </div>
        <div className="footer__content">
          <small onClick={handleClick}>Back up</small>
        </div>
      </div>
    </footer>
  );
}
