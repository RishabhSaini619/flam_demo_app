// API.js
import axios from "axios";

const finalizeOrder = async (refId, initKey) => {
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

    if (response.data) {
      const rData = response.data;
      console.log(rData);
    } else {
      throw new Error("Error posting data to API");
    }
  } catch (error) {
    console.error(error);
  }
};

export default finalizeOrder;
