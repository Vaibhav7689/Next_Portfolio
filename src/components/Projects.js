import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: 'DeployVerse',
      description: 'A comprehensive deployment platform with CI/CD integration, AWS services, and modern React architecture for seamless project deployment.',
      image: '/images/deployverse.jpg',
      github: 'https://github.com/Vaibhav7689/DeployVerse-Project',
      demo: 'https://deployverse-demo.vercel.app',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'JWT', 'REST API']
    },
    {
      title: 'Dynamic Portfolio',
      description: 'Responsive portfolio website built with Next.js featuring dynamic animations, modern design, and CI/CD deployment through GitHub Actions.',
      image: '/images/portfolio.jpg',
      github: 'https://github.com/Vaibhav7689/Portfolio',
      demo: 'https://vaibhav7689.github.io/Portfolio',
      technologies: ['Next.js', 'React', 'CSS3', 'JavaScript', 'AOS Animations']
    },
    {
      title: 'Project Hub',
      description: 'Student showcase platform with authentication system, project management capabilities, and comprehensive user dashboard for academic projects.',
      image: '/images/project-hub.jpg',
      github: 'https://github.com/Vaibhav7689/Project-Hub',
      demo: 'https://project-hub-demo.vercel.app',
      technologies: ['MERN Stack', 'JWT Auth', 'Axios', 'CSS3', 'REST API']
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Latest <span>Projects</span>
        </h2>
        
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-box" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-btn" data-aos="fade-up">
          <Link href="/projects" className="btn">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}
