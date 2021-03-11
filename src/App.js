import "./App.css";
import cara from "./cara.png";
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
        <img className="App-header__image" src={cara} alt="foto lsv" />
      </header>
      <main className="main-container">
        <div className="main-container__youtube">
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
        <div className="main-container__facebook">
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
        <div className="main-container__instagram">
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
        <div className="main-container__lsv">
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
        <div className="main-container__twitter">
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
        <h3 className="apps-title">Apps</h3>
        <div className="main-container__lsv">
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
        <div className="main-container__lsv">
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
        <div className="main-container__lsv">
          <MdWeb
            style={{ fontSize: "50px", margin: "0 20px", marginLeft: "40px" }}
          />
          <a href="/" target="__blank" rel="noopener noreferer">
            Rider Técnico
          </a>
        </div>
      </main>
      <footer>
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
