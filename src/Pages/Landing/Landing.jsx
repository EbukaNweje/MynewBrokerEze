import { Link } from "react-router-dom";
import LandingHeader from "../../Components/LandingHeader";
import Footer from "../../Components/Footer";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="LandingPage">
      <LandingHeader />

      <main>
        <section className="LandingHero">
          <div className="LandingHeroContent container">
            <div className="LandingHeroCopy">
              <span className="LandingBadge">Global trading, simplified</span>
              <h1>Power your investments with a modern broker platform.</h1>
              <p>
                Trade markets, manage risk, and access premium tools with a
                clean investment experience built for today’s traders.
              </p>
              <div className="LandingActions">
                <Link className="LandingButton primary" to="/register">
                  Get Started
                </Link>
                <Link className="LandingButton secondary" to="/login">
                  Login
                </Link>
              </div>
            </div>
            <div className="LandingHeroStats">
              <div className="LandingStatCard">
                <h2>0.0s</h2>
                <p>Average execution</p>
              </div>
              <div className="LandingStatCard">
                <h2>120+</h2>
                <p>Markets available</p>
              </div>
              <div className="LandingStatCard">
                <h2>24/7</h2>
                <p>Support and live chat</p>
              </div>
            </div>
          </div>
        </section>

        <section className="LandingFeatures container" id="trading">
          <div className="LandingSectionTitle">
            <p>Core trading features</p>
            <h2>Built to trade confidently in every market.</h2>
          </div>
          <div className="LandingFeatureGrid">
            <article className="LandingFeatureCard">
              <h3>Live market signals</h3>
              <p>
                See market moves and execute with clear pricing from day one.
              </p>
            </article>
            <article className="LandingFeatureCard">
              <h3>Advanced analytics</h3>
              <p>
                Track your positions and manage risk with actionable insights.
              </p>
            </article>
            <article className="LandingFeatureCard">
              <h3>Fast onboarding</h3>
              <p>
                Register in minutes and fund your account with reliable
                infrastructure.
              </p>
            </article>
          </div>
        </section>

        <section className="LandingMarkets" id="markets">
          <div className="container">
            <div className="LandingSectionTitle">
              <p>Market access</p>
              <h2>
                Trade the widest range of asset classes from one platform.
              </h2>
            </div>
            <div className="LandingMarketsGrid">
              {[
                "Bitcoin Mining",
                "Forex Trade",
                "Marijuana",
                "Precious Metal",
                "Crude Oil",
                "Real Estate",
                "Retirement Plan",
              ].map((market) => (
                <div key={market} className="LandingMarketCard">
                  <h3>{market}</h3>
                  <p>
                    Explore premium instruments and risk-managed portfolios.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="LandingChatAwards container">
          <div className="LandingChat">
            <h2>Trade smarter with live chat support.</h2>
            <p>
              Ask questions, get market updates, and receive guidance from our
              trading desk anytime.
            </p>
            <a className="LandingButton outline" href="#contact">
              Start chat
            </a>
          </div>
          <div className="LandingAwards">
            <div>
              <span>Awarded</span>
              <h3>Best broker experience 2026</h3>
            </div>
            <div>
              <span>Rated</span>
              <h3>5-star broker services</h3>
            </div>
            <div>
              <span>Trusted</span>
              <h3>By global investors</h3>
            </div>
          </div>
        </section>

        <section className="LandingTestimonials container">
          <div className="LandingSectionTitle">
            <p>Client stories</p>
            <h2>What traders are saying about the platform.</h2>
          </div>
          <div className="LandingTestimonialGrid">
            <article className="LandingTestimonialCard">
              <p>
                “The execution speed and clarity on this platform make it easy
                to trade without second guessing.”
              </p>
              <strong>— Hannah, active forex trader</strong>
            </article>
            <article className="LandingTestimonialCard">
              <p>
                “I love the market coverage. It feels like a professional broker
                with a modern user experience.”
              </p>
              <strong>— Marcus, commodities investor</strong>
            </article>
            <article className="LandingTestimonialCard">
              <p>
                “The education and support are great. Everything feels well
                built for serious investing.”
              </p>
              <strong>— Priya, long-term portfolio manager</strong>
            </article>
          </div>
        </section>

        <section className="LandingSponsors container">
          <p>Trusted by</p>
          <div className="LandingSponsorGrid">
            <span>FINEX</span>
            <span>TRADIFY</span>
            <span>GLOBALX</span>
            <span>METALINK</span>
            <span>ALTTRUST</span>
          </div>
        </section>

        <section className="LandingPlans container" id="plans">
          <div className="LandingSectionTitle">
            <p>Plans</p>
            <h2>Choose the account type that fits your strategy.</h2>
          </div>
          <div className="LandingPlanGrid">
            <div className="LandingPlanCard">
              <h3>Standard</h3>
              <p>Easy access for new traders with essential tools.</p>
            </div>
            <div className="LandingPlanCard featured">
              <h3>Pro</h3>
              <p>Complete trading power with advanced analytics.</p>
            </div>
            <div className="LandingPlanCard">
              <h3>Premium</h3>
              <p>Priority service, custom pricing, and deeper market access.</p>
            </div>
          </div>
        </section>

        <section className="LandingContact container" id="contact">
          <div className="LandingContactCard">
            <div>
              <span>Talk to us</span>
              <h2>
                Start trading with support that moves as fast as the market.
              </h2>
            </div>
            <Link className="LandingButton primary" to="/login">
              Contact sales
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Landing;
