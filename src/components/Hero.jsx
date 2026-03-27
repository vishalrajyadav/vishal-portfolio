import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";


function Hero() {
  return (
    <section id="home" className="hero-section section-space">
      <div className="container">
        <div className="row align-items-center g-5">
          
          {/* LEFT COLUMN */}
          <div className="col-lg-7">
            <span className="section-badge">React & .NET Developer</span>

            <h1 className="hero-title">
              Vishal Raj <br />
              <span className="gradient-text">React &</span>
              <br />
              .Net Developer
            </h1>

            <p className="hero-text">
              I create responsive and animated portfolio websites using React JS,
              JavaScript, Vite, and Bootstrap with smooth sections, glowing cards,
              and modern layouts.
            </p>

            {/* BUTTONS */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#projects" className="btn custom-btn">
                View Projects
              </a>
              <a href="#contact" className="btn custom-outline-btn">
                Contact Me
              </a>
            </div>

            {/* SOCIAL ICONS */}
            <div className="d-flex gap-3 mt-4">
              <a href="https://github.com/vishalrajyadav" target="_blank" className="hero-icon">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" className="hero-icon">
                <FaLinkedin size={28} />
              </a>
              <a href="mailto:vishalraj@gmail.com" className="hero-icon">
                <FaEnvelope size={28} />
              </a>
              <a href="tel:+7004829709" className="hero-icon">
                <FaPhone size={28} />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN (IMAGE) */}
          <div className="col-lg-5 text-center">
            <div className="hero-card animated-border">
              <div className="inner-glass p-4 text-center">

                {/* 👇 IMAGE AVATAR */}
                <div className="hero-avatar mx-auto mb-4">
                  <img src="MyImage.png" alt="Vishal" />
                </div>

                <h3>VISHAL RAJ</h3>
                <p className="mb-0 text-light-emphasis">
                  React & .Net Developer passionate about responsive UI, animations,
                  and clean frontend experiences.
                </p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;