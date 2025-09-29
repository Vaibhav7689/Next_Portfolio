'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Contact <span>Me!</span>
        </h2>
        
        <div className="contact-container">
          <div className="contact-info" data-aos="fade-right">
            <h3>Get in Touch</h3>
            <p>
              I'm currently seeking internship opportunities in the finance sector 
              while continuing to develop innovative web solutions. Whether you have 
              a project in mind, want to discuss opportunities, or just want to connect, 
              I'd love to hear from you!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>v.yadav942003@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8882443260</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Education</h4>
                  <p>BTech Student (Pursuing Computer Science and Engineering in Cloud Computing and Virtualization Technology)</p>
                </div>
              </div>
            </div>
          </div>
          
          <form className="contact-form" data-aos="fade-left" onSubmit={handleSubmit}>
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="input-box">
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            
            <input 
              type="submit" 
              value={isSubmitting ? "Sending..." : "Send Message"} 
              className="btn"
              disabled={isSubmitting}
            />
            
            {submitStatus === 'success' && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
