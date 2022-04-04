import  React from 'react'
import './Jumbo.css'
import Navbar from '../NavBar/Navbar';

export default () =>{
    return(
        <header>
        <Navbar></Navbar>
        <div class="container">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <h1 class="display-4">Promoções</h1>
        <p class="lead">Temos as melhores promoções para você.</p>
     <button><a href="#pacotes">Pacotes</a></button>
     <button><a href="#destinos">Destinos</a></button>
           </div>
           </header>
    );
}