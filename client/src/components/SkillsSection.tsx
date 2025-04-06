import { useEffect, useRef, useState } from "react";
import { skills } from "@/data/skills";
import SkillIcon from "./SkillIcon";

export default function SkillsSection() {
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
  
  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0A192F] to-[#020c1b] relative overflow-hidden"
    >
      {/* Background particles for depth */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#64FFDA]/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 1}px`,
              height: `${Math.random() * 6 + 1}px`,
              opacity: Math.random() * 0.5 + 0.3,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`
            }}
          />
        ))}
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute -right-32 top-10 w-96 h-96 rounded-full bg-[#9D4EDD]/5 blur-3xl"></div>
      <div className="absolute -left-32 bottom-10 w-96 h-96 rounded-full bg-[#64FFDA]/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-8 flex items-center max-w-4xl mx-auto">
            <span className="text-[#64FFDA] mr-2 font-mono">02.</span> 
            <span className="relative">
              My Tech Stack
              <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#64FFDA]/50 to-transparent"></span>
            </span>
            <span className="ml-4 h-px bg-[#495670]/50 flex-grow"></span>
          </h2>
          
          <div className="text-center mb-8 max-w-xl mx-auto">
            <p className="text-[#8892B0]">As a developer with 3 years of experience, I've worked with various technologies. Here's my current skill set and proficiency levels:</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div 
                key={skill.name}
                className={`skill-card glass-panel p-5 rounded-lg transition-all duration-700 shadow-lg transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-3">
                  <div className="bg-[#112240] p-3 rounded-lg mr-4">
                    <i className={`${skill.icon} text-3xl text-[#64FFDA]`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#CCD6F6] font-medium">{skill.name}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-[#64FFDA] text-sm">{skill.level}</span>
                      <span className="text-[#8892B0] text-xs">{skill.years}</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full mt-2">
                  <div className="relative h-2 bg-[#1E3A8A] rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-[#0A192F]/50 rounded-full grid grid-cols-5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="h-full border-r border-[#112240]"></div>
                      ))}
                    </div>
                    <div 
                      className={`h-full rounded-full relative z-10 bg-gradient-to-r from-[#64FFDA] to-[#9D4EDD] ${isVisible ? 'animate-progress-fill' : ''}`}
                      style={{ 
                        '--progress-value': `${skill.experience}%`,
                        width: isVisible ? `${skill.experience}%` : '0%',
                        boxShadow: '0 0 8px rgba(100, 255, 218, 0.5)'
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
                
                {/* Tags - optional information */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {skill.level === "Beginner" && (
                    <span className="text-xs py-1 px-2 bg-[#112240] text-[#8892B0] rounded-full">Learning</span>
                  )}
                  {skill.level === "Intermediate" && (
                    <span className="text-xs py-1 px-2 bg-[#112240] text-[#64FFDA] rounded-full">Proficient</span>
                  )}
                  {skill.level === "Advanced" && (
                    <span className="text-xs py-1 px-2 bg-[#112240] text-[#9D4EDD] rounded-full">Advanced</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional skills section - can be expanded */}
          <div className="mt-16 max-w-4xl mx-auto glass-panel p-6 rounded-lg">
            <h3 className="text-xl font-bold text-center text-[#CCD6F6] mb-4">Other Skills & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["HTML/CSS", "Tailwind CSS", "Git", "VS Code", "Figma", "REST APIs", "Responsive Design", "npm/yarn"].map((skill) => (
                <span key={skill} className="py-2 px-4 bg-[#112240] text-[#8892B0] rounded-md hover:bg-[#112240]/80 hover:text-[#64FFDA] transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Learning path - shows the developer is still growing */}
          <div className="mt-10 text-center">
            <p className="text-[#8892B0] italic">Currently learning: <span className="text-[#64FFDA]">Next.js, Three.js</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
