import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import delivery_banner_image from "../assets/delivery_banner_image.png";

const DeliverySection = () => {
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
            Fast <span className="text-primary">Delivery</span>
          </p>
          <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-dull w-0 group-hover:w-full transition-all duration-500"></span>
        </div>
      </div>

      {/* Full-width background image for desktop */}
      <div className="hidden md:block relative min-h-[500px] lg:min-h-[600px]">
        <img
          src={delivery_banner_image}
          alt="Delivery Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16 lg:pl-24">
          <div
            className={`max-w-2xl text-white transition-all duration-800 ${
              isVisible ? "animate-fade-in-left" : "opacity-0"
            }`}
          >
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-500 ${
                isHovered ? "animate-title-enhance" : ""
              }`}
            >
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Fast
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                &
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Reliable
              </span>{" "}
              <br className="hidden lg:block" />
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Food
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Delivery
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl mb-8 max-w-lg transition-all duration-500 text-white/90 ${
                isHovered ? "text-white transform translate-x-1" : ""
              }`}
            >
              <span className="inline-block transition-all duration-300">
                Get your favorite meals delivered right to your doorstep. Enter
                your address to check delivery availability and enjoy fresh, hot
                food in no time.
              </span>
            </p>
            <Link
              to="/add-address"
              className="group relative inline-block bg-primary text-white px-10 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl active:scale-95 overflow-hidden font-semibold text-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10 transition-all duration-300 group-hover:font-bold group-hover:tracking-wide">
                Add Your Delivery Address
              </span>
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
            </Link>
            <div
              className={`mt-8 flex gap-3 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-primary/70 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-primary/50 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
        <div
          className={`absolute top-8 right-8 w-4 h-4 bg-primary rounded-full transition-all duration-500 ${
            isHovered ? "opacity-100 animate-bounce" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        ></div>
        <div
          className={`absolute bottom-12 right-16 w-3 h-3 bg-primary/60 rounded-full transition-all duration-500 ${
            isHovered ? "opacity-100 animate-bounce" : "opacity-0"
          }`}
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className={`absolute top-1/2 right-12 w-2 h-2 bg-primary/40 rounded-full transition-all duration-500 ${
            isHovered ? "opacity-100 animate-bounce" : "opacity-0"
          }`}
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Mobile layout - keep original card style */}
      <div className="md:hidden px-4">
        <div className="flex flex-col items-center gap-8">
          <div
            className={`w-full transition-all duration-800 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="relative group overflow-hidden rounded-xl">
              <img
                src={delivery_banner_image}
                alt="Delivery Banner"
                className="w-full rounded-xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
            </div>
          </div>
          <div
            className={`w-full text-center transition-all duration-800 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <h1
              className={`text-2xl font-semibold text-primary mb-4 transition-all duration-500 ${
                isHovered ? "animate-title-enhance" : ""
              }`}
            >
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Fast
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                &
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Reliable
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Food
              </span>{" "}
              <span className="inline-block transition-all duration-300 hover:scale-105">
                Delivery
              </span>
            </h1>
            <p
              className={`text-gray-600 mb-6 transition-all duration-500 ${
                isHovered ? "text-gray-700 transform translate-y-1" : ""
              }`}
            >
              <span className="inline-block transition-all duration-300">
                Get your favorite meals delivered right to your doorstep. Enter
                your address to check delivery availability and enjoy fresh, hot
                food in no time.
              </span>
            </p>
            <Link
              to="/add-address"
              className="group relative inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95 overflow-hidden font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10 transition-all duration-300 group-hover:font-semibold group-hover:tracking-wide">
                Add Your Delivery Address
              </span>
              <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/20 transition-all duration-300"></div>
            </Link>
            <div
              className={`mt-6 flex justify-center gap-2 transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-primary/50 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-primary/70 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-left {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

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

        @keyframes title-enhance {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-title-enhance span:hover {
          animation: title-enhance 0.4s ease-in-out;
        }

        .group:hover .animate-float {
          animation: float 2s ease-in-out infinite;
        }

        .group:hover {
          animation: button-pulse 1.5s infinite;
        }

        @keyframes button-pulse {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }

        .group:hover img {
          transform: scale(1.05) translateY(-5px);
        }

        .md\:block:hover img {
          transform: scale(1.02);
          transition: transform 0.8s ease-out;
        }

        .animate-text-slide {
          animation: text-slide 0.6s ease-out;
        }

        @keyframes text-slide {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(5px);
          }
          100% {
            transform: translateX(4px);
          }
        }

        .animate-float-elements {
          animation: float-gentle 3s ease-in-out infinite;
        }

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(2deg);
          }
          66% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default DeliverySection;
