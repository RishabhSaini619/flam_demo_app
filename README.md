# Flam Zingcam Demo App
  
- This React app consists of several components that allow users to place and manage orders using the FlamSDK. The app provides a user interface to preview and download photos and videos related to the orders. It also displays the status of the orders and allows for refreshing the status.

## Getting Started

- To get started with the React app, follow these steps:
- Clone the repository or download the source code files.
- Navigate to the project directory in your terminal.
- Install the dependencies by running the following command:
```npm install```
- Once the installation is complete, you can start the app by running:
```npm start````
- This will launch the app in your default browser, and you can view it at http://localhost:3000.

## Components

- ## App.js
  
- This is the main component that serves as the entry point for the application. It imports and utilizes other components to manage the app's functionality.

- ### Dependencies:

- React, useState from "react"
- "./App.css"
- flam from "./components/FlamSDK"
- orderDetails, refrenceId from "./components/OrderDetails"
- { finalizeOrder, orderStatus } from "./components/APIService"
- AppHeader from "./components/AppHeader"
- AppBody from "./components/AppBody"
  
- ### Functionality:

- Defines initial state variables using the useState hook.
- Implements the onLaunch function that places an order using the flam.placeOrder method. It handles success, failure, and close events.
- Implements the onRefresh function that retrieves the order status using the orderStatus function from the APIService component.
- Renders the AppHeader and AppBody components, passing necessary props.

- ## APIService.js
  
- This component provides functions for interacting with the Flam Saas API to finalize an order and retrieve order status.

- ### Dependencies:

- axios
  
- ### Functionality:

- `finalizeOrder`: Sends a POST request to the API's "finalize" endpoint with the provided refId and initKey as headers. It returns the response data if successful, or throws an error if unsuccessful.
- `orderStatus`: Sends a GET request to the API's "status" endpoint with the provided refId and initKey as headers. It returns the response data if successful, or throws an error if unsuccessful.

- ## AppBody.js
  
- This component displays the main content of the app, including order details, photo/video previews, and order status.

- ### Dependencies:

- React
- ReactPlayer
- Props:
-- `orderData`: Object containing order details.
-- `orderStatusData`: Object containing order status.
-- `onLaunch`: Function to launch the order placement process.
-- `onRefresh`: Function to refresh the order status.
  
- ### Functionality:

- Implements functions to download the photo and video associated with the order.
- Conditionally renders different content based on the availability of order data.
- Displays the photo preview, video preview, order status, and a refresh button.
- Provides a clickable Zingcam logo.
  
- ## AppHeader.js
  
- This component represents the header section of the app, displaying the Zingcam logo.

- ### Dependencies:
  
- React
  
- ## FlamSDK.js
  
- This component initializes the FlamSaasSDK using the provided initKey and exports it for use in other components.

### Dependencies:

- FlamSaasSDK (imported from an external path)
  
## OrderDetails.js

- This component defines the order details, including product and variant IDs, reference ID, photo and video URLs, and color.

### Dependencies:

- uuidv4 (imported as v4 from "uuid")
  
## App.css

- The app's styling is defined in the App.css file. It includes CSS rules for various components and layout properties such as alignment, margins, borders, and colors. The styles are applied using class names defined in the respective component files.

- Feel free to modify the styling according to your preferences or branding requirements.

- https://github.com/RishabhSaini619/flam_zingcam_demo_app/

## Conclusion

- This README provides an overview of the React app and its components, along with instructions for getting started. You can explore the code in detail and make any necessary modifications to suit your specific use case.

- Happy coding! If you have any further questions, feel free to ask.
