import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);
  
  // Define nav links with their labels and indices
  const navLinks = [
    { href: "#about", label: "01. About", section: "about" },
    { href: "#skills", label: "02. Skills", section: "skills" },
    { href: "#projects", label: "03. Projects", section: "projects" },
    { href: "#achievements", label: "04. Achievements", section: "achievements" },
    { href: "#contact", label: "05. Contact", section: "contact" }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      // Update navbar styling on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.section);
      sections.unshift("home");
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
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
      <nav 
        ref={navRef}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 backdrop-blur-md bg-[#0A192F]/90 shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a 
            href="#home" 
            className="group relative flex items-center text-[#64FFDA] font-['Space_Grotesk'] text-2xl font-bold transition-all duration-300"
          >
            <div className="relative z-10">
              <span className={`transition-transform duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>JD</span>
              <span className="text-[#9D4EDD]">.</span>
            </div>
            <div className="absolute inset-0 bg-[#64FFDA]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </a>
          
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link, index) => (
              <a 
                key={link.section}
                href={link.href} 
                className={`nav-link text-sm font-mono ${activeSection === link.section ? 'nav-active' : ''}`}
              >
                <span className="text-[#64FFDA] mr-1">{`0${index + 1}.`}</span>
                <span>{link.label.split('. ')[1]}</span>
              </a>
            ))}
            
            <a 
              href="#resume" 
              className="group relative px-4 py-2 overflow-hidden border border-[#64FFDA] text-[#64FFDA] rounded font-mono text-sm"
            >
              <span className="relative z-10 group-hover:text-[#0A192F] transition-colors duration-300">Resume</span>
              <span className="absolute inset-0 bg-[#64FFDA] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          </div>
          
          <button 
            className="md:hidden w-10 h-10 relative focus:outline-none z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className="block w-6 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span 
                className={`block absolute h-0.5 w-6 bg-[#64FFDA] transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 bg-[#64FFDA] transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'w-6'
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 w-6 bg-[#64FFDA] transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          mobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-[#020c1b]/95 backdrop-blur-lg"
          onClick={closeMobileMenu}
        ></div>
        
        <div 
          className={`absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-[#112240] shadow-lg transform transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full justify-center items-center p-8">
            <div className="flex flex-col space-y-6 items-start w-full">
              {navLinks.map((link, index) => (
                <a 
                  key={link.section}
                  href={link.href} 
                  onClick={closeMobileMenu} 
                  className={`text-xl font-mono group relative hover:pl-6 transition-all duration-300 ${
                    activeSection === link.section 
                      ? 'text-[#64FFDA]' 
                      : 'text-[#CCD6F6]'
                  }`}
                >
                  <span className="text-[#64FFDA] mr-2 text-sm">{`0${index + 1}.`}</span>
                  <span className="group-hover:text-[#64FFDA] transition-colors duration-300">{link.label.split('. ')[1]}</span>
                  <span className="absolute left-0 w-0 h-0.5 bg-[#64FFDA] bottom-0 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              <a 
                href="#resume" 
                onClick={closeMobileMenu} 
                className="mt-8 border-2 border-[#64FFDA] text-[#64FFDA] px-8 py-3 rounded font-mono text-center w-full hover:bg-[#64FFDA]/10 transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overlay for the mobile menu */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={closeMobileMenu}
        ></div>
      )}
    </>
  );
}
