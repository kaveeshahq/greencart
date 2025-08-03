import React, { useState, useRef, useEffect } from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={componentRef}
      className="relative mt-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center animate-fade-in-up">
        <div className="group inline-block relative cursor-pointer mb-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">
            Why You Choose <span className="text-primary">Us</span>
          </p>
          <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-dull w-0 group-hover:w-full transition-all duration-500"></span>
        </div>
    
      </div>

      <img
        src={assets.bottom_banner_image}
        alt="bbimage"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="bbimage"
        className="w-full md:hidden"
      />

      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
        <div>
          <h1 className={`text-2xl md:text-3xl font-semibold text-primary mb-6 transition-all duration-800 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className={`inline-block transition-all duration-300 ${isHovered ? 'animate-slide-in-right' : ''}`} style={{animationDelay: isHovered ? '0.1s' : '0s'}}>Why</span>{" "}
            <span className={`inline-block transition-all duration-300 ${isHovered ? 'animate-slide-in-right' : ''}`} style={{animationDelay: isHovered ? '0.2s' : '0s'}}>We</span>{" "}
            <span className={`inline-block transition-all duration-300 ${isHovered ? 'animate-slide-in-right' : ''}`} style={{animationDelay: isHovered ? '0.3s' : '0s'}}>Are</span>{" "}
            <span className={`inline-block transition-all duration-300 ${isHovered ? 'animate-slide-in-right' : ''}`} style={{animationDelay: isHovered ? '0.4s' : '0s'}}>the</span>{" "}
            <span className={`inline-block transition-all duration-300 ${isHovered ? 'animate-slide-in-right' : ''}`} style={{animationDelay: isHovered ? '0.5s' : '0s'}}>Best</span>{" "}
            <span className={`inline-block transition-all duration-300 ${isHovered ? 'animate-slide-in-right' : ''}`} style={{animationDelay: isHovered ? '0.6s' : '0s'}}>?</span>
          </h1>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group flex items-center gap-4 mt-2 transition-all duration-300 hover:bg-black/5 hover:scale-105 active:scale-95 rounded-lg p-2 cursor-pointer transform hover:shadow-md ${
                isVisible ? 'animate-fade-in-right' : 'opacity-0'
              } ${isHovered ? 'animate-enhanced-hover' : ''}`}
              style={{animationDelay: isVisible ? `${0.2 + (index * 0.15)}s` : '0s'}}
            >
              <div className="relative overflow-hidden rounded-full">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="md:w-11 w-9 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-active:scale-90"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-full"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold transition-all duration-300 group-hover:font-bold group-hover:tracking-wide group-hover:text-primary">
                  <span className="inline-block transition-all duration-200 group-hover:animate-letter-bounce">
                    {feature.title}
                  </span>
                </h3>
                <p className="text-gray-500/70 text-xs md:text-sm transition-all duration-300 group-hover:text-gray-600 group-hover:font-medium">
                  <span className="inline-block transition-all duration-300 group-hover:translate-x-1">
                    {feature.description}
                  </span>
                </p>
              </div>
              <div className="w-0 h-full bg-primary transition-all duration-300 group-hover:w-1 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-right {
          0% {
            transform: translateX(0) scale(1);
          }
          50% {
            transform: translateX(10px) scale(1.1);
          }
          100% {
            transform: translateX(0) scale(1);
          }
        }

        @keyframes fade-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes letter-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        @keyframes pulse-icon {
          0%, 100% {
            transform: scale(1.1) rotate(6deg);
          }
          50% {
            transform: scale(1.15) rotate(3deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.6s ease-out forwards;
        }

        .animate-letter-bounce {
          animation: letter-bounce 0.4s ease-in-out;
        }

        .animate-enhanced-hover .group:hover img {
          animation: pulse-icon 0.6s ease-in-out;
        }

        .animate-enhanced-hover .group:hover h3 span {
          display: inline-block;
          animation: letter-bounce 0.4s ease-in-out;
        }

        .animate-enhanced-hover .group:hover p span {
          animation: slide-description 0.4s ease-out;
        }

        @keyframes slide-description {
          0% {
            transform: translateX(0);
            opacity: 0.7;
          }
          100% {
            transform: translateX(4px);
            opacity: 1;
          }
        }

        .group:active::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(var(--primary-rgb, 59, 130, 246), 0.3);
          transform: translate(-50%, -50%);
          animation: ripple 0.6s ease-out;
        }

        @keyframes ripple {
          to {
            width: 300px;
            height: 300px;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BottomBanner;
