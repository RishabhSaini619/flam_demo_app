// AppBody.js
import React from "react";

const AppBody = ({ userData, submit, onLaunch, onFinalize }) => {
  return (
    <div className="App-body">
      {!userData.order_id ? (
        <img
          src={process.env.PUBLIC_URL + "launch.png"}
          alt="image"
          className="logo"
          width="300"
          height="100"
          onClick={onLaunch}
        />
      ) : (
        <div>
          <h2>Order Id</h2>
          <h4>{userData.order_id}</h4>
          {!submit ? (
            <img
              src={process.env.PUBLIC_URL + "/complete.png"}
              alt="image"
              className="logo"
              width="300"
              height="100"
              onClick={onFinalize}
            />
          ) : (
            <img
              src={process.env.PUBLIC_URL + "/placed.png"}
              alt="image"
              className="logo"
              width="300"
              height="100"
              onClick={onFinalize}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AppBody;
