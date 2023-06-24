import React, { useState, useRef } from 'react';
import './registro.scss';

export default function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="registro">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="" alt="" />
          <button className="loginboton">Ingresa</button>
        </div>
      </div>
      <div className="contenedor">
        <h1>Ilimitadas películas, series y documentales del wrestling</h1>
        <h2>Mira en donde sea y cuando quieras</h2>
        <p>Listo para ver? Ingresa con tu email</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="Dirección email" ref={emailRef} />
            <button className="registroboton" onClick={handleStart}>Comenzar</button>
          </div>
        ) : (
          <form className="input">
            <input type="password" placeholder="Contraseña" ref={passwordRef} />
            <button className="registroboton" onClick={handleFinish}>Registrarse</button>
          </form>
        )}
      </div>
    </div>
  );
}
