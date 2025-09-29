export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2025 Vaibhav Portfolio. All Rights Reserved.</p>
          <p>Built with Next.js & passion for innovation</p>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com/Vaibhav7689" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/vaibhav" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:vaibhav@example.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        
        <div className="footer-top">
          <a href="#hero">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
