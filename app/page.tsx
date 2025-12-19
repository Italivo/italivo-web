export default function Home() {
  return (
    <main>
      {/* <!-- Mobile Menu --> */}
      <div className="mobile-menu">
        <div className="mobile-menu-content">
          <a href="#about">About</a>
          <a href="#method">Method</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="btn btn-primary">
            Book your free trial lesson
          </a>
        </div>
      </div>

      {/* <!-- Hero Section --> */}
      <header className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>
              Learn Italian
              <br />
              with passion
            </h1>
            <p className="hero-subtitle">
              Courses for all levels, from complete beginners to advanced
              speakers
            </p>
            <a href="#contact" className="btn btn-primary btn-large">
              Book your free trial lesson
            </a>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=700&fit=crop&crop=face"
              alt="Happy Italian student"
            />
          </div>
        </div>
      </header>

      {/* <!-- About Section --> */}
      <section id="about" className="about">
        <div className="container about-container">
          <div className="about-content">
            <h2>Chi siamo</h2>
            <p className="about-intro">
              Italivo è una scuola online che unisce metodo comunicativo,
              mentoring personalizzato e immersione culturale. Aiutiamo studenti
              a parlare italiano con sicurezza.
            </p>
            <ul className="about-features">
              <li>Insegnanti qualificati e madrelingua</li>
              <li>Piani di studio personalizzati</li>
              <li>Supporto continuo tra le lezioni</li>
            </ul>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=350&fit=crop"
              alt="Students learning together"
            />
          </div>
        </div>
      </section>

      {/* <!-- Method Section --> */}
      <section id="method" className="method">
        <div className="container">
          <h2>Il nostro metodo</h2>
          <p className="section-intro">
            Our approach combines personalized coaching with a supportive
            learning community. We focus on speaking from the first lesson and
            provide extra resources for independent study.
          </p>

          <div className="method-grid">
            <div className="method-card">
              <span className="method-number green">1</span>
              <h3>Comunicazione prima di tutto</h3>
              <p>
                Conversazioni reali, e situazioni pratiche, contesti
                significativi
              </p>
            </div>
            <div className="method-card">
              <span className="method-number rust">2</span>
              <h3>Cultura & contesto</h3>
              <p>
                Lingua + comprensione di usi, costumi e vita italiana
                contemporanea
              </p>
            </div>
            <div className="method-card">
              <span className="method-number rust">3</span>
              <h3>Mentoring personalizzato</h3>
              <p>Piani individuali, feedback audio, e tracking dei progressi</p>
            </div>
          </div>

          <div className="method-image">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face"
              alt="Italian teacher in session"
            />
          </div>
        </div>
      </section>

      {/* <!-- Paths Section --> */}
      <section className="paths">
        <div className="container">
          <h2>Find the right path for you</h2>
          <div className="paths-grid">
            <div className="path-card">
              <div className="path-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4z"
                    fill="#2D5A4A"
                  />
                  <path
                    d="M18 20c0-3.314 2.686-6 6-6s6 2.686 6 6"
                    stroke="#C25B3F"
                    strokeWidth="2"
                  />
                  <circle cx="24" cy="28" r="4" fill="#C25B3F" />
                </svg>
              </div>
              <h3>Italian Survival</h3>
              <p>Essential phrases and functions for basic interactions</p>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 8l4 8 8 2-6 6 2 8-8-4-8 4 2-8-6-6 8-2z"
                    fill="#C25B3F"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="16"
                    stroke="#2D5A4A"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3>Italian for Art & Culture</h3>
              <p>Explore Italy through art, history and traditions</p>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="12"
                    width="32"
                    height="24"
                    rx="2"
                    fill="#E8B84A"
                  />
                  <line
                    x1="8"
                    y1="20"
                    x2="40"
                    y2="20"
                    stroke="#2D5A4A"
                    strokeWidth="2"
                  />
                  <line
                    x1="8"
                    y1="28"
                    x2="40"
                    y2="28"
                    stroke="#2D5A4A"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Fast Conversation Italian</h3>
              <p>Unlock your ability to converse naturally</p>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="8"
                    width="28"
                    height="32"
                    rx="2"
                    fill="#F5E6D3"
                  />
                  <path
                    d="M16 16h16M16 24h16M16 32h10"
                    stroke="#C25B3F"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Italian for Storytellers</h3>
              <p>Small steps lead to big dreams</p>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="24" cy="16" r="8" fill="#C25B3F" />
                  <path
                    d="M12 40c0-6.627 5.373-12 12-12s12 5.373 12 12"
                    fill="#2D5A4A"
                  />
                </svg>
              </div>
              <h3>Italian for Medical & Nursing</h3>
              <p>Terminology and communication for healthcare professionals</p>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="8" fill="#C25B3F" />
                  <circle cx="28" cy="28" r="8" fill="#2D5A4A" />
                </svg>
              </div>
              <h3>Italian for Work & Business</h3>
              <p>Professional communication and business Italian</p>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 8l8 16H16l8-16z" fill="#2D5A4A" />
                  <path d="M16 28l8 12 8-12H16z" fill="#C25B3F" />
                </svg>
              </div>
              <h3>Exam Preparation</h3>
              <p>CILS, CELI, PLIDA and other official certifications</p>
            </div>
            <div className="path-card">
              <div className="path-icon">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="8"
                    y="16"
                    width="32"
                    height="20"
                    rx="2"
                    fill="#C25B3F"
                  />
                  <circle cx="24" cy="26" r="6" fill="#F5E6D3" />
                </svg>
              </div>
              <h3>Erasmus Preparation</h3>
              <p>Get ready for your Italian adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features Section --> */}
      <section className="features">
        <div className="container features-container">
          <div className="features-content">
            <h2>More than just lessons</h2>
            <ul className="features-list">
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#C25B3F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Real-life simulations
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#C25B3F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Personalized materials
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#C25B3F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                On-demand support
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#C25B3F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Cultural immersion
              </li>
              <li>
                <svg className="check-icon" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#C25B3F"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Clear, structured programs
              </li>
            </ul>
          </div>
          <div className="features-image">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=400&fit=crop"
              alt="Student reading"
            />
          </div>
        </div>
      </section>

      {/* <!-- Packages Section --> */}
      <section id="packages" className="packages">
        <div className="container">
          <h2>Packages</h2>
          <div className="packages-grid">
            <div className="package-card">
              <div className="package-header">
                <h3>Light</h3>
              </div>
              <ul className="package-features">
                <li>2 live lessons/month</li>
                <li>Light support between lessons</li>
                <li>1 task/month</li>
                <li>Basic resources</li>
              </ul>
              <div className="package-price">
                <span className="price">€90–€110</span>
                <span className="period">/month</span>
              </div>
              <a href="#contact" className="btn btn-outline">
                Get started
              </a>
            </div>

            <div className="package-card featured">
              <div className="package-badge">Most popular</div>
              <div className="package-header">
                <h3>Premium</h3>
              </div>
              <ul className="package-features">
                <li>4 live lessons/month</li>
                <li>Full support between lessons</li>
                <li>Chat + 1 task/week</li>
                <li>Personalized resources</li>
                <li>Weekly feedback</li>
              </ul>
              <div className="package-price">
                <span className="price">€250–€300</span>
                <span className="period">/month</span>
              </div>
              <a href="#contact" className="btn btn-primary">
                Get started
              </a>
            </div>

            <div className="package-card vip">
              <div className="package-header">
                <h3>VIP Intensive</h3>
              </div>
              <ul className="package-features">
                <li>8 live lessons/month</li>
                <li>Continuous support</li>
                <li>Priority chat + 1 audio/day</li>
                <li>Unlimited text/email correction</li>
                <li>Exclusive resources</li>
                <li>2 weekly challenges</li>
              </ul>
              <div className="package-price">
                <span className="price">€450–€550</span>
                <span className="period">/month</span>
              </div>
              <a href="#contact" className="btn btn-vip">
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials Section --> */}
      <section className="testimonials">
        <div className="container">
          <h2>Our students say it best</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                &lquot;Le lezioni con Italivo hanno trasformato il mio italiano.
                Finalmente parlo con sicurezza!&rquot;
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face"
                  alt="Sarah"
                />
                <div>
                  <strong>Sarah M.</strong>
                  <span>Premium Student</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>
                &lquot;Il metodo comunicativo funziona davvero. Ho fatto più
                progressi in 3 mesi che in anni di studio tradizionale.&rquot;
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                  alt="James"
                />
                <div>
                  <strong>James T.</strong>
                  <span>VIP Intensive</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>
                &lquot;I docenti sono fantastici e il supporto tra le lezioni fa
                la differenza. Consigliatissimo!&rquot;
              </p>
              <div className="testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
                  alt="Emma"
                />
                <div>
                  <strong>Emma K.</strong>
                  <span>Light Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- CTA Section --> */}
      <section id="contact" className="cta">
        <div className="container cta-container">
          <div className="cta-content">
            <h2>Ready to start?</h2>
            <p>
              Book a trial lesson to find out which package is right for you and
              begin your Italian journey today.
            </p>
            <a
              href="mailto:hello@italivo.com"
              className="btn btn-primary btn-large"
            >
              Book your free trial lesson
            </a>
          </div>
          <div className="cta-flag">
            <div className="flag-stripe green"></div>
            <div className="flag-stripe white"></div>
            <div className="flag-stripe red"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
