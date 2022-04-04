import React from "react"
import './Navbar.css'
import {Link} from "react-router-dom"
import Logo from '../../assets/img/logo (2).png'

export default() =>{
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="nav">
            <div className="navLeft">
            <img src={Logo} alt="Cards de Fotos"/>
            </div>
            <div className="navRight">
              <ul>
              <li><a href="./">Home</a></li>
                <li><a href="./Destino">Destinos</a></li>
                <li><a href="./Promocao">Promoções</a></li>
                <li><a href="./Contato">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
}