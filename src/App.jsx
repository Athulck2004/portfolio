import './App.css'

function App() {
  return (
    <div className="container">

      {/* Hero Section */}
      <header className="hero">
        <h1>Athul C K</h1>
        <p>Computer Science Student • Web Developer</p>
        <button className="btn">Download Resume</button>
      </header>

      {/* About */}
      <section className="card">
        <h2>About Me</h2>
        <p>
          I am a Computer Science student passionate about building modern web
          applications. I enjoy solving real-world problems using clean and
          efficient code.
        </p>
      </section>

      {/* Skills */}
      <section className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>C</span>
          <span>Java</span>
        </div>
      </section>

      {/* Projects */}
      <section className="card">
        <h2>Projects</h2>

        <div className="projects">
          <div className="project">
            <h3>Kudumbashree Management System</h3>
            <p>
              A digital system to manage members, meetings, and financial
              activities efficiently.
            </p>
          </div>

          <div className="project">
            <h3>Vehicle Rental System</h3>
            <p>
              A web-based application for vehicle booking, availability
              tracking, and rental management.
            </p>
          </div>
          <div className="project">
            <h3>Reciept Generator</h3>
            <p>
             a simple system to generate reciepts for donation management
            </p>
          </div>
        </div>
      </section>

   {/* Contact */}
<section className="card">
  <h2>Contact</h2>

  <div className="contact">
    <a
      href="https://github.com/Athulck2004"
      target="_blank"
      rel="noopener noreferrer"
    >
      🐙 GitHub
    </a>

    <a href="mailto:athulck768@gmail.com">
      📧 Email
    </a>

    <a
      href="https://www.linkedin.com/in/athul-c-k-33a3a2292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      target="_blank"
      rel="noopener noreferrer"
    >
      💼 LinkedIn
    </a>
  </div>
</section>


    </div>
  )
}

export default App
