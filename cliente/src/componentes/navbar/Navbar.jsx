import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import "./navbar.scss"
import React, { useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  const[isScrolled,setIsScrolled]=useState(false);
  window.onscroll=()=> {
    setIsScrolled(window.pageYOffset===0?false:true);
    return()=>(window.onscroll=null);
  };
  console.log(isScrolled);
  return (
    <div className={isScrolled? "navbar scrolled":"navbar" }>
        <div className="container">
            <div className="left">
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
                
                <Link to="/" className="link"> 
                <span>Inicio</span>
                 </Link>
                <Link to="/series" className="link"> 
                <span>Series</span>
                 </Link>

                 <Link to="/wwe" className="link"> 
                 <span>WWE</span>
                 </Link>
                
                <span>AEW</span>
                <span>ROH</span>
                <span>Mi lista</span>
                </div>
            <div className="right">
                <Search className="icon"/>
                <span>KID</span>
                <Notifications className="icon"/>
                <img src="https://th.bing.com/th/id/R.b62b5ea41d675ad646b8da931c65fdff?rik=fGGfU4PQmEmmbg&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1789%2f4287%2fproducts%2fUS-WWE-Stone-Cold-Steve-Austin-_Logo-01A-Black_1024x1024.jpg%3fv%3d1571678894&ehk=zd9Ldb1cbcowBG8tR%2baFfqapsgts3XT0D8jNNXWRT9g%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <div className="perfil">

                
                <ArrowDropDown className="icon"/>
                <div className="opciones">
                  <span>Configuración</span>
                  <span>Salir</span>
                  </div>
                </div>
                </div>

            </div>
    </div>
  )
}

export default Navbar