import React from "react";
import Header from "./Header";

import "../css/core.scss";

export default function Page({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
