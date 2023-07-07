import { AcUnit } from "@material-ui/icons";
import "./home.scss";
import Navbar from "../componentes/navbar/Navbar";
import Featured from "../componentes/destacado/Destacado";
import Lista from "../componentes/lista/Lista";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured tipo="Pelicula"/>
      <Lista/>
      <Lista/>
      <Lista/>
      <Lista/>
    </div>
  );
};

export default Home;
