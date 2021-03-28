import React, { useEffect, useMemo, useState } from "react";
import { images } from "../constants/images";

export default function Hero() {
  const image = useMemo(() => {
    return images[Math.floor(Math.random() * images.length)];
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    checkIfLoaded();
  }, [image]);

  function srcToPublicPath(src: string) {
    return `/static/images/${src}`;
  }

  async function checkIfLoaded() {
    let img = document.createElement("img");

    async function loadImage(url, elem) {
      return new Promise((resolve, reject) => {
        elem.onload = () => resolve(elem);
        elem.onerror = reject;
        elem.src = url;
      });
    }

    const src = srcToPublicPath(image.src);

    try {
      await loadImage(src, img);
      console.log("Loaded", src);

      setLoaded(true);
    } catch (e) {
      console.error("FAILED TO LOAD IMG", src);
    }

    return () => {
      document.removeChild(img);
    };
  }

  return (
    <React.Fragment>
      <div className="hero-container">
        <div
          className={`hero hero--main ${loaded ? "visible" : "hidden"}`}
          style={{
            backgroundImage: `url("${srcToPublicPath(image.src)}")`,
          }}
        ></div>
        <div
          className={`hero hero--thumb ${loaded ? "hidden" : "visible"}`}
          style={{
            backgroundImage: `url("${srcToPublicPath(image.thumb)}")`,
          }}
        ></div>
      </div>

      <style jsx>{`
        .hero-container {
          position: relative;
          height: 400px;
        }
        .hero {
          background-size: cover;
          background-position: center;
          border-radius: 2;
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          transition: 0.7s ease-in-out;
        }
        .hero--main {
          z-index: 2;
        }
        .hero--thumb {
          z-index: 3;
        }
        .visible {
          opacity: 1;
        }
        .hidden {
          opacity: 0;
        }
      `}</style>
    </React.Fragment>
  );
}
