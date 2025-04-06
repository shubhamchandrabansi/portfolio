import { useEffect, useRef } from "react";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <ThreeScene />
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl">
          <p className="text-[#64FFDA] font-mono mb-4 tracking-wider">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-4">John Doe.</h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#8892B0] font-['Space_Grotesk'] mb-6">Software Developer & Founder</h2>
          <p className="text-lg text-[#8892B0] mb-8 max-w-xl">I build modern, scalable software solutions that help businesses thrive in the digital world.</p>
          
          <div className="flex space-x-4">
            <a 
              href="#projects" 
              className="relative overflow-hidden px-6 py-3 border-2 border-[#64FFDA] text-[#64FFDA] rounded-md hover:bg-[#64FFDA]/10 transition-all duration-300 z-10 after:content-[''] after:absolute after:inset-0 after:bg-[#64FFDA]/20 after:-z-10 after:transform after:translate-x-[-100%] after:transition-transform after:duration-300 hover:after:translate-x-0"
            >
              See My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-[#112240] text-[#CCD6F6] rounded-md hover:bg-[#0A192F] transition-colors duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
