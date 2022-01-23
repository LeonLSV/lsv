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
import celu from "./celu.png";
import apple from "./apple.png";
import google from "./google.png";
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
            href="https://leonsonidovirtual.com/"
            target="__blank"
            rel="noopener noreferrer">
            <img
              src={web}
              alt="Web icono"
              style={{ marginLeft: "50px", marginRight: "20px" }}
            />
            Mi Escuela
          </a>
        </div>
        <div className="main-container__btn">
          <a
            href="https://www.youtube.com/user/focklorepatagonico/videos"
            target="__blank"
            rel="noopener noreferrer">
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
            rel="noopener noreferrer">
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
            rel="noopener noreferrer">
            <img
              src={instagram}
              alt="instagram icono"
              style={{ marginLeft: "50px", marginRight: "20px" }}
            />
            Instagram
          </a>
        </div>

        <div className="main-container__btnComunidad">
          <a
            href="https://discord.com/invite/qGsshdwqEw"
            target="__blank"
            rel="noopener noreferrer">
            "No Compitas Haz Compitas"
          </a>
        </div>
        <div className="container-apps">
          <h3 className="apps-title dos">
            Encontrá mi LSVtools en las tiendas de App Store y GooglePlay
          </h3>

          <div className="main-container__btn-app-up celu">
            <a
              href="https://leonsonidovirtual.com/lsv-tools/"
              target="__blank"
              rel="noopener noreferrer">
              <img
                src={celu}
                alt="Web icono"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  marginBottom: "10px",
                }}
              />
            </a>
          </div>

          <div className="main-container__btn-app celu">
            <a
              href="https://apps.apple.com/co/app/lsvtools/id1581526543?l=en"
              target="__blank"
              rel="noopener noreferrer">
              <img
                src={apple}
                alt="icono Apple store"
                style={{
                  width: "70%",
                  margin: "0 auto",
                }}
              />
            </a>
          </div>
          <div className="main-container__btn-app celu">
            <a
              href="https://play.google.com/store/apps/details?id=com.leonsonidovirtual.lsvtools&hl=es_CO&gl=US"
              target="__blank"
              rel="noopener noreferrer">
              <img
                src={google}
                alt="icono Apple store"
                style={{
                  width: "70%",
                  margin: "0 auto",
                }}
              />
            </a>
          </div>
        </div>

        <div className="container-apps abajo">
          <h3 className="apps-title">Prueba mis Apps y Juegos</h3>

          <div className="main-container__btn-app-up">
            <a
              href="https://ridertecnico-lsv.com/"
              target="__blank"
              rel="noopener noreferrer">
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
              rel="noopener noreferrer">
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
              href="https://leonsonidovirtual.com/lsv-tools/"
              target="__blank"
              rel="noopener noreferrer">
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
              href="https://lsv-efecto-haas.vercel.app/"
              target="__blank"
              rel="noopener noreferrer">
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
              Actualmente estoy en Colombia, trabajo como Ingeniero de Monitores
              y Técnico de RF de Manuel Turizo desde 2019 a la fecha. Tambien
              trabajo con otros artistas, desarrollo aplicaciones para audio en
              vivo como "LSV Tools", "Efecto Haas", "Rider Técnico", juego de
              "Feedbacks", dicto cursos en mi plataforma online
              leonsonidovirtual.com y soy Lider en la comunidad de audio "No
              Compitas - Haz Compitas".
            </p>
            <p>Historia: </p>
            <p>
              <strong>2011:</strong> Me mudo a Capital Federal, Buenos Aires,
              Argentina para aprender sobre audio en vivo. A finales de ese año
              Amiel me consigue mi primer trabajo en una empresa profesional.
              Trabajo ahí por 3 meses.
            </p>
            <p>
              <strong>2012:</strong> Creo el canal de Youtube "León Tutoriales"
              donde compartía tutoriales de audio y guitarra. Empiezo a trabajar
              en una serie de TV como capturador de audio el cuál genera mis
              ingresos para mantenerme en la ciudad.
            </p>

            <p>
              <strong>2014:</strong> Empiezo a trabajar con constancia con
              Matías Martinez y dejo la serie de TV.
            </p>
            <p>
              <strong>2015:</strong> Comienzo a dar capacitaciones presenciales
              y creo la web "León Sonido Virtual".
            </p>
            <p>
              <strong>2016:</strong> Me alejo un poco de las empresas para
              trabajar como Ingeniero de monitores de varias bandas: "Dios Salve
              a la Reina", "The End tributo a Pink Floyd", "Benjamín Amadeo",
              entre otros.
            </p>
            <p>
              <strong>2017:</strong>A finales de éste año me mudo a Guatemala.
            </p>
            <p>
              <strong>2018:</strong> Nace mi app "LSV TOOLS" (Computadoras).
              Trabajo como Director del dpto de Audio en Blessure y con varias
              bandas como operador de Monitores y Sala: "Sthepanie Zelaya",
              "Viernes Verdes", "Cielos Abiertos", "The One Man Band", "Gabi
              Moreno", entre otras.
            </p>
            <p>
              <strong>2019:</strong> Comienzo a trabajar como Ingeniero de
              Monitores y Técnico de RF de Manuel Turizo.
            </p>
            <p>
              <strong>2020:</strong> Por la pandemia no trabajé en audio en vivo
              más que unos pocos shows. Nace la comunidad "No Compitas, Haz
              Compitas"
            </p>
            <p>
              <strong>2021:</strong> Desarrollo mis App "LSV Tools" (Celulares y
              tabletas). También desarrollé mi app "Rider Técnico LSV" para
              crear Stage Plots.
            </p>
            <p>
              <strong>2022:</strong> En transcurso... Generando contenido para
              mis redes y canal de Youtube, contando con el apoyo de múltiples
              marcas de audio en vivo.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <img src={mate} alt="mate" />
        <a
          href="https://www.instagram.com/leon_contreras_/?hl=es-la"
          rel="noopener noreferrer"
          target="__blank">
          Aplicación creada por @leon_contreras_
        </a>
      </footer>
    </div>
  );
}

export default App;
