import { useState } from "react";

interface SkillIconProps {
  name: string;
  level: string;
  experience: number;
  years: string;
}

export default function SkillIcon({ name,level, experience, years }: SkillIconProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="flex flex-col items-center justify-center p-6 rounded-lg bg-[#112240] hover:bg-[#112240]/80 relative group transition-transform duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#64FFDA] to-[#9D4EDD] opacity-0 group-hover:opacity-30 rounded-lg blur"></div>
      <div className="relative z-10">
        {/* <i className={`${icon} text-5xl text-[#64FFDA] mb-3`}></i> */}
        <span className="text-sm text-[#CCD6F6] text-center">{name}</span>
      </div>
      
      {/* Tooltip */}
      <div 
        className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full w-40 bg-[#112240] border border-[#64FFDA]/20 rounded-md p-2 text-xs transition-opacity duration-300 z-10 ${hovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="text-[#64FFDA] font-medium mb-1">{level}</div>
        <div className="w-full bg-[#495670] h-1.5 rounded-full">
          <div 
            className="bg-[#64FFDA] h-full rounded-full"
            style={{ width: `${experience}%` }}
          ></div>
        </div>
        <div className="mt-1 text-[#CCD6F6]">{years} experience</div>
      </div>
    </div>
  );
}
