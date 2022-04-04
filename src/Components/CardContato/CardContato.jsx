import './CardContato.css'

export default () => {
    return (
        <div className="formulario">

            <h1>Contato</h1>
            <p>Precisando de ajuda? Nos envie uma mensagem que responderemos o mais rapido possivel. Siga nossas redes.</p>

            <div className="row">
                <form className="card">
                    <label for="inputNome">Primeiro Nome</label>
                    <input type="text" id="inputNome"></input>
                    <label for="inputEmail">Email:</label>
                    <input type="email" id="inputEmail"></input>
                    <label ></label>
                    <label for="textAreaMensagem">Mensagem:</label>
                    <textarea Name="textAreaMensagem" id="textAreaMensagem"></textarea>
                    <button>Enviar</button>
                </form>

                   <hr/>        


            <div class="contato">
                <ul>
                    <a><i class="fas fa-envelope"> travelagency@gmail.com</i></a><br/>
                    <a><i class="fas fa-phone-alt">  (11)2222-2222</i></a>
                    <a><i class="fab fa-instagram"> Instagram</i></a>
                    <a><i class="fab fa-facebook"> Facebook</i></a>
                    <a><i class="fab fa-twitter"> Twitter</i></a>
                </ul>
            </div>
        </div>
        </div>
    );
}