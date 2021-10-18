import React from "react";

import imgLogo from "src/assets/LOGO_MENU.png";
import "src/components/logo/logo.css";

const Logo = (props) => {
  // console.log(`[Logo]: ${JSON.stringify(props)}`);
  return (
    <div className={`logo `}>
      <img
        src={imgLogo}
        alt="Logo"
        width={"108"}
        height={"44"}
      />
    </div>
  );
};

export default Logo;
