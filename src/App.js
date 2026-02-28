import "./App.css";
import logo from "./logo.png";
import instagram from "./instagram.png";
import youtube from "./youtube.png";
import facebook from "./facebook.png";
import web from "./web.png";
import tiktok from "./tiktok.png";
import apple from "./apple.png";
import google from "./google.png";
import patreon from "./patreon.png";
import stageplot from "./LSVSTAGEPLOT.png";
import lsvtools from "./lsvtools9.png";
import testlr from "./testlr.png";
import rta from "./rta.png";
import setlist from "./setlist.png";
import cuelist from "./cuelist.png";
import podcast from "./podcastleonsonidovirtual.png";
import portrait from "./fotoleon-optimized.jpg";
import { useState } from "react";

const courses = [
  {
    label: "Curso de RF",
    href: "https://leonsonidovirtualpro.com/cursos/cursoderadiofrecuencia.html",
    icon: "📡",
  },
  {
    label: "Curso de Optimizacion de sistemas",
    href: "https://leonsonidovirtualpro.com/cursos/optimizaciondesistemas.html",
    icon: "🔊",
  },
  {
    label: "Curso de Yamaha CL5",
    href: "https://leonsonidovirtualpro.com/cursos/cursodeyamahacl5.html",
    icon: "🎛️",
  },
  {
    label: "Curso de Playback para show en vivo",
    href: "https://leonsonidovirtualpro.com/cursos/cursodeplayback.html",
    icon: "💿",
  },
  {
    label: "Curso de Mezcla en vivo",
    href: "https://leonsonidovirtualpro.com/cursos/cursodeoperadordeaudio.html",
    icon: "🎚️",
  },
  {
    label: "Curso de Dante (Audinate)",
    href: "https://leonsonidovirtualpro.com/certificaciondante.html",
    icon: "🧠",
  },
  {
    label: "Cursos presenciales en tu ciudad",
    href: "https://leonsonidovirtualpro.com/capacitacionespresenciales.html",
    icon: "🏙️",
  },
];

const appHighlights = [
  {
    label: "LSV StagePlot",
    href: "https://leonsonidovirtualpro.com/lsvstageplot.html",
    image: stageplot,
  },
  {
    label: "LSV Tools",
    href: "https://leonsonidovirtualpro.com/lsvtools/index.html",
    image: lsvtools,
  },
];

const appTools = [
  {
    label: "APP Test L y R",
    href: "https://apps.apple.com/co/app/lsv-generador/id6737373130",
    image: testlr,
  },
  {
    label: "APP LSV RTA",
    href: "https://apps.apple.com/co/app/lsv-rta/id6743376725",
    image: rta,
  },
  {
    label: "APP LSV SetList",
    href: "https://apps.apple.com/co/app/lsv-setlist/id6743781110",
    image: setlist,
  },
  {
    label: "APP LSV CueList",
    href: "https://apps.apple.com/co/app/lsv-cuelist/id6744004350",
    image: cuelist,
  },
  {
    label: "APP LSV Tempo",
    href: "https://apps.apple.com/co/app/lsv-tempo/id6743356806",
    icon: "⏰",
  },
  {
    label: "Conversor RF Tiny SA",
    href: "https://leonsonidovirtualpro.com/conversortinysa/tinysa.html",
    icon: "📻",
  },
  {
    label: "Recall Sheet",
    href: "https://leonsonidovirtualpro.com/setStudio/",
    icon: "📋",
  },
  {
    label: "Efecto Haas",
    href: "https://lsv-efecto-haas.vercel.app/",
    icon: "🧩",
  },
  {
    label: "Entrenamiento auditivo",
    href: "https://ridertecnico-lsv.com/feedbacks",
    icon: "🎧",
  },
];

const community = [
  {
    label: "Mi Escuela (Patreon)",
    href: "https://www.patreon.com/c/leonsonidovirtual/about",
    icon: "🎓",
    image: patreon,
  },
  {
    label: "Trabajemos juntos",
    href: "https://leonsonidovirtualpro.com/colaboraciones.html",
    icon: "🤝",
  },
  {
    label: "Agenda Diario de Gira",
    href: "https://leonsonidovirtualpro.com/diariodegira.html",
    icon: "📓",
  },
];

const socials = [
  {
    label: "Web",
    href: "https://leonsonidovirtualpro.com",
    image: web,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/leonsonidovirtual/?hl=es-la",
    image: instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/focklorepatagonico/videos",
    image: youtube,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@leonsonidovirtual",
    image: tiktok,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/LeonSonidoVirtual",
    image: facebook,
  },
  {
    label: "Podcast",
    href: "https://anchor.fm/leonsonidovirtual",
    image: podcast,
  },
];

const stores = {
  apple: "https://apps.apple.com/co/app/lsv-tools-3/id6744276712",
  google:
    "https://play.google.com/store/apps/details?id=com.leonsonidovirtual.lsvtools&hl=es_CO&gl=US",
};

const focusTopics = ["RF", "Mezcla", "Sistemas", "Yamaha CL5", "Dante"];

const bioIntro = `Actualmente estoy en Colombia. Trabajo como Ingeniero de Monitores y Tecnico de RF de Manuel Turizo desde 2019. Tambien colaboro con otros artistas y desarrollo aplicaciones para audio en vivo como LSV Tools y LSV StagePlot, ademas del juego de Feedbacks. Dicto cursos en mi plataforma online y soy entrenador oficial de Dante de Audinate.`;

const bioTimeline = [
  {
    year: "2011",
    text: "Me mudo a Buenos Aires para formarme en audio en vivo y consigo mi primer trabajo en una empresa profesional.",
  },
  {
    year: "2012",
    text: "Creo el canal de YouTube Leon Tutoriales y empiezo a trabajar en una serie de TV como capturador de audio.",
  },
  {
    year: "2014",
    text: "Empiezo a trabajar con constancia con Matias Martinez y dejo la serie de TV.",
  },
  {
    year: "2015",
    text: "Comienzo a dar capacitaciones presenciales y creo la web Leon Sonido Virtual.",
  },
  {
    year: "2016",
    text: "Me enfoco como Ingeniero de Monitores con varias bandas y doy capacitaciones en distintas provincias.",
  },
  {
    year: "2017",
    text: "Doy una capacitacion en Bolivia y luego me mudo a Guatemala.",
  },
  {
    year: "2018",
    text: "Nace LSV Tools (computadoras) y trabajo con artistas y eventos en Guatemala y Ecuador.",
  },
  {
    year: "2019",
    text: "Comienzo a trabajar como Ingeniero de Monitores y Tecnico de RF de Manuel Turizo.",
  },
  {
    year: "2020",
    text: "Nace la comunidad No Compitas, Haz Compitas en plena pandemia.",
  },
  {
    year: "2021",
    text: "Desarrollo mis apps LSV Tools para celulares y tabletas y Rider Tecnico LSV.",
  },
  {
    year: "2022",
    text: "Publico un video semanal en YouTube y mejoro herramientas y alianzas del ecosistema.",
  },
  {
    year: "2025",
    text: "Soy mencionado como entrenador oficial de Dante (Audinate) y amplio la plataforma educativa.",
  },
];

function LinkPill({ label, href, icon, image }) {
  return (
    <a
      className="pill"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className="pill__icon" aria-hidden>
        {image ? (
          <img src={image} alt="" loading="lazy" decoding="async" />
        ) : (
          <span>{icon}</span>
        )}
      </span>
      <span className="pill__label">{label}</span>
      <span className="pill__go" aria-hidden>
        ↗
      </span>
    </a>
  );
}

function SectionCard({ title, children, subtitle }) {
  return (
    <section className="glass-card">
      <div className="glass-card__head">
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function BioSection() {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? bioTimeline : bioTimeline.slice(0, 4);

  return (
    <SectionCard title="Mi BIO" subtitle="Historia y trayectoria">
      <div className="bio">
        <img
          className="bio__photo"
          src={portrait}
          alt="Leon Sonido Virtual"
          loading="lazy"
          decoding="async"
        />
        <p className="bio__intro">{bioIntro}</p>
        <ul className="bio__timeline">
          {visibleItems.map((item) => (
            <li key={item.year} className="bio__item">
              <span className="bio__year">{item.year}</span>
              <span className="bio__text">{item.text}</span>
            </li>
          ))}
        </ul>
        <button className="bio__toggle" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Ver menos" : "Ver mas"}
        </button>
      </div>
    </SectionCard>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="app-shell">
        <header className="topbar" aria-label="Encabezado">
          <div className="topbar__welcome">
            <p className="topbar__hello">Hola, soy Leon</p>
            <p className="topbar__sub">Bienvenido a mis cursos y herramientas</p>
          </div>
        </header>

        <section className="hero-panel" aria-label="Presentacion principal">
          <img
            className="hero-panel__portrait"
            src={portrait}
            alt="Leon Sonido Virtual"
            loading="lazy"
            decoding="async"
          />
          <div className="hero-panel__overlay" aria-hidden />
          <div className="hero-panel__content">
            <img className="hero-panel__logo" src={logo} alt="Leon Sonido Virtual" />
            <h1>Cursos de Audio en Vivo</h1>
            <p>
              RF, mezcla en vivo, optimizacion de sistemas, Yamaha CL5, Dante y
              herramientas para sonidistas.
            </p>
            <ul className="topic-list" aria-label="Temas principales">
              {focusTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </div>
        </section>

        <main className="content" aria-label="Contenido principal">
          <SectionCard
            title="Cursos principales"
            subtitle="Formacion practica para audio en vivo"
          >
            <div className="pill-grid">
              {courses.map((course) => (
                <LinkPill key={course.label} {...course} />
              ))}
            </div>
          </SectionCard>

          <SectionCard
            title="Apps y herramientas"
            subtitle="StagePlot, LSV Tools y utilidades rapidas"
          >
            <div className="highlight-grid">
              {appHighlights.map((item) => (
                <a
                  key={item.label}
                  className="highlight"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={item.image} alt="" loading="lazy" decoding="async" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <div className="pill-grid">
              {appTools.map((tool) => (
                <LinkPill key={tool.label} {...tool} />
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Escuela y colaboraciones">
            <div className="pill-grid">
              {community.map((item) => (
                <LinkPill key={item.label} {...item} />
              ))}
            </div>
          </SectionCard>

          <SectionCard title="Redes">
            <div className="social-grid">
              {socials.map((social) => (
                <a
                  key={social.label}
                  className="social-chip"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={social.image} alt="" loading="lazy" decoding="async" />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="LSV Tools en tu celular">
            <div className="store-grid">
              <a
                className="store-badge"
                href={stores.apple}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar LSV Tools en App Store"
              >
                <img src={apple} alt="App Store" loading="lazy" decoding="async" />
              </a>
              <a
                className="store-badge"
                href={stores.google}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Descargar LSV Tools en Google Play"
              >
                <img src={google} alt="Google Play" loading="lazy" decoding="async" />
              </a>
            </div>
          </SectionCard>

          <BioSection />
        </main>

        <nav className="bottom-dock" aria-label="Accesos rapidos">
          <a
            href="https://leonsonidovirtualpro.com/lsvstageplot.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            StagePlot
          </a>
          <a
            href="https://leonsonidovirtualpro.com/lsvtools/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            LSV Tools
          </a>
          <a
            href="https://www.patreon.com/c/leonsonidovirtual/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mi Escuela
          </a>
        </nav>

        <footer className="footer">
          <small>Leon Sonido Virtual · Cursos de audio en vivo</small>
        </footer>
      </div>
    </div>
  );
}
