// API.js
import axios from "axios";

export const finalizeOrder = async (refId, initKey) => {

  console.log(refId, initKey)

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

    console.log(response, 'test 1')

    if (response.data) {
      const responseData = response.data;
      console.log(responseData, 'test 2');
      return responseData;
    } else {
      throw new Error("Error posting data to API");
    }
  } catch (error) {
    console.error(error);
  }
};


