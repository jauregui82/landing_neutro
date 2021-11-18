import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "src/components/carousel/carousel.css";

const importAll = (r)=> {
      return r.keys().map(r);
    }
    
    const images = importAll(require.context('src/assets/galery/', false, /\.(png|jpe?g|svg)$/));
export default () => (
   
<Carousel>
    {images.map((itemImg, index)=>(
        <div key={index}>
        <img alt="" src={itemImg.default} />
    </div>
        
        ))
    }
    
</Carousel>
)
