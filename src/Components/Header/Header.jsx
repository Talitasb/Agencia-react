import Navbar from '../NavBar/Navbar'
import './Header.css'
import react from 'react'

export default () =>{
    return(
        <header>
<Navbar></Navbar>
    <div className="slogan container-fluid">
      <div>
        <h2>Sua</h2>
        <h2>Paris dos Sonhos</h2>
        <h2>aqui.</h2>
      </div>
      <div class=" header-content ">
           <p>Conheça o Museu do Louvre, um dos museus mais famosos do mundo </p>
           </div>
      <div>
        <button type="button"><a href="" target="_blank"><i
              className="bi bi-lightbulb"></i>Saiba Mais</a></button>
         </div>
      </div>
     
  </header>

    )
}