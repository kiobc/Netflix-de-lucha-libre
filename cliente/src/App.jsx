import Home from './home/Home';
import "./app.scss"
import Video from './video/Video';
import Registro from './registro/Registro';
import Login from './login/Login';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


const App = () => {
  const usuario = true;
  return(
   
<BrowserRouter>
  <Routes>
    
  <Route exact path="/" element={usuario?<Home />:<Navigate to="/registro" />} />
  <Route path="/registro" element={!usuario?<Registro />:<Navigate to="/" />} />
  <Route path="/login" element={!usuario?<Login />:<Navigate to="/" />} />
  {usuario &&  (
    <>    
    <Route path="/wwe" element={<Home />} />
    <Route path="/series" element={<Home />} />
    <Route path="/mirar" element={<Home />} />
    </> )}
  </Routes>
</BrowserRouter>
  )
};

export default App;