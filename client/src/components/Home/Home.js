

import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 id="karibu">Welcome to PetPal.</h1>
        <br />
        <p id="para"> We just don't treat animals</p>
        <p id="para">We care for your Pet</p>
        <br />
        <br />
        <a
          className="btn btn-outline-primary btn-lg"
          href="/login"
          role="button"
        >
          Book your appointment
        </a>
      </div>
    </section>
  );
};

export default Home;
