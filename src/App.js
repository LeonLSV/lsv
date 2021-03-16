import "./App.css";
import logo from "./logo.png";
import mate from "./mate.png";
import {
  FaYoutube,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { MdWeb } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>¡Bienvenido!</h1>
        <img className="App-header__image" src={logo} alt="foto lsv" />
      </header>
      <main className="main-container">
        <div className="main-container__btn-up">
          <FaYoutube
            style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
          />
          <a
            href="https://www.youtube.com/user/focklorepatagonico/videos"
            target="__blank"
            rel="noopener noreferer">
            Youtube
          </a>
        </div>
        <div className="main-container__btn">
          <FaFacebookSquare
            style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
          />
          <a
            href="https://www.facebook.com/LeonSonidoVirtual"
            target="__blank"
            rel="noopener noreferer">
            Facebook
          </a>
        </div>
        <div className="main-container__btn">
          <FaInstagram
            style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
          />
          <a
            href="https://www.instagram.com/leonsonidovirtual/?hl=es-la"
            target="__blank"
            rel="noopener noreferer">
            Instagram
          </a>
        </div>
        <div className="main-container__btn">
          <MdWeb
            style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
          />
          <a
            href="https://leonsonidovirtual.com/"
            target="__blank"
            rel="noopener noreferer">
            WebSite
          </a>
        </div>
        <div className="main-container__btn">
          <FaTwitterSquare
            style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
          />
          <a
            href="https://twitter.com/virtual_sonido"
            target="__blank"
            rel="noopener noreferer">
            Twitter
          </a>
        </div>
        <div className="container-apps">
          {/* <h3 className="apps-title">Apps</h3> */}
          <div className="main-container__btn-app-up">
            <MdWeb
              style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
            />
            <a
              href="https://leonsonidovirtual.com/lsv-tools/"
              target="__blank"
              rel="noopener noreferer">
              LSV Tools
            </a>
          </div>
          <div className="main-container__btn-app">
            <MdWeb
              style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
            />
            <a
              href="https://lsv-efecto-haas.vercel.app/"
              target="__blank"
              rel="noopener noreferer">
              Efecto Haas
            </a>
          </div>
          <div className="main-container__btn-app">
            <MdWeb
              style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
            />
            <a href="/" target="__blank" rel="noopener noreferer">
              Rider Técnico
            </a>
          </div>
        </div>
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
