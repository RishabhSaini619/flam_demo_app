// AppBody.js
import React, { useState } from "react";
import ReactPlayer from "react-player";
import { handleImageDownload, handleVideoDownload } from "./Function";

export const AppBody = ({
  orderData,
  orderStatusData,
  onLaunch,
  onRefresh,
}) => {
  console.log(orderStatusData);

  const [videoPreview, setVideoPreview] = useState(false);

  const handleImagePreview = () => {
    setVideoPreview(false);
  };
  const handleVideoPreview = () => {
    setVideoPreview(true);
  };

  return (
    <main className="App-body">
      {orderData?.order?._id ? (
        <div className="App-body-submit">
          <div className="App-body-mobile">
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
          <div className="App-body-desktop">
            <div className="desktopHeader">
              <div
                className="desktopBtn"
                style={
                  videoPreview === false
                    ? {
                        backgroundColor: "#e0fe69",
                        color: "#2c56d4",
                      }
                    : { backgroundColor: "#2c56d4", color: "#e0fe69" }
                }
                onClick={handleImagePreview}
              >
                Photo
              </div>
              <div
                className="desktopBtn"
                style={
                  videoPreview === true
                    ? {
                        backgroundColor: "#e0fe69",
                        color: "#2c56d4",
                      }
                    : { backgroundColor: "#2c56d4", color: "#e0fe69" }
                }
                onClick={handleVideoPreview}
              >
                Video
              </div>
            </div>
            <div className="desktopPreview">
              {videoPreview === true ? (
                <div className="videoPreview">
                  <ReactPlayer
                    url={orderData.video_url}
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              ) : (
                <img
                  className="imagePreview"
                  src={orderData.photo_url}
                  alt="image"
                />
              )}
            </div>
            <div className="desktopFooter">
              <div className="downloadBtn">
                <div className="desktopBtn" onClick={handleImageDownload}>
                  Download Photo
                </div>
                <div className="desktopBtn" onClick={handleVideoDownload}>
                  Download Video
                </div>
              </div>
              <div className="desktopBtn">
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
          </div>
        </div>
      ) : (
        <div className="App-body-start">
          <div className="App-body-mobile">
            <h4 className="App-body-start-launch" onClick={onLaunch}>
              {"LAUNCH"}
            </h4>
          </div>
          <div className="desktopBtn">
            <h4 className="App-body-start-launch" onClick={onLaunch}>
              {"LAUNCH"}
            </h4>
          </div>
        </div>
      )}
    </main>
  );
};

// export default AppBody;
