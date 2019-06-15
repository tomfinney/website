import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "../css/core.scss";

export default function Page({ children }) {
  return (
    <div>
      <Header />
      <div className="pageInner">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}
