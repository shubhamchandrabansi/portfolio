import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#020c1b]">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-12 flex items-center">
          <span className="text-[#64FFDA] mr-2">03.</span> Featured Projects
          <span className="ml-4 h-px bg-[#495670] flex-grow"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              detailedDescription={project.detailedDescription}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-[#64FFDA] hover:text-[#57D9BC] transition-colors duration-300 group">
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
