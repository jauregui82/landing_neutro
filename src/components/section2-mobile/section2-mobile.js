import { Grid } from "@mui/material";
import "src/components/section2-mobile/section2-mobile.css";
import humoCentro from "src/assets/NUBE_GRIS_copy.png";
import neutroFoto from "src/assets/NEUTRO_FOTO.png";
import bigSoto from "src/assets/BIG_SOTO_FOTO.png";
import brujula from "src/assets/BRUJULA.png";
import letra1 from "src/assets/LETRA_DE_CANCION_1.png";
import papelViejo from "src/assets/PAPEL_VIEJO.png";
import textContent1 from "src/assets/text_con_resaltador_mobile.png";
import rocaIzq from "src/assets/ROCA_IZQ.png";
import { useOffset } from "src/components/useOffset";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const Section2Mobile = (props) => {
    const offset = useOffset();
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="section2 p-relative">
        <img
            className="humoCentro"
            src={humoCentro}
            alt="Logo"  
            style={{
                transform: `translate( -50%,-${offset * 0.2}px)`
            }}           
        />
        <Grid
            container
            className="content-section-2"
        >
            <Grid item xs={12}>
                <div className="content-cantantes-2 p-relative">
                    <img
                        className="papelViejo"
                        src={papelViejo}
                        alt="Logo" 
                        style={{
                            transform: `translateY(-${offset * 0.1}px)`
                        }}            
                    />
                    <img
                        className="neutro"
                        src={neutroFoto}
                        alt="Logo"            
                    />
                    <img
                        className="bigSoto"
                        src={bigSoto}
                        alt="Logo"            
                    />
                    <img
                        className="letra1"
                        src={letra1}
                        alt="Logo"            
                    />
                    {/* <span className="LETRA-DE-CANCION">
                        {"Sigo joseando en lo m??o yo estoy invirtiendo la cuenta se est?? multiplicando y m??s de uno en la calle mordiendose su mujeres viniendoce"}
                    </span> */}
                </div>
                
            </Grid>            
            <Grid className="p-0" item xs={12} container>
                <div className={"content-text-2 p-relative"}>
                    <img
                        className="brujula"
                        src={brujula}
                        alt="Logo"   
                        // style={{
                        //     transform: `translateY(-${offset * 0.1}px)`
                        // }}          
                    />
                    
                    <span className="Neutro-Shorty-que-re">
                        Neutro Shorty que representa m??s a la escuela del rap y todo lo que es la l??rica de calle a trav??s de su l??piz fuerte, y Big Soto que simboliza la nueva generaci??n a trav??s de su rebeld??a y sus aluciones a fiestas, fueron la uni??n perfecta para la exposici??n del g??nero fusionando la esencia de ambos artistas.
                    </span>
                    <br/>
                    <br/>
                    <span className="El-proceso-de-grabac">
                        El proceso de grabaci??n de Apokalypsis se realiz?? aproximadamente en un mes. Esta era la primera vez que se reun??an para hacer un proyecto de tal magnitud. El plato fuerte de la primera parte  fue ???Hennessy???, un tema que habla de la fiesta y de la celebraci??n de estos cantantes en un momento importante de su carrera alcanzando m??s de 75,000,000 de reproducciones en todas las plataformas musicales. Apokalypsis marc?? un antes y un despu??s en el g??nero.
                    </span>
                    <br/>
                    <br/>
                    <br/>

                    <div className="white-found">
                        <div className="content-whitefound">
                        <img
                            className="rocaIzq"
                            src={rocaIzq}
                            alt="Logo" 
                            style={{
                                transform: `translateY(-${offset * 0.1}px) rotate(-${offset * 0.1}deg)`
                            }}             
                        />
                            <img
                                className="textContent1"
                                src={textContent1}
                                alt="Logo"            
                            />
                            
                        </div>
                    </div>
                </div>
            </Grid>

        </Grid>
    </div>
  );
};

export default Section2Mobile;
