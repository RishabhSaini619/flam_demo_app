
import { downloadImage, downloadVideo} from "./APIService";
import orderData from "../App";


  export const handleImageDownload = () => {
    if (orderData.photo_url) {
      downloadImage(orderData.photo_url);
    }
  };

  export const handleVideoDownload = () => {
    if (orderData.video_url) {
      downloadVideo(orderData.video_url);
    }
  };

