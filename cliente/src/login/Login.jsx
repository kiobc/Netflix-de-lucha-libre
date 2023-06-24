
import './login.scss';

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src="" alt="" />
        </div>
      </div>
      <div className="contenedor">
        <form >
          <h1>Iniciar sesión</h1>
          <input type="email" placeholder="Dirección email o número de teléfono" />
          <input type="password" placeholder="Contraseña" />
          <button className="loginboton">Iniciar sesión</button>
          <span>Nuevo aqui? <b>Regístrate ahora.</b></span>
          <small>
            Esta página está protegida por Google reCAPTCHA para asegurar que no eres un robot. <b>Más información</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
