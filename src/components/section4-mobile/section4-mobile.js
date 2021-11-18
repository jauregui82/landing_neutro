import { Grid } from "@mui/material";
import "src/components/section4-mobile/section4-mobile.css";
import letraCancion5 from "src/assets/LETRA_DE_CANCION_5.png";
import papelTexture from "src/assets/papel_texture_mobile.png";
import cintaAdhesiva from "src/assets/CINTA_ADHESIVA.png";
import bigSotoShortyFoto from "src/assets/big_soto_neutro_mobile.png";
import resaltadorNeutro from "src/assets/RESALTADOR.png";


const Section4Mobile = (props) => {

  return (
    <div className="pre-section4-mobile">
      <div className="section4-mobile">
        <Grid container className="p-relative h-100">
          <Grid item xs={12} >
            <div className="content-cancion-5">
              <img
                className="papelTexture"
                src={papelTexture}
                alt="Logo"            
              /> 
              <img
                className="cintaAdhesiva"
                src={cintaAdhesiva}
                alt="Logo"            
              /> 
            </div>
          </Grid>
          <Grid item xs={12} container justifyContent="flex-start">
            <div className="content-cancion-5">
              <img
                className="bigSotoShortyFoto"
                src={bigSotoShortyFoto}
                alt="Logo"            
              />
              <img
                className="resaltadorNeutro"
                src={resaltadorNeutro}
                alt="Logo"            
              /> 
            </div>
          </Grid>
        </Grid>
        
    </div>
      </div>
  );
};

export default Section4Mobile;
