import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-6 md:pb-0 px-4 md:pl-18 lg:pl-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 animate-fade-in-up">
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            Freshness
          </span>{" "}
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            You
          </span>{" "}
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            Can
          </span>{" "}
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Trust
          </span>{" "}
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            ,
          </span>{" "}
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Savings
          </span>{" "}
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            You
          </span>{" "}
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            will
          </span>{" "}
          <span
            className="inline-block animate-slide-in-left opacity-0"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            Love!
          </span>
        </h1>

        <div
          className="flex items-center mt-6 font-medium animate-fade-in-up opacity-0 gap-6"
          style={{ animationDelay: "1.0s", animationFillMode: "forwards" }}
        >
          <Link
            to={"/products"}
            className="group relative flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition-all duration-300 rounded text-white cursor-pointer overflow-hidden transform hover:scale-105 hover:shadow-lg active:scale-95"
          >
            {/* Button shine effect */}
            <div className="  absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

            <span className="relative z-10 transition-all duration-300 group-hover:font-semibold group-hover:tracking-wide">
              Shop Now
            </span>
            <img
              className="md:hidden relative z-10 transition-all duration-300 group-focus:translate-x-1 group-hover:translate-x-1 group-hover:scale-110 group-active:scale-90 group-hover:rotate-6"
              src={assets.white_arrow_icon}
            />
          </Link>

          <Link
            to={"/products"}
            className="group relative hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer transition-all duration-300 hover:bg-black/5 rounded-lg transform hover:scale-105 active:scale-95"
          >
            {/* Animated underline effect */}
            <div className="absolute bottom-2 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></div>

            {/* Background glow effect */}
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 rounded-lg"></div>

            <span className="relative transition-all duration-300 group-hover:font-semibold group-hover:tracking-wide">
              Explore Deals
            </span>
            <img
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 group-active:scale-90 group-hover:rotate-6"
              src={assets.black_arrow_icon}
            />
          </Link>
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

        @keyframes slide-in-left {
          0% {
            opacity: 0;
            transform: translateX(-30px) scale(0.8);
          }
          60% {
            transform: translateX(5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)
            forwards;
        }

        /* Enhanced button hover effects */
        .group:hover span {
          animation: letter-bounce 0.3s ease-in-out;
        }

        @keyframes letter-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
        }

        /* Pulse effect for buttons */
        .group:hover {
          animation: pulse-subtle 1.5s infinite;
        }

        @keyframes pulse-subtle {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }
      `}</style>
    </div>
  );
};

export default MainBanner;
