import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-300 bg-[#0A192F]/90 ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#home" className="text-[#64FFDA] font-['Space_Grotesk'] text-2xl font-bold">
            JD<span className="text-[#C77DFF]">.</span>
          </a>
          
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="relative text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-sm after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#64FFDA] after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="#skills" className="relative text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-sm after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#64FFDA] after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">
              Skills
            </a>
            <a href="#projects" className="relative text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-sm after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#64FFDA] after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">
              Projects
            </a>
            <a href="#achievements" className="relative text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-sm after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#64FFDA] after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">
              Achievements
            </a>
            <a href="#contact" className="relative text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-sm after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-[#64FFDA] after:bottom-[-4px] after:left-0 after:transition-all after:duration-300 hover:after:w-full">
              Contact
            </a>
            <a href="#resume" className="border border-[#64FFDA] text-[#64FFDA] px-4 py-2 rounded hover:bg-[#64FFDA]/10 transition-colors duration-300 text-sm">
              Resume
            </a>
          </div>
          
          <button 
            className="md:hidden text-[#CCD6F6]" 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#020c1b]/95 z-50 flex flex-col justify-center items-center transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button 
          className="absolute top-6 right-6 text-[#CCD6F6]" 
          onClick={closeMobileMenu}
          aria-label="Close mobile menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="flex flex-col space-y-6 items-center">
          <a href="#about" onClick={closeMobileMenu} className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-xl">
            About
          </a>
          <a href="#skills" onClick={closeMobileMenu} className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-xl">
            Skills
          </a>
          <a href="#projects" onClick={closeMobileMenu} className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-xl">
            Projects
          </a>
          <a href="#achievements" onClick={closeMobileMenu} className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-xl">
            Achievements
          </a>
          <a href="#contact" onClick={closeMobileMenu} className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300 text-xl">
            Contact
          </a>
          <a href="#resume" onClick={closeMobileMenu} className="border border-[#64FFDA] text-[#64FFDA] px-6 py-3 rounded hover:bg-[#64FFDA]/10 transition-colors duration-300 mt-4">
            Resume
          </a>
        </div>
      </div>
    </>
  );
}
