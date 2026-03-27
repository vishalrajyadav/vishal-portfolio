import { experienceData } from '../Data/portfolioData'

function Experience() {
  return (
    <section id="experience" className="section-space">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Experience</span>
          <h2 className="section-title">My Experience</h2>
        </div>

        <div className="row g-4">
          {experienceData.map((item) => (
            <div className="col-lg-6 col-md-8" key={item.id}>
              <div className="experience-card h-100">
                <span className="experience-duration">{item.duration}</span>
                <h4 className="mt-3 mb-2">{item.role}</h4>
                <h6 className="experience-company mb-3">{item.company}</h6>
                <p className="mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience