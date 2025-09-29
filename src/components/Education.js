export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="container">
        <h2 className="section-title fade-in-up">
          Education
        </h2>
        
        <div className="education-content">
          <div className="education-card fade-in-up">
            <div className="education-header">
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-meta">
                <h3>Bachelor of Technology in Computer Science</h3>
                <div className="education-date">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Graduating - 2026</span>
                </div>
                <div className="education-location">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Dehradun, India</span>
                </div>
              </div>
            </div>
            
            <div className="education-details">
              <div className="specialization">
                <h4>Specialization: Cloud Computing and Virtualization Technology</h4>
                <p>University of Petroleum and Energy Studies (UPES), Dehradun</p>
              </div>
              
              <div className="coursework">
                <div className="coursework-header">
                  <i className="fas fa-book"></i>
                  <h4>Relevant Coursework</h4>
                </div>
                
                <div className="coursework-grid">
                  <div className="coursework-item">Cloud Computing Architecture</div>
                  <div className="coursework-item">Cloud Deployment Models</div>
                  <div className="coursework-item">Cloud Security and Management</div>
                  <div className="coursework-item">Database Management Systems</div>
                  <div className="coursework-item">Computer System Architecture</div>
                  <div className="coursework-item">Operating Systems</div>
                </div>
              </div>
              
              <div className="academic-focus">
                <h4>Academic Focus:</h4>
                <p>
                  My academic journey at UPES has provided me with a strong foundation in computer science 
                  principles while specializing in cutting-edge cloud technologies. The curriculum combines 
                  theoretical knowledge with practical applications, preparing me for the evolving demands 
                  of the tech industry.
                </p>
              </div>
              
              <div className="key-learning-areas">
                <h4>Key Learning Areas:</h4>
                <div className="learning-tags">
                  <span className="learning-tag">Cloud Architecture Design</span>
                  <span className="learning-tag">Virtualization Technologies</span>
                  <span className="learning-tag">Distributed Systems</span>
                  <span className="learning-tag">System Security</span>
                  <span className="learning-tag">Performance Optimization</span>
                  <span className="learning-tag">Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
