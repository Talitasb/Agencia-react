import Miami from '../../assets/img/miami.jpg'
import BuenosAires from '../../assets/img/buenosaires.jpg'
import Disney from '../../assets/img/disney.jpg'
import NovaYork from '../../assets/img/novayork.jpg'
import Florianopolis from '../../assets/img/florianopolis.jpg'
import Chile from '../../assets/img/chile.jpg'

import './CardPromocao.css'
import Jumbo from '../Jumbo/Jumbo'

export default () => {
    return (

               <section id="pacotes" className="pacotes ">
            <div className="pacotes-titulo ">
                <h1>Conheça nossos Pacotes</h1>
            </div>
            <div className="pacotes-cards ">
                <div className="card ">

                    <div className="card-tag card-tag-top ">
                        <p>Pacotes Promocionais</p>
                    </div>

                    <div className="card-tag card-tag-bottom ">
                        <p>a partir R$1000,00</p>
                    </div>

                    <img src={Miami} alt="Cards de Fotos"/>
                    <div className="card-content ">
                        <h1>Miami</h1>
                        <ul>
                            <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                            <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            <li><i className="fas fa-bus"></i>Translado</li>
                            <li><i className="fas fa-route"></i>Passeio Turistico</li>
                        </ul>
                    </div>
                </div>

                <div className="card ">

                    <div className="card-tag card-tag-top ">
                        <p>Pacotes Promocionais</p>
                    </div>

                    <div className="card-tag card-tag-bottom ">
                        <p>a partir R$200,00</p>
                    </div>

                    <img src={BuenosAires} alt="Cards de Fotos"/>
                    <div className="card-content ">
                        <h1>Buenos Aires</h1>
                        <ul>
                            <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                            <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            <li><i className="fas fa-bus"></i>Translado</li>
                            <li><i className="fas fa-route"></i>Passeio Turistico</li>
                        </ul>
                    </div>
                </div>

                <div className="card ">

                    <div className="card-tag card-tag-top ">
                        <p>Pacotes Promocionais</p>
                    </div>

                    <div className="card-tag card-tag-bottom ">
                        <p>a partir R$1500,00</p>
                    </div>

                    <img src={Disney} alt="Cards de Fotos"/>
                    <div className="card-content ">
                        <h1>Disney</h1>
                        <ul>
                            <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                            <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            <li><i className="fas fa-bus"></i>Translado</li>
                            <li><i className="fas fa-route"></i>Passeio Turistico</li>
                        </ul>
                    </div>
                </div>
            </div>




            <section id="Destino" className="destinos">
                <div className="destino-titulo ">
                    <h1>Temos destinos perfeitos para você</h1>
                </div>
                <div className="destinos-cards ">
                    <div className="card2">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos Promocionais</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$200,00</p>
                        </div>

                        <img src={Chile} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>Chile</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card2 ">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos Promocionais</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$1000,00</p>
                        </div>

                        <img src={NovaYork} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>Nova York</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card2 ">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos Promocionais</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$250,00</p>
                        </div>

                        <img src={Florianopolis} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>Florianopolis</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    );
}