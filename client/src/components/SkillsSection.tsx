import { skills } from "@/data/skills";
import SkillIcon from "./SkillIcon";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-[#0A192F] relative overflow-hidden">
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
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-12 flex items-center max-w-3xl mx-auto">
          <span className="text-[#64FFDA] mr-2">02.</span> My Tech Stack
          <span className="ml-4 h-px bg-[#495670] flex-grow"></span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <SkillIcon 
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              experience={skill.experience}
              level={skill.level}
              years={skill.years}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
