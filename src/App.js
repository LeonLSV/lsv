import "./App.css";
import logo from "./logo.png";
import mate from "./mate.svg";
import instagram from "./instagram.png";
import youtube from "./youtube.png";
import facebook from "./facebook.png";
import web from "./web.png";
import fondo from "./fondo.png";
// import fondo1 from "./fondo.png";
import pc from "./pc.png";
import fotoleon from "./fotoleon.png";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Hola! Aquí encontrarás todas mis redes.</h1>
        <img className="App-header__image" src={logo} alt="foto lsv" />
        <img className="App-header__fondo" src={fondo} alt="fondo lsv" />
      </header>
      <main className="main-container">
        <div className="main-container__btn-up">
          <a
            href="https://www.youtube.com/user/focklorepatagonico/videos"
            target="__blank"
            rel="noopener noreferer">
            <img
              src={youtube}
              alt="Youtube icono"
              style={{ marginLeft: "50px", marginRight: "20px" }}
            />
            Youtube
          </a>
        </div>
        <div className="main-container__btn">
          <a
            href="https://www.facebook.com/LeonSonidoVirtual"
            target="__blank"
            rel="noopener noreferer">
            <img
              src={facebook}
              alt="facebook icono"
              style={{ marginLeft: "50px", marginRight: "20px" }}
            />
            Facebook
          </a>
        </div>
        <div className="main-container__btn">
          <a
            href="https://www.instagram.com/leonsonidovirtual/?hl=es-la"
            target="__blank"
            rel="noopener noreferer">
            <img
              src={instagram}
              alt="instagram icono"
              style={{ marginLeft: "50px", marginRight: "20px" }}
            />
            Instagram
          </a>
        </div>
        <div className="main-container__btn">
          <a
            href="https://leonsonidovirtual.com/"
            target="__blank"
            rel="noopener noreferer">
            <img
              src={web}
              alt="Web icono"
              style={{ marginLeft: "50px", marginRight: "20px" }}
            />
            Mi Escuela
          </a>
        </div>
        <div className="main-container__btnComunidad">
          <a
            href="https://discord.com/invite/qGsshdwqEw"
            target="__blank"
            rel="noopener noreferer">
            {/* <img
              src={web}
              alt="Web icono"
              style={{ marginLeft: "50px", marginRight: "20px" }}
            /> */}
            "No Compitas Haz Compitas"
          </a>
        </div>
        <div className="container-apps">
          <h3 className="apps-title">Prueba mis Apps y Juegos</h3>

          <div className="main-container__btn-app-up">
            <a
              href="https://leonsonidovirtual.com/lsv-tools/"
              target="__blank"
              rel="noopener noreferer">
              <img
                src={pc}
                alt="Web icono"
                style={{ marginLeft: "35px", marginRight: "20px" }}
              />
              LSV Tools
            </a>
          </div>
          <div className="main-container__btn-app">
            <a
              href="https://ridertecnico-lsv.com/"
              target="__blank"
              rel="noopener noreferer">
              <img
                src={pc}
                alt="Web icono"
                style={{ marginLeft: "35px", marginRight: "20px" }}
              />
              Rider Técnico
            </a>
          </div>
          <div className="main-container__btn-app">
            <a
              href="https://ridertecnico-lsv.com/feedbacks"
              target="__blank"
              rel="noopener noreferer">
              <img
                src={pc}
                alt="Web icono"
                style={{ marginLeft: "35px", marginRight: "20px" }}
              />
              Feedbacks
            </a>
          </div>
          <div className="main-container__btn-app">
            <a
              href="https://lsv-efecto-haas.vercel.app/"
              target="__blank"
              rel="noopener noreferer">
              <img
                src={pc}
                alt="Web icono"
                style={{ marginLeft: "35px", marginRight: "20px" }}
              />
              Efecto Haas
            </a>
          </div>
        </div>
        <ReactPlayer
          className="video-player"
          url="https://www.youtube.com/watch?v=mYU48lhAtlY&t=590s"
        />
        <section>
          <div className="foto-perfil">
            <h1>Sobre mi</h1>
            <img src={fotoleon} alt="foto León" />
          </div>
          <div className="texto-bio">
            <p>
              Comencé trabajando en empresas como "Doblemente Producciones" y
              "Mosqui Sonido" Argentina. Luego de operar muchas bandas empece a
              trabajar como operador de monitores de "Dios Salve a la reina"
              (Arg), "The End, Tributo a Pink Floyd" (Arg), "Benjamín Amadeo"
              (Arg), entre otros...{" "}
            </p>
            <p>
              Me mude a Guatemala donde trabaje como director del departamento
              de Audio en "Blessure" y luego trabaje como operador de FOH y MON
              de "Stephanie Zelaya", "Gaby Moreno", "Cielos Abiertos", "The One
              Man Band" e hice algunos reemplazos en "Viernes Verde" y "El
              tambor de la tribu".
            </p>
            <p>
              Actualmente estoy en Colombia, trabajo como Monitorista y técnico
              de RF de Manuel Turizo. Tambien desarrollo aplicaciones para audio
              en vivo como "LSV Tools", "Efecto Haas", "Rider Técnico", juego de
              "Feedbacks", dicto cursos en mi plataforma online
              leonsonidovirtual.com y soy Lider en la comunidad de audio "No
              Compitas - Haz Compitas".
            </p>
          </div>
        </section>
      </main>

      <footer>
        <img src={mate} alt="mate" />
        <a
          href="https://www.instagram.com/leon_contreras_/?hl=es-la"
          rel="noopener noreferer"
          target="__blank">
          Aplicación creada por @leon_contreras_
        </a>
      </footer>
    </div>
  );
}

export default App;
