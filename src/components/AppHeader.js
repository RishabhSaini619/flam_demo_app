// AppHeader.js
import React from "react";

const AppHeader = ({ onLaunch }) => {
  return (
    <div className="App-header">
      <img
        src={process.env.PUBLIC_URL + "/flam.svg"}
        alt="image"
      />
    </div>
  );
};

export default AppHeader;
