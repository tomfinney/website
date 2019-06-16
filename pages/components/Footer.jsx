import React from "react";
import { MdCopyright } from "react-icons/md";
import { useRough } from "../hooks/useRough";

export default function Footer() {
  const { containerRef, canvasRef } = useRough({
    color: "#000",
    hachureGap: 3,
    strokeWidth: 0,
    stroke: "transparent"
  });

  function handleClick() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
  return (
    <footer ref={containerRef} className="footer">
      <canvas ref={canvasRef} />
      <div className="footer__inner">
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
