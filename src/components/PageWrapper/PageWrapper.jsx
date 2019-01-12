import React from "react";
import Header from "../Header";

import "./pageWrapper.scss";

function PageWrapper({ children }) {
  return (
    <div className="pageWrapper">
      <Header />
      {children}
    </div>
  );
}

export { PageWrapper };
