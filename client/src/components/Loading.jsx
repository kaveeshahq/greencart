import React, { useEffect } from "react";

const Loading = ({ onComplete, nextUrl = "my-orders" }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete(nextUrl);
    }, 6000);
    return () => clearTimeout(timer);
  }, [nextUrl, onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary tracking-wide">
          GreenCart
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="w-4 h-4 bg-primary rounded-sm animate-pulse"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "1.2s",
            }}
          />
        ))}
      </div>

      <div className="mt-6">
        <p className="text-primary-dull text-sm">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
