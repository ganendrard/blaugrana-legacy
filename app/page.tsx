/* eslint-disable @next/next/no-img-element */

import Reveal from "./components/Reveal";

const legends = [
  {
    name: "Lionel Messi",
    era: "THE GREATEST",
    number: "10",
    image: "/images/messi-5.jpg",
    description: "A generation-defining talent who made the extraordinary look effortless.",
  },
  {
    name: "Xavi Hernández",
    era: "THE MIDFIELD MAESTRO",
    number: "6",
    image: "/images/xavi.jpg",
    description: "The rhythm, vision, and intelligence behind an unforgettable era.",
  },
  {
    name: "Andrés Iniesta",
    era: "THE ARTIST",
    number: "8",
    image: "/images/iniesta.jpg",
    description: "Elegance and composure in the moments that mattered most.",
  },
];

const timeline = [
  {
    year: "1899",
    title: "The Beginning",
    description:
      "FC Barcelona was founded by Joan Gamper and a group of football enthusiasts in the city of Barcelona.",
    label: "THE FOUNDATION",
  },
  {
    year: "1992",
    title: "A Dream in Wembley",
    description:
      "Barcelona won its first European Cup after defeating Sampdoria at Wembley Stadium.",
    label: "FIRST EUROPEAN CUP",
  },
  {
    year: "2009",
    title: "A Historic Six Trophies",
    description:
      "Under Pep Guardiola, Barcelona achieved an extraordinary six-title calendar year.",
    label: "THE SIXTUPLE",
  },
  {
    year: "2015",
    title: "A Second Treble",
    description:
      "Barcelona won La Liga, the Copa del Rey, and the UEFA Champions League in one season.",
    label: "TREBLE WINNERS",
  },
];

const gallery = [
  {
    image: "/images/barcelona-stadium.jpg",
    category: "THE HOME",
    title: "A Home Like No Other",
  },
  {
    image: "/images/barcelona-stadium-2.jpg",
    category: "THE STADIUM",
    title: "The Spirit of Camp Nou",
  },
  {
    image: "/images/messi-2.jpg",
    category: "THE LEGENDS",
    title: "Moments of Greatness",
  },
  {
    image: "/images/xavi-2.jpg",
    category: "THE MASTERS",
    title: "The Art of Football",
  },
  {
    image: "/images/iniesta-2.jpg",
    category: "THE MAGIC",
    title: "Elegance in Motion",
  },
  {
    image: "/images/barcelona-stadium-3.jpg",
    category: "THE PASSION",
    title: "United by the Colours",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="brand">
          B<span>.</span> LEGACY
        </a>

        <div className="nav-links">
          <a href="#about">Our Story</a>
          <a href="#legends">Legends</a>
          <a href="#timeline">Timeline</a>
          <a href="#gallery">Gallery</a>
          <a href="#legacy">Legacy</a>
        </div>

        <a href="#about" className="nav-cta">
          Més que un club ↗
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            EST. 1899 · BARCELONA, CATALONIA
          </p>

          <h1>
            MORE THAN
            <br />
            <span>A CLUB.</span>
          </h1>

          <p className="hero-description">
            A legacy written in passion.
            A history built by legends.
            A love that knows no boundaries.
          </p>

          <div className="hero-actions">
            <a href="#about" className="button-primary">
              Discover our story ↗
            </a>

            <a href="#legends" className="button-secondary">
              Meet the legends
            </a>
          </div>

          <div className="hero-caption">
            <span>UNA HISTÒRIA. UNA PASSIÓ.</span>
            <span>BARÇA, ALWAYS.</span>
          </div>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <span>1899</span>
          <div className="decoration-line" />
          <span>FCB</span>
        </div>
      </section>

      
      <section id="about" className="about-section">
        <Reveal delay={0.1}>
          <p className="eyebrow">MORE THAN FOOTBALL</p>
        </Reveal>

        <Reveal delay={0.2}>
          <h2>
            One club.
            <br />
            <span>Countless emotions.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p>
          Born in Barcelona in 1899, FC Barcelona represents
          more than a game. It is a symbol of identity,
          creativity, courage, and a philosophy passed
          from one generation to the next.
          </p>
        </Reveal>
      </section>



      
<section id="statistics" className="statistics-section">
  <Reveal delay={0.1}>
    <div className="statistics-heading">
      <p className="eyebrow">THE NUMBERS BEHIND THE LEGACY</p>
      <h2>
        A legacy measured
        <br />
        <span>in greatness.</span>
      </h2>
      <p className="statistics-description">
        More than a century of history, identity, and unforgettable
        moments that shaped the world of football.
      </p>
    </div>
  </Reveal>

  <div className="statistics-grid">
    <Reveal delay={0.1}>
      <article className="stat-card">
        <span className="stat-label">ESTABLISHED</span>
        <p className="stat-number">1899</p>
        <h3>Year Founded</h3>
        <p className="stat-note">Born in Barcelona, Catalonia.</p>
      </article>
    </Reveal>

    <Reveal delay={0.2}>
      <article className="stat-card">
        <span className="stat-label">OUR HISTORY</span>
        <p className="stat-number">125<span>+</span></p>
        <h3>Years of History</h3>
        <p className="stat-note">A legacy across generations.</p>
      </article>
    </Reveal>

    <Reveal delay={0.3}>
      <article className="stat-card">
        <span className="stat-label">THE GAME</span>
        <p className="stat-number">11</p>
        <h3>Players per Side</h3>
        <p className="stat-note">One team, one shared purpose.</p>
      </article>
    </Reveal>

    <Reveal delay={0.4}>
      <article className="stat-card">
        <span className="stat-label">OUR IDENTITY</span>
        <p className="stat-number">1</p>
        <h3>Club. One Identity.</h3>
        <p className="stat-note">Més que un club.</p>
      </article>
    </Reveal>
  </div>
</section>



<section id="legends" className="legends-section">
  <div className="section-heading">
    <div>
      <p className="eyebrow">THE IMMORTALS</p>
      <h2>Legends of Barça.</h2>
    </div>
    <span>1899 — FOREVER</span>
  </div>

  <div className="legends-grid">
    {legends.map((legend) => (
      <article className="legend-card" key={legend.name}>
        <img
          className="legend-image"
          src={legend.image}
          alt={legend.name}
        />

        <div className="legend-overlay" />

        <span className="legend-number">
          {legend.number}
        </span>

        <div className="legend-info">
          <p className="legend-era">{legend.era}</p>
          <h3>{legend.name}</h3>
          <p className="legend-description">
            {legend.description}
          </p>
        </div>

        <span className="legend-arrow" aria-hidden="true">
          ↗
        </span>
      </article>
    ))}
  </div>
</section>

<section id="timeline" className="timeline-section">
  <div className="section-heading">
    <div>
      <p className="eyebrow">A JOURNEY THROUGH TIME</p>
      <h2>Moments that made history.</h2>
    </div>
    <span>1899 — FOREVER</span>
  </div>

  <div className="timeline-list">
    {timeline.map((item, index) => (
      <article className="timeline-item" key={item.year}>
        <div className="timeline-marker">
          <span>{String(index + 1).padStart(2, "0")}</span>
        </div>

        <div className="timeline-content">
          <p className="timeline-label">{item.label}</p>
          <span className="timeline-year">{item.year}</span>
          <h3>{item.title}</h3>
          <p className="timeline-description">
            {item.description}
          </p>
        </div>
      </article>
    ))}
  </div>
</section>
<section id="gallery" className="gallery-section">
  <div className="section-heading">
    <div>
      <p className="eyebrow">THE VISUAL ARCHIVE</p>
      <h2>Captured in history.</h2>
    </div>
    <span>MEMORIES THAT LAST FOREVER</span>
  </div>

  <div className="gallery-grid">
    {gallery.map((item, index) => (
      <article className="gallery-card" key={item.image}>
        <img
          src={item.image}
          alt={item.title}
          className="gallery-image"
        />

        <div className="gallery-overlay" />

        <span className="gallery-index">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="gallery-info">
          <p>{item.category}</p>
          <h3>{item.title}</h3>
        </div>

        <span className="gallery-arrow">↗</span>
      </article>
    ))}
  </div>
</section>

      <footer id="legacy" className="footer">
        <a href="#" className="brand">
          B<span>.</span> LEGACY
        </a>
        <p>An independent fan-made tribute to FC Barcelona.</p>
        <span>VISCA EL BARÇA.</span>
      </footer>
    </main>
  );
}
