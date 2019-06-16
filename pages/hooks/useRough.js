import { useRef, useEffect, useState } from "react";
import rough from "roughjs/dist/rough.umd";

const colors = ["#fffecb", "#ffcbcb", "#cbffe5", "#cbf7ff", "#ffcbfd"];

export function useRough({
  color,
  fillWeight,
  hachureGap,
  strokeWidth,
  stroke
} = {}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [rect, setRect] = useState({});

  useEffect(() => {
    measureContainer();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", measureContainer);
    return () => {
      window.removeEventListener("resize", measureContainer);
    };
  }, [rect]);

  useEffect(() => {
    drawRect();
  }, [rect]);

  function measureContainer() {
    const { current } = containerRef;
    if (current) {
      setRect(current.getBoundingClientRect());
    }
  }

  function drawRect() {
    if (rect.width && rect.height) {
      const { current } = canvasRef;
      current.height = rect.height + 16;
      current.width = rect.width + 16;
      const rc = rough.canvas(current);
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      rc.rectangle(8, 8, rect.width, rect.height, {
        fill: color || randomColor,
        fillWeight: fillWeight || 3,
        hachureGap: hachureGap || 5,
        strokeWidth: strokeWidth || 1,
        stroke: stroke || "#000"
      });
    }
  }

  return { containerRef, canvasRef };
}
