import { useEffect, useState } from "react";

interface AchievementCardProps {
  value: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

export default function AchievementCard({ value, label, isVisible, delay }: AchievementCardProps) {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(value.replace('+', ''));
  
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = targetValue / 50; // Adjust for animation speed
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          start += increment;
          if (start >= targetValue) {
            setCount(targetValue);
            clearInterval(interval);
          } else {
            setCount(Math.floor(start));
          }
        }, 30);
        
        return () => clearInterval(interval);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, targetValue, delay]);
  
  return (
    <div className="bg-[#112240]/50 backdrop-blur-sm rounded-lg p-6 border border-[#495670]/50 transform hover:scale-105 transition-transform duration-300">
      <div className="flex flex-col items-center">
        {/* <div className="w-16 h-16 rounded-full bg-[#64FFDA]/10 flex items-center justify-center mb-4">
          <i className={`${icon} text-[#64FFDA] text-3xl`}></i>
        </div> */}
        
        <div className="text-4xl font-bold text-[#64FFDA] mb-2 font-['Space_Grotesk']">
          {isVisible ? `${count}+` : '0+'}
        </div>
        
        <div className="text-sm text-[#CCD6F6] text-center">{label}</div>
      </div>
    </div>
  );
}
