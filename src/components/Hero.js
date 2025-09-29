'use client'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    // Initialize Typed.js for typing animation
    if (typeof window !== 'undefined' && window.Typed) {
      const typed = new window.Typed('.typing', {
        strings: ['Frontend Developer', 'Devops Engineer', 'cloud Enthusiast'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      })

      return () => typed.destroy()
    }
  }, [])

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-text" data-aos="fade-right">
          <h3>Hello, It's Me</h3>
          <h1>Vaibhav Yadav</h1>
          <h3>And I'm a <span className="typing">Full Stack Developer</span></h3>
          <p>
            Passionate BTech student specializing in full-stack development with expertise in 
            modern web technologies. Currently pursuing opportunities in the solution architect 
            while building innovative web solutions Nurture.Me and Unity platforms.
          </p>
          
          <div className="social-media">
            <a href="https://github.com/Vaibhav7689" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/vaibhav-yadav-b04b12253/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="v.yadav942003@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          
          <a href="#contact" className="btn">
            Hire Me
          </a>
        </div>
        
        <div className="hero-image" data-aos="fade-left">
          <div className="about-image">
            <img src="/images/about.png" alt="Vaibhav Profile" />
          </div>
        </div>
      </div>
    </section>
  )
}
