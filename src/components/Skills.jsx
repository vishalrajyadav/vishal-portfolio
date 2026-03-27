import { skills } from '../data/portfolioData';

function Skills() {
  return (
    <section id="skills" className="section-space">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Skills</span>
          <h2 className="section-title">My Tech Stack</h2>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div className="skill-card">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills