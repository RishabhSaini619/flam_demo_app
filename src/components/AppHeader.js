// AppHeader.js
import React from "react";

const AppHeader = ({ onLaunch }) => {
  return (
    <div className="App-header">
      <img
        src={process.env.PUBLIC_URL + "/flam.svg"}
        alt="image"
        className="logo"
        width="400"
        height="100"
      />
    </div>
  );
};

export default AppHeader;
