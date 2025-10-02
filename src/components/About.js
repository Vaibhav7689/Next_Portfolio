export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          About <span>Me</span>
        </h2>
        
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <h3>Cloud-Native & DevOps Engineer</h3>
            <p>
              “I am a Cloud and DevOps Engineer with a strong background in full stack development,
               passionate about building scalable, automated, and reliable systems.”
            </p>
            
            <p>
              Currently developing projects like DeployVerse (deployment platform) and 
              Project Hub (student showcase platform). 
            </p>
            
            <div className="about-stats">
              <div className="stat-item" data-aos="zoom-in">
                <h4>4+</h4>
                <p>Projects Completed</p>
              </div>
              
              <div className="stat-item" data-aos="zoom-in">
                <h4>5+</h4>
                <p>Technologies Mastered</p>
              </div>
            </div>
            
            <a href="/vy.pdf" className="btn" download>
              Download CV
            </a>
          </div>
          
          <div className="about-image" data-aos="fade-left">
            <img src="/images/profile.jpg" alt="About Vaibhav" />
          </div>
        </div>
      </div>
    </section>
  )
}
