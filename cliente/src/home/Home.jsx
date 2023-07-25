import React, { useEffect, useState } from "react";
import axios from "axios";
import Destacado from "../componentes/destacado/Destacado";
import Lista from "../componentes/lista/Lista";
import Navbar from "../componentes/navbar/Navbar";
import "./home.scss";

const apiURL = "http://localhost:8800/api";

const Home = ({ tipo }) => {
  const [lista, setLista] = useState([]);
  const [genero, setGenero] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const config = {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWNmYjU0NDdmODU1MTVlMzcyMThhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDE0OTkyNSwiZXhwIjoxNjkwNTgxOTI1fQ.IMD8ijLOKoWRd6UzgvVC9iwI_0w_od7sIs8q9lZj-Jg",
          },
        };
    
        console.log("Headers:", config.headers);
    
        const res = await axios.get(
          `${apiURL}/lista${tipo ? "?tipo=" + tipo : ""}${
            genero ? "&genero=" + genero : ""
          }`,
          config
        );
    
        console.log(res.data);
        setLista(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomLists();
  }, [genero, tipo]);

  return (
    <div className="home">
      <Navbar />
      <Destacado tipo={tipo} setGenero={setGenero} />
      {lista.map((item, index) => {
        const key = item.nombre ? item.nombre + index : index;
        return <Lista key={key} titulo={item.titulo} item={item} />;
      })}
    </div>
  );
  
  
};

export default Home;

