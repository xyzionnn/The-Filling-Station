import React from 'react';
import '../components/About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>Welcome to RetroFuel!</h1>
        <p className="tagline">Serving nostalgia, one sip at a time.</p>
      </section>

      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          Born from the golden era of jukeboxes, chrome counters, and soda pops,
          RetroFuel brings back the 1950s diner spirit with a modern twist. We
          serve up nostalgic treats, fizzy drinks, and snack boxes that make
          every moment a blast from the past!
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          We believe in keeping the good vibes rolling — through classic flavors,
          community, and that signature 50s cheer. Whether you’re sipping a
          Breezy Sip or unboxing a Munch Mate, you’re part of our retro family.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet the Crew</h2>
        <div className="team-cards">
          <div className="team-member">
            <img src="/images/team1.jpg" alt="Crew Member" />
            <h3>Sandy</h3>
            <p>The Soda Mixer Extraordinaire</p>
          </div>
          <div className="team-member">
            <img src="/images/team2.jpg" alt="Crew Member" />
            <h3>Ricky</h3>
            <p>Snack Engineer Supreme</p>
          </div>
          <div className="team-member">
            <img src="/images/team3.jpg" alt="Crew Member" />
            <h3>Cherry</h3>
            <p>Customer Happiness Rockstar</p>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <p>🎵 Step into the retro rhythm — we’re fueling your good times since 1955! 🎶</p>
      </footer>
    </div>
  );
};

export default About;
