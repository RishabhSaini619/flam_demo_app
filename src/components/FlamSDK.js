// FlamSaasSDK.js
// import FlamSaasSDK from "<path_to_FlamSaasSDK>";

const initKey = "MIIJrTBXBgkqhkiG9w0BBQ0wSjApBgkq"; 

const clientInit = {
  environment: "PRODUCTION",
  key: initKey,
};

export const flam = new FlamSaasSDK.init(clientInit);

// export default flam;
