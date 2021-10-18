import React,{ useState } from "react";
import "src/components/section6/section6.css";
import ModalImg from "../modal/modal";


const Section6 = (props) => {
  const [imgSrc, setImgSrc ] = useState("");
  const handleImgScr = (srcImg) => {
    setImgSrc(srcImg)
  }

  const importAll = (r)=> {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('src/assets/galery/', false, /\.(png|jpe?g|svg)$/));
  return (
    <div className="pre-section6">
      <div className="section6">
        {images.map((itemImg, index)=>(
          <div key={index} className={"content-resposive-galery-6"}>
            <div className={"content-img-6"}>
                  <img
                    className="imgGalery-s6"
                    src={itemImg.default}
                    alt="Logo" 
                    onClick={()=>handleImgScr(itemImg.default)}           
                  />
            </div> 
          </div> 
        ))
        }
      </div>
      <div>
        <button className="btn-music">{"ESCUCHAR ALBUM  "}</button>
      </div>
      <ModalImg srcImgModal={imgSrc} handleImgScr={handleImgScr}/>
    </div>
  );
};

export default Section6;
