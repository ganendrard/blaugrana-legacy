

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
        <p className="eyebrow">MORE THAN FOOTBALL</p>
        <h2>
          One club.
          <br />
          <span>Countless emotions.</span>
        </h2>

        <p>
          Born in Barcelona in 1899, FC Barcelona represents
          more than a game. It is a symbol of identity,
          creativity, courage, and a philosophy passed
          from one generation to the next.
        </p>
      </section>

      
      <section id="statistics" className="statistics-section">
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

        <div className="statistics-grid">
          <article className="stat-card">
            <span className="stat-label">ESTABLISHED</span>
            <p className="stat-number">1899</p>
            <h3>Year Founded</h3>
            <p className="stat-note">Born in Barcelona, Catalonia.</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">OUR HISTORY</span>
            <p className="stat-number">125<span>+</span></p>
            <h3>Years of History</h3>
            <p className="stat-note">A legacy across generations.</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">THE GAME</span>
            <p className="stat-number">11</p>
            <h3>Players per Side</h3>
            <p className="stat-note">One team, one shared purpose.</p>
          </article>

          <article className="stat-card">
            <span className="stat-label">OUR IDENTITY</span>
            <p className="stat-number">1</p>
            <h3>Club. One Identity.</h3>
            <p className="stat-note">Més que un club.</p>
          </article>
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
