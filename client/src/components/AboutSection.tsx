export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#020c1b]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-2 flex items-center">
              <span className="text-[#64FFDA] mr-2">01.</span> About Me
              <span className="ml-4 h-px bg-[#495670] flex-grow"></span>
            </h2>
            
            <div className="mt-6 space-y-4 text-[#8892B0]">
              <p>Hello! I'm John, a software developer passionate about building exceptional digital experiences. With over 8 years of experience in the industry, I've worked on a wide range of projects, from web applications to enterprise systems.</p>
              
              <p>My journey in software development began when I built my first website at 14. Since then, I've been captivated by the endless possibilities that code brings to solve real-world problems.</p>
              
              <p>Today, I run my own software development company where we focus on creating scalable, high-performance applications that deliver tangible business value.</p>
              
              <p>Here are a few technologies I've been working with recently:</p>
              
              <div className="grid grid-cols-2 gap-2 max-w-md mt-4">
                {[
                  "React & Next.js",
                  "Node.js",
                  "TypeScript",
                  "GraphQL",
                  "AWS & Cloud Services",
                  "Docker & Kubernetes"
                ].map((tech, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-[#64FFDA] mr-2">▹</div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative group">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 border-2 border-[#64FFDA] rounded-md translate-x-5 translate-y-5 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-300"></div>
              <div className="absolute inset-0 bg-[#9D4EDD]/20 rounded-md"></div>
              <div
                className="relative z-10 w-full h-full rounded-md bg-gradient-to-br from-[#112240] to-[#0A192F]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
