import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#020c1b]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-[#CCD6F6] font-['Space_Grotesk'] mb-4 flex items-center justify-center">
            <span className="text-[#64FFDA] mr-2">05.</span> Get In Touch
          </h2>
          <p className="text-[#8892B0]">Have a project in mind or just want to chat? Feel free to reach out!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-[#112240]/50 rounded-lg p-6 border border-[#495670]/50 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#64FFDA] to-[#9D4EDD] opacity-20 rounded-lg blur"></div>
            <div className="relative">
              <ContactForm />
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#CCD6F6] mb-4 font-['Space_Grotesk']">Contact Information</h3>
                <p className="text-[#8892B0] mb-6">Feel free to contact me through any of these channels. I'm typically available during business hours (9 AM - 6 PM EST).</p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#64FFDA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:john@example.com" className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300">john@example.com</a>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#64FFDA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="text-[#CCD6F6]">San Francisco, CA</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#64FFDA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="#" className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors duration-300">Schedule a Meeting</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#CCD6F6] mb-4 font-['Space_Grotesk']">Connect With Me</h3>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-[#112240] border border-[#495670] flex items-center justify-center hover:bg-[#64FFDA]/10 hover:border-[#64FFDA] transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#112240] border border-[#495670] flex items-center justify-center hover:bg-[#64FFDA]/10 hover:border-[#64FFDA] transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#112240] border border-[#495670] flex items-center justify-center hover:bg-[#64FFDA]/10 hover:border-[#64FFDA] transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-[#112240] border border-[#495670] flex items-center justify-center hover:bg-[#64FFDA]/10 hover:border-[#64FFDA] transition-colors duration-300 group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#CCD6F6] group-hover:text-[#64FFDA] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-0 relative hidden md:block">
              <div className="w-full h-48 bg-[#112240]/30 rounded-lg border border-[#495670]/50 flex items-center justify-center">
                <div className="animate-bounce">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-[#64FFDA]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
