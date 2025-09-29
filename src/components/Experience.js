export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title fade-in-up">
          Professional <span>Experience</span>
        </h2>
        
        <div className="experience-content">
          <div className="experience-card fade-in-up">
            <div className="experience-header">
              <div className="company-info">
                <div className="company-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="company-details">
                  <h3>Project Intern - IBM</h3>
                  <div className="experience-date">
                    <i className="fas fa-calendar-alt"></i>
                    <span>June 2025 - July 2025</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="project-details">
              <h4 className="project-title">WiseCloud Project</h4>
              <p className="project-description">
                Designed WiseCloud, a Python-based energy-efficient VM scheduler simulator to optimize 
                energy consumption in virtualized cloud data centers.
              </p>
              
              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul className="achievements-list">
                  <li>
                    Evaluated and applied energy-aware VM scheduling algorithms including Best-Fit Decreasing, 
                    Minimum Utilization, and Random
                  </li>
                  <li>
                    Built a modular architecture separating logic for scheduling, energy modeling, 
                    simulation, and visualization
                  </li>
                  <li>
                    Developed comprehensive energy consumption optimization strategies for cloud infrastructure
                  </li>
                </ul>
              </div>
              
              <div className="technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Cloud Computing</span>
                  <span className="tech-tag">Virtualization</span>
                  <span className="tech-tag">Energy Optimization</span>
                  <span className="tech-tag">Algorithm Design</span>
                  <span className="tech-tag">Data Visualization</span>
                </div>
              </div>
              
              <div className="impact-learning">
                <h4>Impact & Learning:</h4>
                <p>
                  This internship provided hands-on experience with enterprise-level cloud optimization 
                  challenges and reinforced my passion for sustainable computing solutions. I gained 
                  practical insights into energy-efficient system design and advanced cloud infrastructure management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
