'use client';
import React from 'react'
import { User, Code, Wrench, Mail, ChevronRight, Linkedin, Github } from 'lucide-react';
import { useState, useEffect } from 'react';

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'skills', 'projects', 'contact'];
            const navbarHeight = 80; // Adjust this to match your navbar height

            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Check if section is in view, accounting for navbar
                    return rect.top <= navbarHeight + 50 && rect.bottom >= navbarHeight + 50;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Call once to set initial state
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
    return <>
        <div className="font-mono">
            {/* Chrome Tabs Style Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-gray-800 shadow-xl z-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end h-12 px-2 bg-gray-900">
                        {/* Logo/Brand on the left */}
                        <div className="flex items-center px-4 pb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                    <Code className="text-white" size={14} />
                                </div>
                                <span className="font-bold text-white text-sm hidden lg:inline">Portfolio</span>
                            </div>
                        </div>

                        {/* Chrome-style tabs */}
                        <div className="flex items-end flex-1 overflow-x-auto scrollbar-hide">
                            {[
                                { id: 'home', icon: User, label: 'About' },
                                { id: 'skills', icon: Wrench, label: 'Skills' },
                                { id: 'projects', icon: Code, label: 'Projects' },
                                { id: 'contact', icon: Mail, label: 'Contact' }
                            ].map(({ id, icon: Icon, label }, index) => (
                                <button
                                    key={id}
                                    onClick={() => scrollToSection(id)}
                                    className={`relative group flex items-center gap-4 px-4 py-2 transition-all duration-200 ${activeSection === id
                                        ? 'bg-gray-800 text-white'
                                        : 'bg-gray-700 text-gray-400 hover:bg-gray-750 hover:text-gray-200'
                                        }`}
                                    style={{
                                        clipPath: activeSection === id
                                            ? 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 100%, 0% 100%)'
                                            : 'polygon(8px 0%, calc(100% - 8px) 0%, calc(100% - 4px) 100%, 4px 100%)',
                                        marginLeft: index === 0 ? '0' : '-8px',
                                        zIndex: activeSection === id ? 10 : 1,
                                        minWidth: '120px'
                                    }}
                                >
                                    {/* Tab highlight */}
                                    {activeSection === id && (
                                        <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500" />
                                    )}

                                    <Icon size={16} className={activeSection === id ? 'text-blue-400' : ''} />
                                    <span className="text-sm font-medium whitespace-nowrap">{label}</span>

                                    {/* Close button (just for aesthetics) */}
                                    <div className={`ml-auto opacity-0 group-hover:opacity-100 transition-opacity ${activeSection === id ? 'text-gray-400' : 'text-gray-500'
                                        }`}>
                                        <div className="w-4 h-4 rounded-full hover:bg-gray-600 flex items-center justify-center text-xs">
                                            ×
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right side actions */}
                        <div className="flex items-center gap-2 px-2 pb-2">
                            <button className="w-8 h-8 rounded hover:bg-gray-700 flex items-center justify-center transition-colors">
                                <div className="text-gray-400 text-xl">+</div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tab content bar */}
                <div className="bg-gray-800 border-t border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-400 text-xs">
                            <div className="w-4 h-4 rounded-full bg-gray-700 flex items-center justify-center">
                                <ChevronRight size={12} />
                            </div>
                            <span className="hidden sm:inline">
                                {activeSection === 'home'}
                                {activeSection === 'skills'}
                                {activeSection === 'projects'}
                                {activeSection === 'contact'}
                            </span>
                        </div>
                        <div className="flex-1" />
                        <div className="flex gap-5 mr-3">
                            <a href="https://github.com/Joyanne05" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/joyanne-poong/" className="text-gray-400 hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </>
}

export default NavBar