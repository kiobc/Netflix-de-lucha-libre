import React, { useRef, useState } from 'react';
import './lista.scss';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import ListaItem from '../listaItem/ListaItem';

export default function Lista({ titulo, item }) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumero, setSlideNumero] = useState(0);
  const listaRef = useRef(null);

  const handleClick = (direction) => {
    setIsMoved(true);

    if (listaRef.current) {
      const distancia = listaRef.current.getBoundingClientRect().x - 50;
      if (direction === 'izquierda' && slideNumero > 0) {
        setSlideNumero(slideNumero - 1);
        listaRef.current.style.transform = `translateX(${230 + distancia}px)`;
      }
      if (direction === 'derecha' && slideNumero < 2) {
        setSlideNumero(slideNumero + 1);
        listaRef.current.style.transform = `translateX(${-230 + distancia}px)`;
      }
    }
  };

  return (
    <div className="lista">
      <span className="listaTitulo">{titulo}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined className="sliderFlecha izquierda" onClick={() => handleClick('izquierda')} style={{ display: !isMoved && 'none' }}
        />

        <div className="contenedor" ref={listaRef}>
          {Array.isArray(item.contenido) ? (
            item.contenido.map((contenidoItem, i) => (
              <ListaItem key={i} index={i} item={contenidoItem} />
            ))
          ) : (
            <p>{item} no es un array</p>
          )}
        </div>
        <ArrowForwardIosOutlined className="sliderFlecha derecha" onClick={() => handleClick('derecha')} />
      </div>
    </div>
  );
}
