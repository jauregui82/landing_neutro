import React from "react";
import { Grid } from "@mui/material";
import "src/components/section1/section1.css";
import LogoLarge from "../logoLarge/logoLarge";
import imgLogo from "src/assets/Apokalypsiis.png";
import humoRight from "src/assets/HUMO_DERECHA.png";
import humoLeft from "src/assets/HUMO_IZQUIERDO.png";
import Video from "src/components/video/video";
import { useOffset } from "src/components/useOffset";

const Section1 = (props) => {
    const offset = useOffset();

  return (
    <div className="section1">
        <Video/> 
        <img
            className="humoRight"
            src={humoLeft}
            alt="Logo"  
            style={{
                transform: `translateY(-${offset * 0.1}px)`
            }}          
        />
        <img
            className="humoLeft"
            src={humoRight}
            alt="Logo"  
            style={{
                transform: `translateY(-${offset * 0.1}px)`
            }}           
        />
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={10}
            className="content-section-1"
        >
            <Grid item className={"content-logo-1"}>
                <LogoLarge/>
            </Grid>
            <Grid item className={"content-text-1"}>
                <div className="p-relative">
                    <img
                        className={"imgLogo1"}
                        src={imgLogo}
                        alt="Logo"
                        width={"154"}
                        height={"26"}
                        
                    />
                
                    <p className="paragraph z-index-1">
                        {"Apokalypsis es el proyecto que une a los dos exponentes más importantes del trap venezolano, Big Soto y Neutro Shorty."}
                        {"Esta conexión cambio la forma en la que ambos artistas son percibidos alrededor del mundo, dándole mayor proyección y crecimiento al género urbano en Venezuela."}
                    </p>
                </div>
            </Grid>
        </Grid>
        <span className="gradient-img-1" />
    </div>
  );
};

export default Section1;
