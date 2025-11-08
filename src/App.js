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
import school from "./school.png";
import dante from "./dante.png";
import stageplot from "./LSVSTAGEPLOT.png";
import lsvtools from "./lsvtools9.png";
import apple from "./apple.png";
import google from "./google.png";
import tiktok from "./tiktok.png";
import patreon from "./patreon.png";
import bpm from "./bpm.png";
import cuelist from "./cuelist.png";
import setlist from "./setlist.png";
import rta from "./rta.png";
import testlr from "./testlr.png";
import stage from "./stage.png";
import podcastleonsonidovirtual from "./podcastleonsonidovirtual.png";
import ReactPlayer from "react-player";
import { useState } from "react";


import foto from "./fotoleon.png";

// --- DATA: centralizamos todo acá para no repetir markup ---
const storeLinks = {
  apple: "https://apps.apple.com/co/app/lsvtools/id1581526543?l=en",
  google:
    "https://play.google.com/store/apps/details?id=com.leonsonidovirtual.lsvtools&hl=es_CO&gl=US",
};

const sections = [
  {
    title: "Apps & Herramientas",
    items: [
      {
        label: "LSV StagePlot",
        hrefWeb: "https://leonsonidovirtualpro.com/lsvstageplot.html",
        icon: "🎛️",
        iconSrc: stageplot,
      },
      {
        label: "APP LSV Tools",
        hrefWeb: "https://leonsonidovirtualpro.com/lsvtools/index.html",
        icon: "🧰",
        iconSrc: lsvtools,
      },
      {
        label: "APP Test L y R",
        hrefWeb: "https://apps.apple.com/co/app/lsv-generador/id6737373130",
        icon: "🧰",
        iconSrc: testlr,
      },
      {
        label: "APP LSV RTA",
        hrefWeb: "https://apps.apple.com/co/app/lsv-rta/id6743376725",
        icon: "🧰",
        iconSrc: rta,
      },
      {
        label: "APP LSV SetList",
        hrefWeb: "https://apps.apple.com/co/app/lsv-setlist/id6743781110",
        icon: "🧰",
        iconSrc: setlist,
      },
      {
        label: "APP LSV CueList",
        hrefWeb: "https://apps.apple.com/co/app/lsv-cuelist/id6744004350",
        icon: "📝",
        iconSrc: cuelist,
      },
      {
        label: "APP LSV Tempo",
        hrefWeb: "https://apps.apple.com/co/app/lsv-tempo/id6743356806",
        icon: "⏰",
      },
      {
        label: "Conversor RF Tiny SA",
        hrefWeb: "https://leonsonidovirtualpro.com/conversortinysa/tinysa.html",
        icon: "📻",
      },
      {
        label: "Recall Sheet",
        hrefWeb: "https://leonsonidovirtualpro.com/setStudio/",
        icon: "📋",
      },
      {
        label: "Efecto Haas",
        hrefWeb: "https://lsv-efecto-haas.vercel.app/",
        icon: "🧠",
      },
      {
        label: "Entrenamiento auditivo",
        hrefWeb: "https://ridertecnico-lsv.com/feedbacks",
        icon: "🏋️",
      },
    ],
  },
  {
    title: "Cursos",
    items: [
      {
        label: "Curso de RF",
        hrefWeb: "https://leonsonidovirtualpro.com/cursos/cursoderadiofrecuencia.html",
        icon: "📡",
      }
    ],
  },
  {
    title: "Música para optimizar sistemas",
    items: [
      {
        label: "Recomendaciones musiscales",
        hrefWeb: "https://leonsonidovirtualpro.com/musica.html",
        icon: "🎵",
      }
    ],
  },
    {
    title: "Lista de herramientas para el sonidista",
    items: [
      {
        label: "Recomendaciones de herramientas",
        hrefWeb: "https://leonsonidovirtualpro.com/herramientas.html",
        icon: "🎶",
      },

    ],
  },
  {
    title: "Redes",
    items: [
      {
        label: "Mi Web",
        hrefWeb: "https://leonsonidovirtualpro.com",
        icon: "🌎",
        iconSrc: web,
      },
      {
        label: "Podcast",
        hrefWeb: "https://anchor.fm/leonsonidovirtual",
        icon: "🎙️",
        iconSrc: podcastleonsonidovirtual,
      },
      {
        label: "Instagram",
        hrefWeb: "https://www.instagram.com/leonsonidovirtual/?hl=es-la",
        deeplink: "instagram://user?username=leonsonidovirtual",
        icon: "📸",
        iconSrc: instagram,
      },
      {
        label: "YouTube",
        hrefWeb:
          "https://www.youtube.com/user/focklorepatagonico/videos",
        // El deeplink de YouTube real cambia según el canal; dejá el web si no tenés el ID
        icon: "▶️",
        iconSrc: youtube,
      },
      {
        label: "TikTok",
        hrefWeb: "https://www.tiktok.com/@leonsonidovirtual",
        deeplink: "tiktok://user/@leonsonidovirtual",
        icon: "🎵",
        iconSrc: tiktok,
      },
      {
        label: "Facebook",
        hrefWeb: "https://www.facebook.com/LeonSonidoVirtual",
        icon: "👍",
        iconSrc: facebook,
      },
    ],
  },
  {
    title: "Educación Online",
    items: [
      {
        label: "Mi Escuela",
        hrefWeb: "https://www.patreon.com/c/leonsonidovirtual/about",
        icon: "🎓",
        iconSrc: patreon,
      },
      {
        label: "Entrenador oficial Dante (Audinate)",
        hrefWeb: "https://www.getdante.com/meet-dante/partners/dante-certified-training-partners/",
        icon: "🎓",
        iconSrc: dante,
      },
      {
        label: "Amigo Shure",
        hrefWeb: "https://p.shure.com/amigos-shure",
        icon: "🎤",
      },
    ],
  },
  {
    title: "Mi Diario de Gira",
    items: [
      {
        label: "Agenda 'Diario de Gira'",
        hrefWeb: "https://leonsonidovirtualpro.com/diariodegira.html",
        icon: "📓",
      },

    ],
  },
];

// --- BIO (texto mejorado y cronología) ---
const bioIntro = `Actualmente estoy en Colombia. Trabajo como Ingeniero de Monitores y
Técnico de RF de Manuel Turizo desde 2019. También colaboro con otros artistas y
desarrollo aplicaciones para audio en vivo como "LSV Tools" y
"LSV StagePlot", además del juego de "Feedbacks". Dicto cursos en mi plataforma
online y soy entrenador oficial de "Dante" de Audinate .`;

const bioTimeline = [
  {
    year: "2011",
    text:
      "Me mudo a Capital Federal (Buenos Aires) para formarme en audio en vivo. A fines de ese año, Amiel me consigue mi primer trabajo en una empresa profesional (3 meses).",
  },
  {
    year: "2012",
    text:
      "Creo el canal de YouTube “León Tutoriales”, donde comparto tutoriales de audio y guitarra. Empiezo a trabajar en una serie de TV como capturador de audio, que me permite sostenerme en la ciudad.",
  },
  {
    year: "2014",
    text: "Empiezo a trabajar con constancia con Matías Martinez y dejo la serie de TV.",
  },
  {
    year: "2015",
    text:
      "Comienzo a dar capacitaciones presenciales en Buenos Aires y creo la web “León Sonido Virtual”.",
  },
  {
    year: "2016",
    text:
      "Me enfoco en trabajar como Ingeniero de Monitores con varias bandas: “Dios Salve a la Reina”, “The End (tributo a Pink Floyd)”, “Benjamín Amadeo”, entre otros. Sigo dando capacitaciones por muchas provincias argentinas.",
  },
  {
    year: "2017",
    text:
      "Doy una capacitación en Bolivia y, a fines de ese año, me mudo a Guatemala.",
  },
  {
    year: "2018",
    text:
      "Nace mi app “LSV Tools” (Computadoras). Trabajo como Director del dpto. de Audio en Blessure y con varias bandas como operador de Monitores y Sala: “Sthepanie Zelaya”, “Viernes Verdes”, “Cielos Abiertos”, “The One Man Band”, “Gabi Moreno”, entre otras. Brindo capacitaciones en Guatemala y también en Ecuador.",
  },
  {
    year: "2019",
    text:
      "Comienzo a trabajar como Ingeniero de Monitores y Técnico de RF de Manuel Turizo.",
  },
  {
    year: "2020",
    text:
      "Por la pandemia casi no trabajo en vivo. Nace la comunidad “No Compitas, Haz Compitas”.",
  },
  {
    year: "2021",
    text:
      "Desarrollo mis apps “LSV Tools” (celulares y tabletas). También desarrollo “Rider Técnico LSV” para crear Stage Plots.",
  },
  {
    year: "2022",
    text:
      "Empiezo a subir un video cada lunes a YouTube. Mejoro LSV Tools y la herramienta de Stage Plots, y consolido alianzas con marcas de la industria para traer más contenido.",
  },
  {
    year: "2025",
    text:
      "Me mencionan como entrenador oficial de Dante (Audinate), la solución más popular de audio sobre IP. Sigo desarrollando más apps gratuitas para audio en vivo y amplío el material educativo en mi escuela online para construir la plataforma más completa para sonidistas.",
  },
];


// --- Helpers ---
function openDeeplinkOrWeb(hrefWeb, deeplink) {
  if (!deeplink) {
    window.open(hrefWeb, "_blank", "noopener,noreferrer");
    return;
  }
  // Intentar abrir la app; si no abre, caer al sitio
  const fallback = setTimeout(() => {
    window.open(hrefWeb, "_blank", "noopener,noreferrer");
  }, 650);
  window.location.href = deeplink;
  setTimeout(() => clearTimeout(fallback), 2000);
}

// --- Componentes atómicos ---
function LinkCard({ label, hrefWeb, deeplink, icon, iconSrc }) {
  return (
    <button
      className="linkcard"
      onClick={() => openDeeplinkOrWeb(hrefWeb, deeplink)}
      aria-label={label}
    >
      <span className="linkcard__icon" aria-hidden>
        {iconSrc ? (
          <img
            src={iconSrc}
            alt=""
            className="linkcard__icon-img"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span>{icon}</span>
        )}
      </span>
      <span className="linkcard__label">{label}</span>
      <span className="linkcard__chev" aria-hidden>
        ›
      </span>
    </button>
  );
}


function StoreBadges() {
  return (
    <div className="stores">
      <a
        className="store"
        href={storeLinks.apple}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar LSV Tools en App Store"
      >
        <img src={apple} alt="" loading="lazy" />
      </a>
      <a
        className="store"
        href={storeLinks.google}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar LSV Tools en Google Play"
      >
        <img src={google} alt="" loading="lazy" />
      </a>
    </div>
  );
}

function Bio() {
  const [expanded, setExpanded] = useState(false);
  const items = expanded ? bioTimeline : bioTimeline.slice(0, 3); // muestra los 6 primeros y luego “ver más”

  return (
    <>
      <p className="about__txt">{bioIntro}</p>
      <h3 className="timeline__heading">Historia</h3>
      <ul className="timeline" role="list">
        {items.map((it) => (
          <li className="timeline__item" key={it.year}>
            <span className="timeline__year">{it.year}:</span>
            <span className="timeline__text">{it.text}</span>
          </li>
        ))}
      </ul>
      <div className="timeline__actions">
        <button className="btn-link" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </>
  );
}


export default function App() {
  return (
    <div className="page">
      {/* Fondo suavizado */}
      <img className="bg" src={fondo} alt="" aria-hidden />

      <header className="hero">
        <img className="hero__logo" src={logo} alt="Leonsonidovirtual" />
        <h1 className="hero__title">
          Todas mis redes, <span className="nowrap">apps</span> y{" "}
          <span className="nowrap">cursos</span>
        </h1>

        {/* CTAs con miniatura fuera del botón */}
<div className="hero__cta hero__cta--withthumbs">
  <div className="ctaTile">
    <a
      className="ctaThumb"
      href="https://leonsonidovirtualpro.com/lsvstageplot.html"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir LSV StagePlot"
    >
      <img src={stage} alt="" loading="lazy" decoding="async" />
    </a>
    <a
      className="btn btn--primary btn--small"
      href="https://leonsonidovirtualpro.com/lsvstageplot.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Usar LSV StagePlot
    </a>
  </div>

  <div className="ctaTile">
    <a
      className="ctaThumb"
      href="https://leonsonidovirtualpro.com/lsvtools/index.html"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir LSV Tools"
    >
      <img src={lsvtools} alt="" loading="lazy" decoding="async" />
    </a>
    <a
      className="btn btn--small"
      href="https://leonsonidovirtualpro.com/lsvtools/index.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Descargar LSV Tools
    </a>
  </div> 

  <div className="ctaTile">
    <a
      className="ctaThumb"
      href="https://www.patreon.com/c/leonsonidovirtual/about"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir Escuela Online"
    >
      <img src={school} alt="" loading="lazy" decoding="async" />
    </a>
    <a
      className="btn btn--small"
      href="https://www.patreon.com/c/leonsonidovirtual/about"
      target="_blank"
      rel="noopener noreferrer"
    >
      Mi Escuela Online
    </a>
  </div>
</div>


      </header>

      <main className="nav" role="navigation" aria-label="Secciones de enlaces">
        {/* Bloque destacado: badges de tiendas */}
        <section className="section">
          <h2 className="section__title">LSV Tools en tu celular</h2>
          <StoreBadges />
        </section>

        {sections.map((sec) => (
          <section key={sec.title} className="section">
            <h2 className="section__title">{sec.title}</h2>
            <div className="section__grid">
              {sec.items.map((it) => (
                <LinkCard key={it.label} {...it} />
              ))}
            </div>
          </section>
        ))}

        {/* Sobre mí (compacto) */}
        <section className="section about">
  <h2 className="section__title">Sobre mí</h2>
  <img className="about__img" src={foto} alt="León" loading="lazy" />
  <Bio />
  <a
    className="btn"
    href="https://leonsonidovirtualpro.com/sobre/sobre.html"
    target="_blank"
    rel="noopener noreferrer"
  >
    Conocé más
  </a>
</section>

      </main>

      {/* Dock inferior fijo para accesos rápidos */}
      <div className="dock" role="navigation" aria-label="Accesos rápidos">
        <a
          href="https://leonsonidovirtualpro.com/lsvstageplot.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          APP StagePlot
        </a>
        <a href="https://leonsonidovirtualpro.com/lsvtools/index.html" target="_blank" rel="noopener noreferrer">
          LSV Tools
        </a>
        <a
          href="https://www.patreon.com/c/leonsonidovirtual/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escuela
        </a>
      </div>

      <footer className="footer">
        <small>App por @leonsonidovirtual · 2025</small>
      </footer>
    </div>
  );
}
