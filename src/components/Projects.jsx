import { projects } from '../Data/portfolioData';

function Projects() {
  return (
    <section id="projects" className="section-space">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Projects</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="project-card h-100">
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-fluid project-img"
                  />
                </div>

                <div className="p-3">
                  <h4 className="mb-3">{project.title}</h4>
                  <p>{project.description}</p>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn custom-btn mt-2"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects