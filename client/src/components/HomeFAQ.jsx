import React from "react";
import { Link } from "react-router-dom";
import faqImage from "../assets/faq.png";

const HomeFAQ = () => {
  const supportFeatures = [
    {
      icon: "🕒",
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "Average response time under 5 minutes",
    },
    {
      icon: "💬",
      title: "Live Chat",
      description: "Instant help through our chat system",
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Direct line to our support team",
    },
  ];

  return (
    <div className="mt-24 pb-20 px-4 md:px-16 space-y-20 overflow-hidden">
      {/* Header Section */}
      <div className="text-center animate-fade-in-up">
        <div className="group inline-block relative cursor-pointer mb-6">
          <p className="text-3xl md:text-4xl font-bold text-gray-800">
            Help and Support <span className="text-primary">FAQs</span>
          </p>
          <span className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary-dull w-0 group-hover:w-full transition-all duration-500"></span>
        </div>
        <p
          className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          Get instant answers to your questions and discover how we can make
          your shopping experience even better
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
        {/* Image Section */}
        <div
          className="w-full lg:w-1/2 flex justify-center animate-slide-in-left opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dull/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 transform group-hover:scale-110"></div>
            <img
              src={faqImage}
              alt="FAQ Illustration"
              className="relative max-w-full h-auto object-contain transform group-hover:scale-105 transition-all duration-300 drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Content Section */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 animate-slide-in-right opacity-0"
          style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Frequently Asked{" "}
            <span className="text-primary">User Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
            Find quick answers to common questions and get assistance whenever
            you need help. Our comprehensive FAQ section covers everything from
            ordering to delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              to="/faq"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-primary-dull text-white font-semibold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden inline-block text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              <span className="relative z-10 transition-all duration-300 group-hover:font-bold">
                Browse All FAQs
              </span>
            </Link>

            <Link
              to={"/contact-us"}
              className="group relative px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">Contact Support</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Support Features Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up opacity-0"
        style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
      >
        {supportFeatures.map((feature, index) => (
          <div
            key={index}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 text-center transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
          >
            <div className="text-4xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {feature.description}
            </p>
          </div>
        ))}
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
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
        }

        .group:hover {
          animation: subtle-float 3s ease-in-out infinite;
        }

        @keyframes subtle-float {
          0%,
          100% {
            transform: translateY(0) scale(1.05);
          }
          50% {
            transform: translateY(-2px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default HomeFAQ;
