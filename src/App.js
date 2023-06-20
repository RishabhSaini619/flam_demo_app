import React, { useState } from "react";
import "./App.css";
import flam from "./components/FlamSDK";
import orderDetails, { refrenceId } from "./components/OrderDetails";
import { finalizeOrder, orderStatus } from "./components/APIService";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";

const App = () => {
  const initKey = "MIIJrTBXBgkqhkiG9w0BBQ0wSjApBgkq";
  const [orderData, setOrderData] = useState({});
  const [orderStatusData, setOrderStatusData] = useState({});

  // const componentStyle = {
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // };

  const onLaunch = () => {
    flam.placeOrder({
      ...orderDetails,
      handleSuccess: async (data) => {
        console.log("sdkRes", data);

        const response = await finalizeOrder(data.ref_id, initKey);
        setOrderData(response.data);

        setOrderStatusData(response.data);
        console.log(response, "initStat", orderStatusData);
      },
      handleFailure: (err) => {
        console.log(err, "error");
      },
      handleClose: () => {
        console.log("closed");
      },
    });
  };

  const onRefresh = async () => {
    console.log(refrenceId, initKey, "onRefresh");
    const response = await orderStatus(refrenceId, initKey);
    console.log("daad", response);
    setOrderStatusData(response.data);
  };

  return (
    <div className="App" width="window.innerWidth" height="window.innerHeight">
      <AppHeader />
      <AppBody
        orderData={orderData}
        orderStatusData={orderStatusData}
        onLaunch={onLaunch}
        onRefresh={onRefresh}
      />
    </div>
  );
};

export default App;
