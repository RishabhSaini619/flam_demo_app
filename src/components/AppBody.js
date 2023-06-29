// AppBody.js
import React from "react";
import ReactPlayer from "react-player";
import { downloadImage, downloadVideo } from "./APIService";


export const AppBody = ({ orderData, orderStatusData, onLaunch, onRefresh }) => {
  console.log(orderStatusData);
  
  const handleImageDownload = () => {
    if (orderData.photo_url) {
      downloadImage(orderData.photo_url);
    }
  };

  const handleVideoDownload = () => {
    if (orderData.video_url) {
      downloadVideo(orderData.video_url);
    }
  };

  return (
    <main className="App-body">
      {orderData?.order?._id ? (
        <div className="App-body-submit">
          {/* card photo */}
          <div className="card-photo">
            {/* card - title  */}
            <h4 className="card-title">Photo Preview</h4>
            {/* card -preview */}
            <img
              className="client_photo_url"
              src={orderData.photo_url}
              alt="image"
            />
            {/* card btn title */}

            <h4 className="card-btn" onClick={handleImageDownload}>
              {"Download Photo"}
            </h4>
          </div>
          <div className="card-video">
            <h4 className="card-title">{"Video Preview"}</h4>
            <div className="client_video_url">
              <ReactPlayer
                url={orderData.video_url}
                width="100%"
                height="100%"
                controls={true}
              />
            </div>
            <h4
              className="card-btn"
              onClick={handleVideoDownload}
              style={{ color: "#E0FE69" }}
            >
              {"Download Video "}
            </h4>
          </div>
          <div className="card-stats">
            <h4 className="card-title">Status</h4>
            <h4
              className="card-stats-statusbar"
              style={{
                color:
                  orderStatusData.status == "PROCESSING" ? "orange" : "green",
              }}
            >
              {orderStatusData && orderStatusData.status}
            </h4>
            <img
              src={process.env.PUBLIC_URL + "refresh.png"}
              alt="image"
              className="refresh"
              onClick={onRefresh}
            />
          </div>
          <div className="logo_zingcam">
            <img
              className="logo_zingcam_photo"
              src={process.env.PUBLIC_URL + " logo_zingcam.png"}
              alt="image"
              onClick={() =>
                window.open("https://onelink.to/zingcam", "_blank")
              }
            />
          </div>
        </div>
      ) : (
        <div className="App-body-submit">
          <h4 className="App-body-submit-launch" onClick={onLaunch}>
            {"LAUNCH"}
          </h4>
        </div>
      )}
    </main>
  );
};

// export default AppBody;
