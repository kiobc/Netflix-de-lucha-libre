import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './listaItem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import axios from 'axios';
const apiURL = "http://localhost:8800/api";
export default function ListaItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [pelicula, setPelicula] = useState({});

  useEffect(() => {
    const getPelicula = async () => {
      try {
       
        const res = await axios.get(`${apiURL}/pelicula/${item}`, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWNmYjU0NDdmODU1MTVlMzcyMThhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDM4NjUzNSwiZXhwIjoxNjkwODE4NTM1fQ.uDOHbODpl72TzOQ2kFN0MOjgglxPPixB0PJRPcGVwO0",
          },
        });
        setPelicula(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPelicula();
  }, [item]);
  

  return (
    <div
      className='listaItem'
      style={{ left: isHovered ? index * 225 - 50 + index * 2.5 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="videoWrapper">
          <ReactPlayer
            url={pelicula.trailer}
            className="react-player"
            width="100%"
            height="100%"
            controls
            playing={isHovered}
          />
        </div>
      ) : (
        <img src={pelicula.img} alt="" />
      )}

      <div className="itemInfo">
        <div className="iconos">
          <PlayArrow className='icono' />
          <Add className='icono'/>
          <ThumbUpAltOutlined className='icono' />
          <ThumbDownOutlined className='icono'/>
        </div>
        <div className="itemInfoTop">
          <span>{pelicula.duracion}</span>
          <span className="limite">{pelicula.limite}</span>
          <span>{pelicula.anio}</span>
        </div>
        <div className="descripcion">{pelicula.desc}</div>
        <div className="genero">{pelicula.genero}</div>
      </div>
    </div>
  );
}
