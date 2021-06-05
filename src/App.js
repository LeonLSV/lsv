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
            WebSite
          </a>
        </div>
        {/* <div className="main-container__btn">
          <FaTwitterSquare
             style={{marginLeft: "0px", marginRight: "-20px"}}
          />
          <a
            href="https://twitter.com/virtual_sonido"
            target="__blank"
            rel="noopener noreferer">
            Twitter
          </a>
        </div> */}
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
              href="https://ridertecnico-lsv.com/"
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
