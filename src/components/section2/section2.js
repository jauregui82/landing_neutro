import { Grid } from "@mui/material";
import "src/components/section2/section2.css";
import humoCentro from "src/assets/NUBE_GRIS_copy.png";
import neutroFoto from "src/assets/NEUTRO_FOTO.png";
import bigSoto from "src/assets/BIG_SOTO_FOTO.png";
import brujula from "src/assets/BRUJULA.png";
import letra1 from "src/assets/LETRA_DE_CANCION_1.png";
import papelViejo from "src/assets/PAPEL_VIEJO.png";
import textContent1 from "src/assets/TEXTO_CON_REALTADOR.png";
import rocaIzq from "src/assets/ROCA_IZQ.png";
import { useOffset } from "src/components/useOffset";


const Section2 = (props) => {
    const offset = useOffset();

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
            spacing={4}
            className="content-section-2"
        >
            <Grid item sm={3}/>
            <Grid className="p-0" item sm={3} container justifyContent="flex-end">
                <div className={"content-text-2 p-relative"}>
                    <img
                        className="brujula"
                        src={brujula}
                        alt="Logo"   
                        style={{
                            transform: `translateY(-${offset * 0.1}px)`
                        }}          
                    />
                    
                    <span className="Neutro-Shorty-que-re">
                        Neutro Shorty que representa más a la escuela del rap y todo lo que es la lírica de calle a través de su lápiz fuerte, y Big Soto que simboliza la nueva generación a través de su rebeldía y sus aluciones a fiestas, fueron la unión perfecta para la exposición del género fusionando la esencia de ambos artistas.
                    </span>
                    <br/>
                    <br/>
                    <span className="El-proceso-de-grabac">
                        El proceso de grabación de Apokalypsis se realizó aproximadamente en un mes. Esta era la primera vez que se reunían para hacer un proyecto de tal magnitud. El plato fuerte de la primera parte  fue “Hennessy”, un tema que habla de la fiesta y de la celebración de estos cantantes en un momento importante de su carrera alcanzando más de 75,000,000 de reproducciones en todas las plataformas musicales. Apokalypsis marcó un antes y un después en el género.
                    </span>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </Grid>
            <Grid item sm={6}>
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
                        {"Sigo joseando en lo mío yo estoy invirtiendo la cuenta se está multiplicando y más de uno en la calle mordiendose su mujeres viniendoce"}
                    </span> */}
                </div>
                
            </Grid>
        </Grid>
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
  );
};

export default Section2;
