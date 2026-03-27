import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero-section section-space">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Column */}
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

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              <a href="#projects" className="btn custom-btn">
                View Projects
              </a>
              <a href="#contact" className="btn custom-outline-btn">
                Contact Me
              </a>
            </div>

            {/* Contact Icons */}
            <div className="d-flex gap-3 mt-4">
              <a
                href="https://github.com/vishalrajyadav"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/vishal-raj-b6790926a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-icon"
              >
                <FaLinkedin size={28} />
              </a>
              <a href="mailto:vishalraj.118919@marwadiuniversity.ac.in" className="hero-icon">
                <FaEnvelope size={28} />
              </a>
              <a href="tel:+7004829709" className="hero-icon">
                <FaPhone size={28} />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-5">
            <div className="hero-card animated-border">
              <div className="inner-glass p-4 text-center">
                <div className="hero-avatar mx-auto mb-4">
                    
                  <i className="bi bi-person-fill"></i>
                </div>
                <h3>VISHAL RAJ</h3>
                <p className="mb-0 text-light-emphasis">
                  React & .Net Developer passionate about responsive UI, animations, and
                  clean frontend experiences.
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