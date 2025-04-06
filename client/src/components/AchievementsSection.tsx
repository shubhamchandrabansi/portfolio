import { useEffect, useState, useRef } from "react";
import { achievements, certifications, notableAchievements } from "@/data/achievements";
import AchievementCard from "./AchievementCard";

export default function AchievementsSection() {
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
      { threshold: 0.3 }
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
    <section id="achievements" className="py-20 bg-[#0A192F] relative" ref={sectionRef}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b]/50 to-[#0A192F] opacity-60"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-12 flex items-center">
          <span className="text-[#64FFDA] mr-2">04.</span> Achievements
          <span className="ml-4 h-px bg-[#495670] flex-grow"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              icon={achievement.icon}
              value={achievement.value}
              label={achievement.label}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-[#112240]/30 backdrop-blur-sm rounded-lg p-6 border border-[#495670]/50">
            <h3 className="text-xl font-bold text-[#CCD6F6] mb-6 font-['Space_Grotesk']">Certifications</h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center p-3 bg-[#0A192F]/50 rounded-md hover:bg-[#112240]/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mr-4">
                    <i className={`${cert.icon} text-[#64FFDA]`}></i>
                  </div>
                  <div>
                    <div className="text-[#CCD6F6] font-medium">{cert.title}</div>
                    <div className="text-[#8892B0] text-sm">{cert.issuer}</div>
                  </div>
                  <div className="ml-auto text-sm text-[#8892B0]">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Notable Achievements */}
          <div className="bg-[#112240]/30 backdrop-blur-sm rounded-lg p-6 border border-[#495670]/50">
            <h3 className="text-xl font-bold text-[#CCD6F6] mb-6 font-['Space_Grotesk']">Notable Achievements</h3>
            
            <div className="space-y-4">
              {notableAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start p-3 bg-[#0A192F]/50 rounded-md hover:bg-[#112240]/50 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mr-4 mt-1">
                    <i className={`${achievement.icon} text-[#64FFDA]`}></i>
                  </div>
                  <div>
                    <div className="text-[#CCD6F6] font-medium">{achievement.title}</div>
                    <div className="text-[#8892B0] text-sm">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
