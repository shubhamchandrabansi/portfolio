import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const technologies = [
    { name: "React & Next.js", icon: "ri-reactjs-line" },
    { name: "Node.js", icon: "ri-nodejs-line" },
    { name: "TypeScript", icon: "ri-typescript-line" },
    { name: "GraphQL", icon: "ri-code-box-line" },
    { name: "AWS & Cloud", icon: "ri-cloud-line" },
    { name: "Docker & K8s", icon: "ri-server-line" }
  ];
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#020c1b] to-[#0A192F] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#020c1b] to-transparent opacity-70"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#64FFDA]/5 blur-3xl"></div>
        <div className="absolute -left-20 bottom-40 w-72 h-72 rounded-full bg-[#9D4EDD]/5 blur-3xl"></div>
        
        {/* Code-like decorative elements */}
        <div className="absolute left-4 top-40 text-[#495670]/20 text-6xl">{`{`}</div>
        <div className="absolute right-4 bottom-40 text-[#495670]/20 text-6xl">{`}`}</div>
        <div className="absolute left-24 bottom-20 text-[#495670]/20 text-6xl">{`</>`}</div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-8 flex items-center max-w-4xl mx-auto">
            <span className="text-[#64FFDA] mr-2 font-mono">01.</span> 
            <span className="relative">
              About Me
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#64FFDA]/50 to-transparent"></span>
            </span>
            <span className="ml-4 h-px bg-[#495670]/50 flex-grow"></span>
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="md:w-3/5 space-y-5">
              <div 
                className={`glass-panel p-6 rounded-lg shadow-xl transform transition-all duration-700 delay-200 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <p className="text-[#CCD6F6] text-lg leading-relaxed">
                  Hello! I'm <span className="text-[#64FFDA] font-medium">John</span>, a software developer passionate about building exceptional digital experiences. With 3 years of experience in the industry, I'm constantly learning and growing while developing web applications and interactive experiences.
                </p>
              </div>
              
              <div 
                className={`glass-panel p-6 rounded-lg shadow-xl transform transition-all duration-700 delay-300 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <p className="text-[#8892B0] leading-relaxed">
                  My journey in software development began during college when I built my first portfolio website. I immediately fell in love with coding and have been captivated by the endless possibilities that technology brings to solve real-world problems.
                </p>
              </div>
              
              <div 
                className={`glass-panel p-6 rounded-lg shadow-xl transform transition-all duration-700 delay-400 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <p className="text-[#8892B0] leading-relaxed">
                  Currently, I'm working as a frontend developer while also pursuing freelance projects on the side. I focus on creating <span className="text-[#64FFDA] font-medium">responsive, user-friendly applications</span> with modern technologies like React and tailwind. I'm excited to continue learning and expanding my skillset!
                </p>
              </div>
              
              <div 
                className={`transition-all duration-700 delay-500 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <p className="text-[#CCD6F6] mt-6 mb-4 font-medium">Here are the technologies I've been working with recently:</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  {technologies.map((tech, index) => (
                    <div 
                      key={index} 
                      className="flex items-center group tilt-on-hover"
                      style={{ 
                        transitionDelay: `${600 + index * 100}ms`,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                      }}
                    >
                      <div className="text-[#64FFDA] mr-3 bg-[#112240]/50 p-2 rounded-md transform group-hover:scale-110 transition-transform duration-300">
                        <i className={`${tech.icon} text-lg`}></i>
                      </div>
                      <span className="text-[#8892B0] group-hover:text-[#CCD6F6] transition-colors duration-300">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div 
              className={`md:w-2/5 relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#64FFDA]/30 to-[#9D4EDD]/30 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Profile image with effects */}
                <div className="relative group perspective-1000">
                  {/* Border frame */}
                  <div className="absolute inset-0 border-2 border-[#64FFDA] rounded-lg translate-x-5 translate-y-5 z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3"></div>
                  
                  {/* Image container with overlay */}
                  <div className="relative w-full h-full overflow-hidden rounded-lg z-10">
                    {/* Placeholder grayscale gradient as profile background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#112240] to-[#0A192F] mix-blend-multiply"></div>
                    
                    {/* Developer avatar silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-32 h-32 text-[#64FFDA]/20" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                      </svg>
                    </div>
                    
                    {/* Animated overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#64FFDA]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Code pattern overlay */}
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQxLTguMDU5LTE4LTE4LTE4UzAgOC4wNTkgMCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOHptNCAwYzAgMTIuMTUtOS44NSAyMi0yMiAyMlMtNCAzMC4xNS00IDE4UzUuODUtNCAyMi00czIyIDkuODUgMjIgMjJ6IiBmaWxsPSIjMDgxMDJCIiBmaWxsLW9wYWNpdHk9Ii41Ii8+PC9nPjwvc3ZnPg==')] opacity-10 mix-blend-overlay"></div>
                  </div>
                </div>
                
                {/* Interactive elements */}
                <div className="absolute -right-4 -bottom-4 bg-[#112240] p-3 rounded-full shadow-lg border border-[#495670]/30 transform transition-transform duration-300 hover:scale-110 hover:border-[#64FFDA]/50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#64FFDA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              
              {/* Interactive code snippet */}
              <div className="mt-8 glass-panel rounded-lg p-4 shadow-lg max-w-sm mx-auto transform transition-all duration-500 hover:scale-105">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div className="ml-auto text-[#8892B0] text-xs">developer.js</div>
                </div>
                <pre className="text-xs text-[#CCD6F6] font-mono">
                  <code className="text-[#8892B0]">
                    <span className="text-[#64FFDA]">const</span> developer = {`{`}<br/>
                    {'  '}<span className="text-[#9D4EDD]">name</span>: <span className="text-[#C77DFF]">'John Doe'</span>,<br/>
                    {'  '}<span className="text-[#9D4EDD]">role</span>: <span className="text-[#C77DFF]">'Full Stack Developer'</span>,<br/>
                    {'  '}<span className="text-[#9D4EDD]">loves</span>: <span className="text-[#C77DFF]">'Building cool stuff'</span><br/>
                    {`}`};<br/>
                    <br/>
                    <span className="text-[#64FFDA]">export default</span> developer;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
