'use client';
import React, { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { Download, Briefcase, Calendar } from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDonwload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/assets/Joyanne_Resume.pdf';
    link.download = 'Joyanne_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    // Calculate navbar height (nav + tab bar ≈ 80px)
    const navbarHeight = 80;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const experiences = [
    {
      id: 1,
      company: 'Gelomics Pty Ltd',
      logo: '/assets/gelomics.png',
      position: 'Web Development Intern',
      startDate: 'Nov 2025',
      endDate: 'Jan 2026'
    },
    {
      id: 2,
      company: 'Reviewbah Sdn. Bhd.',
      logo: '/assets/reviewbah-logo.png',
      position: 'Software Development Intern',
      startDate: 'Jan 2025',
      endDate: 'June 2025'

    }
  ];

  return (
    <>
      <section id="home" className="min-h-screen font-mono flex items-center justify-center overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 mt-20 px-4">
          {/* Profile */}
          <img src="/assets/profile.jpg" alt="Profile Picture" className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover"></img>

          {/* Self description */}
          <div className="w-full md:w-auto flex-col items-center p-1">
            <div className="flex flex-col gap-2 items-center text-center">
              <h1 className="text-md md:text-lg">Hi, I'm Joyanne!</h1>
              <div className="w-full max-w-[300px] md:max-w-[480px] font-bold text-2xl md:text-4xl min-h-[40px] flex justify-center">
                {mounted && (
                  <Typewriter
                    options={{
                      strings: ['CS Student @ QUT', 'Tech Enthusiast'],
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString('CS Student @ QUT')
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  />
                )}
              </div>
              <p className="w-full max-w-[360px] text-sm mt-3 px-2">Passionate about building innovative solutions and love exploring anything related to AI and software development.</p>
            </div>
            <div className="flex gap-6 justify-center pt-5">
              <button onClick={() => scrollToSection('contact')} className="border rounded-full p-2 w-32 text-sm hover:bg-slate-100 transition-colors">
                Contact Me
              </button>
              <div className="flex border rounded-full p-2 w-32 bg-black gap-2 justify-center text-white items-center hover:bg-gray-800 transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                <button onClick={handleDonwload} className="text-white text-sm">Resume</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <div className="p-4 md:p-8 font-mono overflow-x-hidden mb-30 md:mb-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex justify-center items-center gap-4 mb-10">
            <Briefcase className="text-blue-600" size={40} />
            <h1 className="text-4xl font-bold font-mono text-slate-800">EXPERIENCE</h1>
          </div>

          {/* Timeline */}
          <div className="relative pl-8">
            {experiences.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <p className="text-slate-500 text-lg">No experience added yet</p>
              </div>
            ) : (
              <>
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                    <div
                      key={exp.id}
                      className="relative flex items-center"
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-0 transform -translate-x-1/2 z-10">
                        <div className="w-4 h-4 bg-white border-4 border-slate-700 rounded-full shadow-lg hover:scale-125 transition-transform duration-300"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-slate-700 rounded-full opacity-0 hover:opacity-20 transition-opacity duration-300 animate-ping"></div>
                      </div>

                      {/* Timeline Card */}
                      <div className="pl-6 pr-4 md:pl-8 w-full">
                        <div
                          className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
                          style={{
                            animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                          }}
                        >
                          <div className="p-4 md:p-6 flex gap-4">
                            {/* Company Logo */}
                            <div className="flex flex-col justify-start">
                              <div className="w-10 h-10 md:w-16 md:h-16 rounded-lg flex items-center justify-center bg-slate-50 group-hover:bg-slate-100 transition-colors duration-300">
                                <img
                                  src={exp.logo}
                                  alt={`${exp.company} logo`}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            </div>

                            {/* Experience details  */}
                            <div className="flex flex-col">
                              {/* Position */}
                              <h2 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                                {exp.position}
                              </h2>

                              {/* Company */}
                              <p className="text-md text-slate-600 font-medium mb-2">
                                {exp.company}
                              </p>

                              {/* Date */}
                              <div className="flex items-center gap-2 text-slate-500">
                                <Calendar size={16} />
                                <span className="text-xs md:text-sm font-mono">
                                  {exp.startDate} - {exp.endDate}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Add keyframes for animations */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </>
  )
}

export default HeroSection