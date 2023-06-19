// AppHeader.js
import React from "react";

const AppHeader = () => {
  return (
    <div className="App-header">
      <img className="App-header-logo"
        src={process.env.PUBLIC_URL + "/zingcam.png"}
        alt="image"
      />
    </div>
  );
};

export default AppHeader;
