import React from 'react';
import './video.scss';
import { ArrowBackOutlined } from '@material-ui/icons';
import YouTube from 'react-youtube';

export default function Video() {
  const videoId = 'NA6ZE1m9kZ4';
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div className='video'>
      <div className="atras">
        <ArrowBackOutlined />
        Home
      </div>
      <div className="ver"> {/* Agregamos la clase 'ver' aquí */}
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
    </div>
  );
}
