function Contact() {
  return (
    <section id="contact" className="section-space">
      <div className="container">
        <div className="text-center mb-5">
          <span className="section-badge">Contact</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="custom-card h-100">
              <h3>Let's work together</h3>
              <p>
                You can contact  React frontend work or .Net Development.
              </p>

              <div className="mt-4">
                <p><strong>Email:</strong> Vishalraj.118919@marwadiuniversity.ac.in</p>
                <p><strong>Phone:</strong> 7004829709</p>
                <p><strong>Location:</strong>Ahemdabad, Gujarat - India</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="custom-card">
              <form
                action="mailto:yourmail@gmail.com"
                method="post"
                encType="text/plain"
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Your Email"
                      name="email"
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control custom-input"
                      placeholder="Subject"
                      name="subject"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      rows="5"
                      className="form-control custom-input"
                      placeholder="Your Message"
                      name="message"
                    ></textarea>
                  </div>

                  <div className="col-12 d-flex flex-wrap gap-3">
                    <button type="submit" className="btn custom-btn">
                      Send Message
                    </button>

                    <a href="/Vishal_Raj_Resume.pdf" download className="btn custom-outline-btn">
                      Download Resume
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact