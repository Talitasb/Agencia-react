import Miami from '../../assets/img/miami.jpg'
import BuenosAires from '../../assets/img/buenosaires.jpg'
import Disney from '../../assets/img/disney.jpg'
import Maragogi from '../../assets/img/maragogi.jpg'
import SaoPaulo from '../../assets/img/saopaulo.jpg'
import RiodeJaneiro from '../../assets/img/riodejaneiro.jpg'
import Portugal from '../../assets/img/portugal.jpg'
import Italia from '../../assets/img/italia.jpg'
import Paris from '../../assets/img/paris.jpg'

export default () => {
    return (
        <div className="formulario">
            <div className="row">
                <form className="card">
                    <div className="ida">
                        <label for="inputOrgigem">Origem</label>
                        <input type="origem" id="inputOrgigem" />

                        <label for="inputdate">Data ida:</label>
                        <input type="date" id="inputData" />
                    </div>
                    <div className="volta">
                        <label for="inputDestino">Destino</label>
                        <input type="destino" id="inputDestino" />

                        <label for="inputdate">Data Volta:</label>
                        <input type="date" id="inputData" />
                    </div>
                    <div className="quantidade">
                        <p>Quantos Viajantes:</p>
                        <select className="form-control" name="list">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>


                       
                           <input class="checkbox" name="theradio" id="checkbox1" type="checkbox"/>
                           <label for="checkbox1" >Crianças até 17 anos</label>


                        <button>Enviar</button>

                    </div>
                </form>
            </div>

            <section id="pacotes" className="pacotes ">
                <div className="pacotes-titulo ">
                    <h1>Conheça nossos Pacotes</h1>
                </div>
                <div className="pacotes-cards ">
                    <div className="card ">

                        <div className="card-tag card-tag-top ">
                            <p>Pacotes</p>
                        </div>

                        <div className="card-tag card-tag-bottom ">
                            <p>a partir R$1500,00</p>
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
                            <p>Pacotes</p>
                        </div>

                        <div className="card-tag card-tag-bottom ">
                            <p>a partir R$500,00</p>
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
                </div>

                <div className="card ">

                    <div className="card-tag card-tag-top ">
                        <p>Pacotes</p>
                    </div>

                    <div className="card-tag card-tag-bottom ">
                        <p>a partir R$2000,00</p>
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

            </section >

            <section id="destinos" className="destinos">
                <div className="destino-titulo ">
                    <h1>Destinos Nacionais</h1>
                </div>
                <div className="destinos-cards ">
                    <div className="card2">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$250,00</p>
                        </div>

                        <img src={RiodeJaneiro} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>Rio de Janeiro</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card2 ">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$150,00</p>
                        </div>

                        <img src={SaoPaulo} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>São Paulo</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card2 ">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$600,00</p>
                        </div>

                        <img src={Maragogi} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>Maragogi</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="destinos" className="destinos">
                <div className="destino-titulo ">
                    <h1>Destinos Internacional</h1>
                </div>
                <div className="destinos-cards ">
                    <div className="card2">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$1500,00</p>
                        </div>

                        <img src={Portugal} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>Portugal</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card2 ">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$2500,00</p>
                        </div>

                        <img src={Italia} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>Italia</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card2 ">

                        <div className="card2-tag card2-tag-top ">
                            <p>Destinos</p>
                        </div>

                        <div className="card2-tag card2-tag-bottom ">
                            <p>a partir R$2000,00</p>
                        </div>

                        <img src={Paris} alt="Cards de Fotos"/>
                        <div className="card2-content ">
                            <h1>Paris</h1>
                            <ul>
                                <li><i className="fas fa-coffee"></i>Café da manhã incluso</li>
                                <li><i className="fas fa-wifi"></i>Wi-fi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}