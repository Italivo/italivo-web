import { About } from "@/components/blocks/about";
import { Hero } from "@/components/blocks/hero";
import { LearningPaths } from "@/components/blocks/learning-paths";
import { Testimonials } from "@/components/blocks/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <LearningPaths />
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
      <About />

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

      <Testimonials />

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
