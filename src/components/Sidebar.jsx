import { navLinks } from '../data/portfolioData';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      <div className={`mobile-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="logo-text m-0">MyPortfolio</h4>
          <button
            className="btn close-btn"
            onClick={() => setSidebarOpen(false)}
          >
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <ul className="list-unstyled">
          {navLinks.map((link) => (
            <li key={link.id} className="mb-3">
              <a
                href={`#${link.id}`}
                className="sidebar-link"
                onClick={() => setSidebarOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Sidebar