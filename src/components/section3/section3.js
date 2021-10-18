import { Grid } from "@mui/material";
import "src/components/section3/section3.css";
import letraCancion2 from "src/assets/LETRA_DE_CANCION_2.png";
import letraCancion4 from "src/assets/LETRA_DE_CANCION_3.png";
import rocaDer from "src/assets/ROCA_DER.png";


const Section3 = (props) => {

  return (
    <div className="section3 p-relative">
        <div className="content-video-3">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/hKrutqHr2IM?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <Grid container className="h-100">
            <Grid item sm={6} container justifyContent="flex-end">
                <div className="content-letra-cancion-2">
                    <img
                        className="letraCancion2"
                        src={letraCancion2}
                        alt="Logo"            
                    /> 
                </div>
            </Grid>
            <Grid item sm={6}>
                <div className="content-letra-cancion-2">
                    <img
                        className="letraCancion4"
                        src={letraCancion4}
                        alt="Logo"            
                    /> 
                    <img
                        className="rocaDer"
                        src={rocaDer}
                        alt="Logo"            
                    /> 
                </div>
            </Grid>
        </Grid>
        {/* <img
            className="letraCancion2"
            src={letraCancion2}
            alt="Logo"            
        /> */}
    </div>
  );
};

export default Section3;
