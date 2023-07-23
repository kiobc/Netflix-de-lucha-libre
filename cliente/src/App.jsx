import Home from './home/Home';
import "./app.scss"
import Registro from './registro/Registro';
import Login from './login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  const usuario = true;
  return(
   
<BrowserRouter>
  <Routes>
    
  <Route exact path="/" element={usuario ? <Home /> : <Registro />} />
  <Route path="/registro" element={!usuario ? <Registro /> : <Home />} />
  <Route path="/login" element={!usuario ? <Login /> : <Home />} />
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
