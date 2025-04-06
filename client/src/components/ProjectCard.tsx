import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  detailedDescription: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
}

export default function ProjectCard({
  title,
  description,
  detailedDescription,
  techStack,
  githubLink,
  liveLink
}: ProjectCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  
  return (
    <div 
      className="h-96 rounded-lg overflow-hidden perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative h-full transition-transform duration-800 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.8s'
        }}
      >
        {/* Front Side */}
        <div 
          className="absolute w-full h-full bg-[#112240] p-6 flex flex-col backface-hidden"
          style={{
            backfaceVisibility: 'hidden'
          }}
        >
          <div className="flex justify-between items-start mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#64FFDA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <div className="flex space-x-4">
              <a href={githubLink} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href={liveLink} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
          <h3 className="text-[#CCD6F6] text-xl font-medium mb-2 font-['Space_Grotesk']">{title}</h3>
          <p className="text-[#8892B0] text-sm flex-grow">{description}</p>
          
          <div className="flex flex-wrap mt-4 gap-2">
            {techStack.map((tech, index) => (
              <span key={index} className="text-xs text-[#64FFDA] bg-[#0A192F] px-2 py-1 rounded">{tech}</span>
            ))}
          </div>
        </div>
        
        {/* Back Side */}
        <div 
          className="absolute w-full h-full bg-[#112240] p-6 flex flex-col backface-hidden rotate-y-180"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <h3 className="text-[#64FFDA] text-xl font-medium mb-4 font-['Space_Grotesk']">{title}</h3>
          
          <div className="relative w-full h-40 mb-4 overflow-hidden rounded">
            <div className="w-full h-full bg-gradient-to-br from-[#112240] to-[#0A192F] flex items-center justify-center text-[#64FFDA]/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <p className="text-[#8892B0] text-sm flex-grow">{detailedDescription}</p>
          
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
              <a href={githubLink} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              <a href={liveLink} className="text-[#8892B0] hover:text-[#64FFDA] transition-colors duration-300 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
