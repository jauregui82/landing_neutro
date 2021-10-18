import "src/components/section5/section5.css";
import bigSoto from "src/assets/FOTO_BIG_SOTO.png";
import neutroShorty from "src/assets/FOTO_NEUTRO_SHORTY.png";
import letra from "src/assets/LETRA_DE_CANCION_3.png";
import { useOffset } from "src/components/useOffset";


const Section5 = (props) => {
  const offset = useOffset();

  return (
    <div className="pre-section5">
      <div className="section5">
        <span className="found-piedras5"/>
        <span className="gradient-section5"/>
        <div className={"content-section-5"}>
              <img
                className="bigSoto-s5"
                src={bigSoto}
                alt="Logo" 
                style={{
                  transform: `translateX(${offset < 3035 && offset * 0.1}px)`
                }}     
              />
              <img
                className="neutroShorty-s5"
                src={neutroShorty}
                alt="Logo" 
                style={{
                  transform: `translateX(-${offset < 2606 && offset * 0.1 }px)`
              }}            
              />
              <img
                className="letra-s5"
                src={letra}
                alt="Logo"            
              />
        </div>
        
    </div>
      </div>
  );
};

export default Section5;
