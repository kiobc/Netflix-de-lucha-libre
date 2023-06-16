import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './listaItem.scss';
import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons';

export default function ListaItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailerId = 'Tlehw0A7wuI';

  return (
    <div
      className='listaItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="videoWrapper">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerId}`}
            className="react-player"
            width="100%"
            height="100%"
            controls
            playing={isHovered}
          />
        </div>
      ) : (
        <img src="https://th.bing.com/th/id/R.af90d224c738702c6c9e18d7fd144bcf?rik=q%2bTASMIRzHw4ZA&riu=http%3a%2f%2fimages2.fanpop.com%2fimages%2fphotos%2f4600000%2fWrestleMania-XXV-professional-wrestling-4696205-1280-1024.jpg&ehk=WDX0EaqnR2%2fNnr6e%2bh00eixi%2boAmtU185pvKTnTNcfI%3d&risl=&pid=ImgRaw&r=0" alt="" />
      )}

      <div className="itemInfo">
        <div className="iconos">
          <PlayArrow className='icono' />
          <Add className='icono'/>
          <ThumbUpAltOutlined className='icono' />
          <ThumbDownOutlined className='icono'/>
        </div>
        <div className="itemInfoTop">
          <span>1 hora 14 min</span>
          <span className="limite">+16</span>
          <span>1999</span>
        </div>
        <div className="descripcion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At reiciendis necessitatibus explicabo maiores dicta iusto iure quasi aliquam quis tempore sed odit .
        </div>
        <div className="genero">
          Acción
        </div>
      </div>
    </div>
  );
}
