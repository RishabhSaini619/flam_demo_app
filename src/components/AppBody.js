// AppBody.js
import React from "react";
import ReactPlayer from "react-player";

const AppBody = ({ userData, onLaunch }) => {
  const downloadImage = () => {
    fetch(userData.photo_url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "image.jpg";
        link.click();
      });
  };

  const downloadVideo = () => {
    fetch(userData.video_url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "video.mp4";
        link.click();
      });
  };

  return (
    <div className="App-body">
      {userData?.order?._id ? (
        <div className="App-body-submit">
          <img
            className="client_photo_url"
            src={userData.photo_url}
            alt="image"
          />
          <div className="client_video_url">
            <ReactPlayer
              url={userData.video_url}
              width="100%"
              height="100%"
              controls={true}
            />
          </div>

          <div className="logo_zingcam">
            <img
              src={process.env.PUBLIC_URL + " logo_zingcam.png"}
              alt="image"
              width="50"
              height="50"
              onClick={() =>
                window.open("https://onelink.to/zingcam", "_blank")
              }
            />
          </div>

          <div className="download-buttons">
            
              <img
                className="downloadImageButton"
                src={process.env.PUBLIC_URL + " download1.png"}
                alt="image"
                width="30"
                height="30"
                onClick={downloadImage}
              />
            
            
              <img
                className="downloadVideoButton"
                src={process.env.PUBLIC_URL + " download1.png"}
                alt="image"
                width="30"
                height="30"
                onClick={downloadVideo}
              />
            
          </div>
        </div>
      ) : (
        <div className="App-body-submit">
          <img
            src={process.env.PUBLIC_URL + "launch.png"}
            alt="image"
            className="launch"
            width="180"
            height="75"
            onClick={onLaunch}
          />
        </div>
      )}
    </div>
  );
};

export default AppBody;
