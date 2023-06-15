// OrderDetails.js
import { v4 as uuidv4 } from "uuid";

const refrenceId = uuidv4();

const orderDetails = {
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
};

export default orderDetails;
