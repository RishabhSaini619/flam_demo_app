// AppHeader.js
import React from "react";

const AppHeader = () => {
  return (
    <header className="App-header">
      <img className="App-header-logo"
        src={process.env.PUBLIC_URL + "/zingcam.png"}
        alt="image"
      />
    </header>
  );
};

export default AppHeader;
