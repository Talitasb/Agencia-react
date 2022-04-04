import  React from 'react'
import './JumboDestino.css'
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
          <h1 class="display-4">Destinos</h1>
          <p class="lead">Sabe aquela viagem dos sonhos? Aquela que você planeja todo ano e nunca faz? Agora você vai fazer, temos todos os 
          destinos mais desejados e pacotes imperdiveis com parcelamento em até 12x sem juros. 
          <hr/>Selecione se gostaria somente destinos, ou nossos pacotes completos:</p>
                <button><a href="#pacotes">Pacotes</a></button>
       <button><a href="#destinos">Destinos</a></button>
             </div>
           </header>
    );
}