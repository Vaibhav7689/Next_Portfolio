export default function Skills() {
  const technicalSkills = [
    { name: 'HTML/CSS', level: 95, icon: 'fab fa-html5' },
    { name: 'JavaScript', level: 88, icon: 'fab fa-js-square' },
    { name: 'React.js', level: 85, icon: 'fab fa-react' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js' },
    { name: 'MongoDB', level: 75, icon: 'fas fa-database' },
    { name: 'AWS', level: 70, icon: 'fab fa-aws' },
    { name: 'Git/GitHub', level: 90, icon: 'fab fa-git-alt' },
    { name: 'Next.js', level: 82, icon: 'fas fa-code' }
  ]

  const professionalSkills = [
    { name: 'Web Development', level: 90 },
    { name: 'Database Design', level: 80 },
    { name: 'API Development', level: 85 },
    { name: 'CI/CD Pipeline', level: 75 },
    { name: 'Problem Solving', level: 92 },
    { name: 'Project Management', level: 78 }
  ]

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          My <span>Skills</span>
        </h2>
        
        <div className="skills-container">
          <div className="skills-column" data-aos="fade-right">
            <h3 className="title">Technical Skills</h3>
            
            {technicalSkills.map((skill, index) => (
              <div className="skills-content" key={index}>
                <div className="progress">
                  <h3>
                    <i className={skill.icon}></i> {skill.name} 
                    <span>{skill.level}%</span>
                  </h3>
                  <div className="bar">
                    <span style={{width: `${skill.level}%`}}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="skills-column" data-aos="fade-left">
            <h3 className="title">Professional Skills</h3>
            
            {professionalSkills.map((skill, index) => (
              <div className="skills-content" key={index}>
                <div className="progress">
                  <h3>{skill.name} <span>{skill.level}%</span></h3>
                  <div className="bar">
                    <span style={{width: `${skill.level}%`}}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
