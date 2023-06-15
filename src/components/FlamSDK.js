// FlamSaasSDK.js
// import FlamSaasSDK from "<path_to_FlamSaasSDK>";

const initKey = "MIIJrTBXBgkqhkiG9w0BBQ0wSjApBgkq"; // Replace with your actual initKey

const clientInit = {
  environment: "PRODUCTION",
  key: initKey,
};

const flam = new FlamSaasSDK.init(clientInit);

export default flam;
