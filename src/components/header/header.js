import { Grid } from "@mui/material";
import "src/components/header/header.css";
import Logo from "src/components/logo/logo";

const Header = (props) => {

  return (
    <header className={`header `}>
      <div className="content-btn-menu">
        <Grid  container justifyContent={"space-between"}>
          <Grid item>
            <p className="btn-menu">
              Galeria
            </p>
          </Grid>
          <Grid item>
            <Logo/>
          </Grid>
          <Grid item>
            <p className="btn-menu">
              Escuchar albun
            </p>
          </Grid>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
