'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo fade-in-down">
          <Link href="/">Vaibhav Yadav</Link>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <Link href="#about" className="nav-link" onClick={closeMenu}>
            About
          </Link>
          <Link href="#skills" className="nav-link" onClick={closeMenu}>
            Skills
          </Link>
          <Link href="#projects" className="nav-link" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="#experience" className="nav-link" onClick={closeMenu}>
            Experience
          </Link>
          <Link href="#education" className="nav-link" onClick={closeMenu}>
            Education
          </Link>
          <Link href="#certifications" className="nav-link" onClick={closeMenu}>
            Certifications
          </Link>
          <Link href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
        </div>
        
        <div className={`nav-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}
