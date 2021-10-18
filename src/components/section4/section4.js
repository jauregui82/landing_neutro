import { Grid } from "@mui/material";
import "src/components/section4/section4.css";
import letraCancion5 from "src/assets/LETRA_DE_CANCION_5.png";
import papelTexture from "src/assets/PAPEL_TEXTURE_Copy.png";
import cintaAdhesiva from "src/assets/CINTA_ADHESIVA.png";
import bigSotoShortyFoto from "src/assets/big_soto_shorty_foto.png";
import resaltadorNeutro from "src/assets/RESALTADOR.png";


const Section4 = (props) => {

  return (
    <div className="pre-section4">
      <div className="section4">
        <Grid container className="p-relative h-100">
          <Grid item sm={6} container justifyContent="flex-end">
            <div className="content-cancion-5">
              <img
                className="letraCancion5"
                src={letraCancion5}
                alt="Logo"            
              />
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
          <Grid item sm={6} container justifyContent="flex-start">
            <div className="content-cancion-5">
              <img
                className="bigSotoShortyFoto"
                src={bigSotoShortyFoto}
                alt="Logo"            
              />
              <img
                className="letraCancion5-right"
                src={letraCancion5}
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

export default Section4;
