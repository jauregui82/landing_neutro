import "src/components/main/main.css";
import Header from "src/components/header/header";

const Main = (props) => {

  return (
    <main>
      <Header/>
      <div className="main-content">
        {props.children}
      </div>
    </main>
  );
};

export default Main;
