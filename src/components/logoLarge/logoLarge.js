import React from "react";

import imgLogo from "src/assets/LOGO_PRINCIPAL.png";
import "src/components/logoLarge/logoLarge.css";

const LogoLarge = (props) => {
  // console.log(`[Logo]: ${JSON.stringify(props)}`);
  return (
    <div className={`logoLarge `}>
      <img
        src={imgLogo}
        alt="Logo"
        width={"354"}
        height={"184"}
      />
    </div>
  );
};

export default LogoLarge;
