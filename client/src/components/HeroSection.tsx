import { useState, useEffect, useRef } from "react";
import ThreeScene from "./ThreeScene";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
    
    // Simulate type effect for the name
    if (nameRef.current) {
      const name = "Shubham Kumar Chandrabansi";
      nameRef.current.textContent = "";
      
      let i = 0;
      const typeInterval = setInterval(() => {
        nameRef.current!.textContent += name[i];
        i++;
        if (i >= name.length) {
          clearInterval(typeInterval);
        }
      }, 150);
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center">
      <ThreeScene />
      
      {/* Glowing overlay effect */}
      <div className="absolute inset-0 bg-gradient-radial from-[#64FFDA]/5 via-transparent to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A192F] opacity-80"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div 
          className={`max-w-3xl transition-all duration-1000 ease-out ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="relative inline-block mb-4">
            <p className="text-[#64FFDA] font-mono tracking-wider">
              <span className="inline-block relative">
                Hi, my name is
                <span className="absolute -bottom-1 left-0 h-[2px] bg-[#64FFDA]/30 animate-expand-width"></span>
              </span>
            </p>
          </div>
          
          <h1 
            ref={nameRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-4 relative inline-block"
          >
            {/* Shubham Kumar Chandrabansi */}
          </h1>
          
          <div className="overflow-hidden">
            <h2 
              ref={titleRef}
              className={`text-3xl md:text-5xl lg:text-6xl font-bold text-[#8892B0] font-['Space_Grotesk'] mb-6 transition-transform duration-1000 ease-out ${
                loaded ? 'translate-y-0' : 'translate-y-full'
              }`}
            >
              Software Developer
            </h2>
          </div>
          
          <div className="relative overflow-hidden">
            <p 
              ref={descRef}
              className={`text-lg text-[#8892B0] mb-8 max-w-xl transition-all duration-1000 delay-300 ease-out ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              I build modern, scalable software solutions that help businesses thrive in the digital world.
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#64FFDA]/70 to-transparent"></span>
            </p>
          </div>
          
          <div 
            ref={buttonsRef}
            className={`flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 transition-all duration-1000 delay-500 ease-out ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <a 
              href="#projects" 
              className="group relative overflow-hidden px-8 py-3 border-2 border-[#64FFDA] text-[#64FFDA] text-center rounded-md font-medium hover:text-[#0A192F] transition-all duration-300 z-10"
            >
              <span className="absolute inset-0 bg-[#64FFDA] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-[-1]"></span>
              <div className="flex items-center justify-center">
                <span>See My Work</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
            <a 
              href="#contact" 
              className="group relative overflow-hidden px-8 py-3 bg-[#112240] border-2 border-[#112240] text-[#CCD6F6] text-center rounded-md font-medium hover:border-[#64FFDA] hover:text-[#64FFDA] transition-all duration-300"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#112240]/10 to-[#64FFDA]/10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-[-1]"></span>
              <div className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Let's Connect</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Social links side bar */}
      <div className={`fixed left-5 bottom-0 z-10 hidden md:block transition-all duration-1000 delay-700 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <div className="flex flex-col items-center">
          <a href="https://github.com/shubhamchandrabansi/" className="text-[#8892B0] hover:text-[#64FFDA] hover:-translate-y-1 transition-all duration-300 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/shubhamchandrabansi/" className="text-[#8892B0] hover:text-[#64FFDA] hover:-translate-y-1 transition-all duration-300 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          {/* <a href="#" className="text-[#8892B0] hover:text-[#64FFDA] hover:-translate-y-1 transition-all duration-300 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-[#8892B0] hover:text-[#64FFDA] hover:-translate-y-1 transition-all duration-300 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
            </svg>
          </a> */}
          <div className="h-20 w-px bg-[#8892B0]"></div>
        </div>
      </div>
      
      {/* Email side bar */}
      <div className={`fixed right-5 bottom-0 z-10 hidden md:block transition-all duration-1000 delay-700 ${
        loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
        <div className="flex flex-col items-center">
          <a 
            href="mailto:shubhamchandrabansi@gmail.com" 
            className="text-[#8892B0] hover:text-[#64FFDA] hover:-translate-y-1 transition-all duration-300 mb-4 vertical-text tracking-widest"
          >
            shubhamchandrabansi@gmail.com
          </a>
          <div className="h-20 w-px bg-[#8892B0]"></div>
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
