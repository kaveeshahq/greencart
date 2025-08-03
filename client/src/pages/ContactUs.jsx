import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    contactNumber: '',
    email: '',
    comments: ''
  });

  const [focusedField, setFocusedField] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="px-6 md:px-24 py-12 space-y-16 overflow-hidden">
            {/* Breadcrumb */}
        <nav className="mb-8 animate-fade-in-up">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">Get in Touch</span>
          </div>
        </nav>
      {/* Header Content */}
      <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 animate-slide-in-down">
          <span className="inline-block animate-bounce-in opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>Here</span>{" "}
          <span className="inline-block animate-bounce-in opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>to</span>{" "}
          <span className="inline-block animate-bounce-in opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>help!</span>
        </h1>
        <div className="space-y-4 animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
          <p className="text-gray-700 text-lg leading-relaxed">
            Your feedback and enquiry is important to us, so we will endeavour to respond to you at our earliest. Your feedback will help us continuously improve ourselves to make it better for you and our other valued Customers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            In the meantime if your enquiry is urgent and you require immediate assistance, our Customer Care team is here to assist you (Refer below for other ways to contact us)
          </p>
        </div>
      </div>

      {/* Contact Info Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Address", content: "123 Food Street, Food City", icon: "📍" },
          { title: "Email", content: "support@foodcity.com", icon: "✉️" },
          { title: "Telephone", content: "+1 (234) 567-890", icon: "📞" },
          { title: "Fax", content: "+1 (234) 567-891", icon: "📠" },
        ].map((tile, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-[#4FBF8B] to-[#3da66f] text-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer animate-slide-in-up opacity-0 overflow-hidden"
            style={{animationDelay: `${0.8 + index * 0.1}s`, animationFillMode: 'forwards'}}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            
            {/* Floating icon */}
            <div className="text-3xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
              {tile.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-3 relative z-10 group-hover:font-bold transition-all duration-300">
              {tile.title}
            </h3>
            <p className="relative z-10 group-hover:font-medium transition-all duration-300">
              {tile.content}
            </p>
            
            {/* Subtle pulse ring */}
            <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto animate-fade-in-up opacity-0" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            Get In Touch
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('firstName')}
                  onBlur={() => setFocusedField('')}
                  className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#4FBF8B] focus:ring-2 focus:ring-[#4FBF8B]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#4FBF8B] to-[#3da66f] transition-all duration-300 ${focusedField === 'firstName' ? 'w-full' : 'w-0'}`}></div>
              </div>
              <div className="relative group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('lastName')}
                  onBlur={() => setFocusedField('')}
                  className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#4FBF8B] focus:ring-2 focus:ring-[#4FBF8B]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
                />
                <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#4FBF8B] to-[#3da66f] transition-all duration-300 ${focusedField === 'lastName' ? 'w-full' : 'w-0'}`}></div>
              </div>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('address')}
                onBlur={() => setFocusedField('')}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#4FBF8B] focus:ring-2 focus:ring-[#4FBF8B]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#4FBF8B] to-[#3da66f] transition-all duration-300 ${focusedField === 'address' ? 'w-full' : 'w-0'}`}></div>
            </div>
            
            <div className="relative group">
              <input
                type="text"
                name="contactNumber"
                placeholder="Contact Number"
                value={formData.contactNumber}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('contactNumber')}
                onBlur={() => setFocusedField('')}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#4FBF8B] focus:ring-2 focus:ring-[#4FBF8B]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#4FBF8B] to-[#3da66f] transition-all duration-300 ${focusedField === 'contactNumber' ? 'w-full' : 'w-0'}`}></div>
            </div>
            
            <div className="relative group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField('')}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#4FBF8B] focus:ring-2 focus:ring-[#4FBF8B]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white"
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#4FBF8B] to-[#3da66f] transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
            </div>
            
            <div className="relative group">
              <textarea
                name="comments"
                placeholder="Comments"
                rows="5"
                value={formData.comments}
                onChange={handleInputChange}
                onFocus={() => setFocusedField('comments')}
                onBlur={() => setFocusedField('')}
                className="border-2 border-gray-200 rounded-xl px-4 py-3 w-full transition-all duration-300 focus:border-[#4FBF8B] focus:ring-2 focus:ring-[#4FBF8B]/20 focus:outline-none hover:border-gray-300 bg-gray-50 focus:bg-white resize-none"
              ></textarea>
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#4FBF8B] to-[#3da66f] transition-all duration-300 ${focusedField === 'comments' ? 'w-full' : 'w-0'}`}></div>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="group relative px-12 py-4 bg-gradient-to-r from-[#4FBF8B] to-[#3da66f] text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                
                <span className="relative z-10 transition-all duration-300 group-hover:font-bold group-hover:tracking-wide">
                  Send Message
                </span>
                
                {/* Pulse ring effect */}
                <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
              </button>
            </div>
          </form>
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

        @keyframes slide-in-down {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-up {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(-30px) scale(0.3);
          }
          50% {
            transform: translateY(5px) scale(1.1);
          }
          70% {
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-slide-in-down {
          animation: slide-in-down 0.8s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        /* Enhanced input focus effects */
        input:focus, textarea:focus {
          transform: translateY(-2px);
        }

        /* Subtle floating animation for contact tiles */
        .group:hover {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1.05);
          }
          50% {
            transform: translateY(-5px) scale(1.05);
          }
        }

        /* Button press effect */
        button:active {
          transform: scale(0.95) translateY(2px);
        }
      `}</style>
    </div>
  );
};

export default ContactUs;