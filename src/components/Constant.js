import { v4 as uuidv4 } from "uuid";


const env = {
  PRODUCTION: "PRODUCTION",
  DEV: "DEV",
};

export const initKey = "MIIJrTBXBgkqhkiG9w0BBQ0wSjApBgkq"; 

const clientInit = {
  environment: env.PRODUCTION,
  key: initKey,
};

export const flam = new FlamSaasSDK.init(clientInit);

export const refrenceId = uuidv4();

export const orderDetails = {
  productId: "a623e6a2-b366-4fb0-b193-ec1ad2d36b5d",
  varientId: "fe6748e1-6b3d-4db1-817e-57575f78f42f",
  refId: refrenceId,
  photo: {
    url: "",
  },
  video: {
    url: "",
    default: "",
  },
  color: "#2c56d4",
};


