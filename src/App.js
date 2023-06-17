import React, { useState } from "react";
import "./App.css";
import flam from "./components/FlamSDK";
import orderDetails from "./components/OrderDetails";
import {finalizeOrder} from "./components/APIService";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";

const App = () => {
  const initKey = "MIIJrTBXBgkqhkiG9w0BBQ0wSjApBgkq"; // Replace with your actual initKey
  const [userData, setUserData] = useState({});
  const [submit, setSubmit] = useState(false);

  const onLaunch = () => {
    flam.placeOrder({
      ...orderDetails,
      handleSuccess: async (data) => {
        console.log("sdkRes", data);
        
        const response = await finalizeOrder(data.ref_id, initKey);
        setUserData(response.data);
      },
      handleFailure: (err) => {
        console.log(err, "error");
      },
    });
  };

  const onFinalize = () => {
    finalizeOrder(userData.ref_id, initKey);
    // setSubmit(true);
  };

  return (
    <div className="App">
      <AppHeader onLaunch={onLaunch} />
      <AppBody
        userData={userData}
        onLaunch={onLaunch}
      />
    </div>
  );
};

export default App;
