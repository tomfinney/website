import React from "react";
import Header from "../Header/Header";

import "./pageWrapper.scss";

export default function PageWrapper({ children }) {
  return (
    <div className="pageWrapper">
      <Header />
      {children}
    </div>
  );
}
