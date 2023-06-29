// API.js
import axios from "axios";

export const finalizeOrder = async (refId, initKey) => {
  console.log(refId, initKey);

  try {
    const response = await axios.post(
      "https://api.flamapp.com/flamcards/zingcam/order/finalize",
      {
        ref_id: refId,
      },
      {
        headers: {
          "x-api-key": initKey,
        },
      }
    );

    console.log(response, "test 1");

    if (response.data) {
      const responseData = response.data;
      console.log(responseData, "test 2");
      return responseData;
    } else {
      throw new Error("Error posting data to API");
    }
  } catch (error) {
    console.error(error);
  }
};

export const orderStatus = async (refId, initKey) => {
  console.log(refId, initKey);

  try {
    const response = await axios.get(
      `https://zingcam.prod.flamapp.com/zingcam/order/status?ref_id=${refId}`,

      {
        headers: {
          "x-api-key": initKey,
        },
      }
    );

    console.log(response, "test 1");

    if (response.data) {
      const statusResponse = response.data;
      console.log(statusResponse, "test status reposnse");
      return statusResponse;
    } else {
      throw new Error("Error getting data from API");
    }
  } catch (error) {
    console.error(error);
  }
};

export const downloadImage = async (photoUrl) => {
  console.log("API Service downloadd img");
  try {
    const response = await axios.get(photoUrl, {
      responseType: "blob",
    });
    const url = URL.createObjectURL(response.data);
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.jpg";
    link.click();
  } catch (error) {
    console.log("Failed to download image:", error);
  }
};

export const downloadVideo = async (videoUrl) => {
  console.log("API Service downloadd vid");
  try {
    const response = await axios.get(videoUrl, {
      responseType: "blob",
    });
    const url = URL.createObjectURL(response.data);
    const link = document.createElement("a");
    link.href = url;
    link.download = "video.mp4";
    link.click();
  } catch (error) {
    console.log("Failed to download video:", error);
  }
};

