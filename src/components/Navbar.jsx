import { navLinks } from "../data/portfolioData"

function Navbar({ setSidebarOpen }) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">
        <a className="navbar-brand logo-text" href="#home">
          𝓥𝓲𝓼𝓱𝓪𝓵 𝓡𝓪𝓳
        </a>

        <button
          className="btn sidebar-btn d-lg-none"
          onClick={() => setSidebarOpen(true)}
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse d-none d-lg-block">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.id}>
                <a className="nav-link custom-nav-link" href={`#${link.id}`}>
                  {link.label}
                </a>
              </li>
            ))}

            <li className="nav-item">
              <a href="/Vishal_Raj_Resume.pdf" download className="btn custom-btn">
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar