export default function Certifications() {
  const certifications = [
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services',
      image: '/images/aws-practitioner.png',
      description: 'Developed understanding of AWS pricing models, billing practices, and cost optimization strategies.',
      skills: ['AWS Fundamentals', 'Cloud Economics', 'Cost Optimization', 'AWS Services Overview'],
      link: '#'
    },
    {
      title: 'AWS Academy Cloud Security Foundations',
      issuer: 'Amazon Web Services',
      image: '/images/aws-security.png',
      description: 'Acquired skills in cloud security best practices for securing AWS infrastructures.',
      skills: ['Cloud Security', 'IAM', 'Network Security', 'Compliance', 'Risk Management'],
      link: '#'
    },
    {
      title: 'AWS Academy Cloud Architecting',
      issuer: 'Amazon Web Services',
      image: '/images/aws-architect.png',
      description: 'Mastered cloud architecture design, deployment, and management on AWS.',
      skills: ['Solution Architecture', 'High Availability', 'Scalability', 'AWS Well-Architected Framework'],
      link: '#'
    }
  ]

  return (
    <section className="certifications-section" id="certifications">
      <div className="container">
        <h2 className="section-title fade-in-up">
          Certifications & <span>Achievements</span>
        </h2>
        
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card zoom-in" key={index} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="cert-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-description">{cert.description}</p>
                
                <div className="cert-skills">
                  <h4>Key Skills:</h4>
                  <div className="skill-tags">
                    {cert.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a href={cert.link} className="cert-button">
                  <i className="fas fa-certificate"></i>
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="continuous-learning">
          <h3>Continuous Learning</h3>
          <p>
            I'm committed to staying current with the latest cloud technologies and industry best practices.
          </p>
        </div>
      </div>
    </section>
  )
}
