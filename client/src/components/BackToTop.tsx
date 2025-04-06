interface BackToTopProps {
  visible: boolean;
}

export default function BackToTop({ visible }: BackToTopProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`w-12 h-12 rounded-full bg-[#112240] border border-[#64FFDA] text-[#64FFDA] flex items-center justify-center ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300 hover:bg-[#64FFDA] hover:text-[#0A192F]`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
