function About() {
  return (
    <section id="about" className="section-space">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">About Me</span>
          <h2 className="section-title">Who I Am</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="custom-card h-100">
              <h3 className="mb-3">React & .Net Developer</h3>
              <p>
                I have solid experience in React.js and have completed two internships. From January 2025 to April 2025, I did a .NET internship during my 6th semester at TSS Consultancy Services, Rajkot, and I also completed a 4-month .NET Core internship at Zobi Web Solution, Ahmedabad.
              </p>
              <p className="mb-0">
                I like converting ideas into modern web interfaces that look
                professional on desktop, tablet, and mobile devices.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-sm-6">
                <div className="custom-card text-center">
                  <h3 className="gradient-text">1+</h3>
                  <p className="mb-0">Years Learning</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="custom-card text-center">
                  <h3 className="gradient-text">10+</h3>
                  <p className="mb-0">Projects Built</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="custom-card text-center">
                  <h3 className="gradient-text">.Net</h3>
                  <p className="mb-0">Developer</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="custom-card text-center">
                  <h3 className="gradient-text">React</h3>
                  <p className="mb-0">Focused Stack</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About