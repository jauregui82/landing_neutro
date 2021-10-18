import "src/components/video/video.css";
import videoMp4 from "src/assets/V2_TEASER_BS_x_NEUTRO_APOKALYPSIS_2_1.mp4" 
const Video = (props) => {

  return (
    <video 
        autoPlay
        loop
        muted
        className={"video"}
    >
        <source src={videoMp4} type="video/mp4"/>
    </video>
  );
};

export default Video;
