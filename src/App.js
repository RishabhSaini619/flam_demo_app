import React, { useEffect, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
// import FlamSaasSDK from "<path_to_FlamSaasSDK>";

const initKey = "MIIJrTBXBgkqhkiG9w0BBQ0wSjApBgkq"; // Replace with your actual initKey

const clientInit = {
  environment: "PRODUCTION",
  key: initKey,
};

const App = () => {
  const flam = new FlamSaasSDK.init(clientInit);
  const [userData, setUserData] = useState({});
  const [submit, setSubmit] = useState(false);
  const refrenceId = uuidv4();

  console.log(refrenceId, "refrenceId");

  let orderDetails = {
    productId: "a623e6a2-b366-4fb0-b193-ec1ad2d36b5d",
    varientId: "fe6748e1-6b3d-4db1-817e-57575f78f42f",
    refId: refrenceId,
    photo: {
      url: "https://s3-ap-south-1.amazonaws.com/flam-videoshop-assets/flam/prod/base/efb45ee6-a22a-41b3-931b-49c171075a5a.png",
    },
    video: {
      url: "https://flam-videoshop-assets.s3.ap-south-1.amazonaws.com/flam/app/videos/1_LT_Flam.mp4",
      default:
        "https://flam-videoshop-assets.s3.ap-south-1.amazonaws.com/flam/app/videos/1_LT_Flam.mp4",
    },
    color: "#000000",
    handleSuccess: (data) => {
      console.log("sdkRes", data);
      setUserData(data);
      console.log(setUserData, "setUserData");
    },
    handleFailure: (err) => {
      console.log(err, "error");
    },
  };

  const onLaunch = () => {
    console.log(flam, "flam");
    flam.placeOrder(orderDetails);
  };

  const onFinalize = async () => {
    console.log("fin");
    try {
      const response = await axios.post(
        "https://api.flamapp.com/flamcards/zingcam/order/finalize",
        {
          ref_id: userData.ref_id,
        },
        {
          headers: {
            "x-api-key": initKey,
          },
        }
      );

      if (response.data) {
        const rData = response.data;
        console.log(rData);
      } else {
        throw new Error("Error posting data to API");
      }
    } catch (error) {
      console.error(error);
    }
    setSubmit(true);
  };


  return (
    <div className="App">
      <div className="App-header">
        <img
          src={process.env.PUBLIC_URL + "/flam.svg"}
          alt="image"
          className="logo"
          width="400"
          height="100"
          onClick={onLaunch}
        />
      </div>
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
            <h1>Order Id</h1>
            <h2>{userData.order_id}</h2>
            { !submit? <img
            src={process.env.PUBLIC_URL + "/complete.png"}
            alt="image"
            className="logo"
            width="300"
            height="100"
            onClick={onFinalize
            }
          /> : 
            <img
              src={process.env.PUBLIC_URL + "/placed.png"}
              alt="image"
              className="logo"
              width="300"
              height="100"
              onClick={onFinalize}
            />}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
