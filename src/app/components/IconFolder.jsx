'use client';
import React, { useState, useEffect, useRef } from 'react';

// Reusable IconFolder component
const IconFolder = ({ icons, folderColor = 'bg-pink-400' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollTriggered, setIsScrollTriggered] = useState(false);
  const folderRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isScrollTriggered) {
          setIsScrollTriggered(true);
          setTimeout(() => {
            setIsOpen(true);
            // Auto-close after 5 seconds
            closeTimeoutRef.current = setTimeout(() => {
              setIsOpen(false);
            }, 2000);
          }, 200);
        }
      },
      { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (folderRef.current) {
      observer.observe(folderRef.current);
    }

    return () => {
      if (folderRef.current) {
        observer.unobserve(folderRef.current);
      }
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, [isScrollTriggered]);

  const handleInteraction = () => {
    // Clear auto-close timeout when user interacts
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={folderRef}
      className="relative group w-32 h-32 cursor-pointer"
      onTouchStart={(e) => {
        e.preventDefault();
        handleInteraction();
      }}
      onClick={(e) => {
        if (!('ontouchstart' in window)) {
          handleInteraction();
        }
      }}
    >
      {/* Icons */}
      <div className="absolute inset-0 flex items-center justify-center gap-4">
        {/* Left Icon */}
        {icons[0] && (
          <img
            src={icons[0]}
            alt="Left icon"
            className={`
              w-10 absolute left-1 top-[45%]
              transform transition-all duration-500 
              ${isOpen ? 'scale-110 -translate-x-5 -translate-y-12' : ''} 
              group-hover:scale-110 group-hover:-translate-x-5 group-hover:-translate-y-12
            `}
          />
        )}
        
        {/* Center Icon */}
        {icons[1] && (
          <img
            src={icons[1]}
            alt="Center icon"
            className={`
              w-10 left-[50%]
              transform transition-all duration-500
              ${isOpen ? 'opacity-100 scale-100 blur-0 -translate-y-12' : ''} 
              group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0
              group-hover:-translate-y-12
            `}
          />
        )}
        
        {/* Right Icon */}
        {icons[2] && (
          <img
            src={icons[2]}
            alt="Right icon"
            className={`
              w-10 absolute right-1 top-[45%]
              transform transition-all duration-500
              ${isOpen ? 'opacity-100 scale-100 blur-0 translate-x-2 -translate-y-12' : ''} 
              group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0
              group-hover:translate-x-2 group-hover:-translate-y-12
            `}
          />
        )}
      </div>

      {/* BACK FOLDER */}
      <div className={`
        absolute bottom-0 left-0 w-full h-20 opacity-90
        ${folderColor} rounded-xl shadow-xl perspective
        origin-bottom transition-all duration-300
        ${isOpen ? '[transform:perspective(1000px)_rotateX(-40deg)]' : ''} 
        hover:[transform:perspective(1000px)_rotateX(-40deg)] [transform-style:preserve-3d]
      `} />

      {/* FRONT LID */}
      <div 
        className={`
          absolute bottom-10 left-0 w-full h-16 z-10
          ${folderColor} opacity-20 rounded-xl shadow-md
          transition-all duration-500
          ${isOpen ? '-translate-y-2 [transform:perspective(1000px)_rotateX(20deg)]' : ''} 
          group-hover:-translate-y-2 group-hover:[transform:perspective(1000px)_rotateX(20deg)]
          origin-bottom [transform-style:preserve-3d]
        `}
        style={{
          clipPath: 'polygon(0 0, calc(100% - 80px) 0, 100% 100%, 0 100%)',
          borderRadius: '12px 12px 0 0'
        }} 
      />
    </div>
  );
};
export default IconFolder;