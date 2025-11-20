'use client';
import React from 'react'
import { Code, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
    const [expandedProject, setExpandedProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Youtube Gesture Controller',
            summary: 'Use hand gestures to control YouTube playback functions such as open palm, fist and pointer finger',
            approach: 'Python (OpenCV, MediaPipe, PyAutoGUI)',
            challenges: 'Mapping hand landmarks to specific actions and ensuring responsiveness through trial and error',
            githublink: 'https://github.com/Joyanne05/YoutubeGestureController'
        },
        {
            id: 2,
            title: 'Jom Travel',
            summary: 'AI-powered travel planner mobile app that generates itineraries',
            approach: 'React Native, Firebase (Auth + Firestore), Gemini',
            challenges: 'Training Gemini modelto output structured and consistent itinerary formats by adjusting the temperature',
            githublink: 'https://github.com/Joyanne05/JomTravel'
        },
        {
            id: 3,
            title: 'Website Portfolio',
            summary: 'Personal portoflio website to showcase my projects, skills and creative identity',
            approach: 'Next.js (Page Router), React.js, Tailwind CSS',
            challenges: '',
            githublink: 'https://github.com/Joyanne05/Portfolio'
        }
    ];

    return <>
        {/* Projects Section - IDE Style */}
        <section id="projects" className="py-10 px-6 md:px-30">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <Code className="text-blue-600" size={40} />
                    <h2 className="text-4xl font-bold text-gray-900 font-mono">PROJECTS</h2>
                </div>

                {/* IDE Container */}
                <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border-4 border-gray-800">
                    {/* IDE Top Bar */}
                    <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
                        <div className="flex gap-2">
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500" />
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500" />
                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="ml-4 text-gray-400 text-sm font-mono">
                            {expandedProject ? projects.find(p => p.id === expandedProject)?.title : 'Select a project'}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row" style={{ minHeight: '300px' }}>
                        {/* Left Sidebar - File Explorer */}
                        <div className="w-80 md:w-70 bg-gray-800 border-r border-gray-700 overflow-y-auto">
                            {/* Explorer Header */}
                            <div className="px-4 py-3 bg-gray-750 border-b border-gray-700">
                                <div className="text-xs text-gray-400 uppercase font-mono tracking-wider">
                                    Explorer
                                </div>
                            </div>

                            {/* Project Files */}
                            <div className="py-2">
                                <div className="px-4 py-1 text-xs text-gray-400 font-mono uppercase">
                                    PROJECTS
                                </div>
                                {projects.map((project) => (
                                    <div
                                        key={project.id}
                                        onClick={() => setExpandedProject(project.id)}
                                        className={`px-4 py-2 cursor-pointer font-mono text-sm transition-all flex items-center gap-2 hover:bg-gray-700 ${expandedProject === project.id
                                            ? 'bg-gray-700 text-white border-l-2 border-blue-500'
                                            : 'text-gray-300'
                                            }`}
                                    >
                                        <FileText size={16} className={expandedProject === project.id ? 'text-blue-400' : 'text-gray-500'} />
                                        <span>{project.title.toLowerCase().replace(/\s+/g, '_')}.md</span>
                                    </div>
                                ))}
                            </div>

                            {/* Additional Sections */}
                            {/* <div className="mt-4 border-t border-gray-700 pt-2">
                                <div className="px-4 py-2 text-xs text-gray-400 font-mono uppercase">
                                    Quick Links
                                </div>
                                <div className="px-4 py-2 text-gray-400 font-mono text-sm flex items-center gap-2 hover:text-gray-300 cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                    <a href="https://github.com/Joyanne05">GitHub Repository</a>
                                </div>
                            </div> */}
                        </div>

                        {/* Code Editor View */}
                        <div className="flex-1 bg-gray-900 overflow-y-auto">
                            {expandedProject ? (
                                <div className="p-3">
                                    {(() => {
                                        const project = projects.find(p => p.id === expandedProject);
                                        return (
                                            <div className="font-mono text-xs md:text-sm">
                                                {/* File Header */}
                                                <div className="flex gap-2 mb-2 pl-2 pb-2.5 border-b border-gray-700">
                                                    <FileText className="text-blue-400" size={20} />
                                                    <span className="text-gray-400">{project.title.toLowerCase().replace(/\s+/g, '_')}.md</span>
                                                </div>

                                                {/* Line Numbers and Content */}
                                                <div className="flex">
                                                    {/* Line Numbers */}
                                                    <div className="hidden md:block text-gray-600 text-right pr-4 select-none leading-6" style={{ minWidth: '40px' }}>
                                                        {Array.from({ length: 15 }, (_, i) => (
                                                            <div key={i} className="leading-6">{i + 1}</div>
                                                        ))}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="flex-1 text-gray-300 leading-6">
                                                        {/* <div className="leading-6">
                                                            <span className="text-blue-400">#</span>
                                                            <span className="text-blue-400 font-bold"> {project.title}</span>
                                                        </div> */}

                                                        <div className="leading-6">
                                                            <span className="text-purple-400">##</span>
                                                            <span className="text-green-400"> Summary</span>
                                                        </div>
                                                        <div className="text-gray-400 leading-6">
                                                            {project.summary}
                                                        </div>
                                                        <div className="leading-6">&nbsp;</div>

                                                        <div className="leading-6">
                                                            <span className="text-purple-400">##</span>
                                                            <span className="text-green-400"> Technical Approach</span>
                                                        </div>
                                                        <div className="text-gray-400 leading-6">
                                                            <span className="text-yellow-400 leading-6">*Tech Stack:*</span> {project.approach}
                                                        </div>
                                                        <div className="leading-6">&nbsp;</div>

                                                        <div className="leading-6">
                                                            {project.challenges ? (
                                                                <>
                                                                    <div className="leading-6">
                                                                        <span className="text-purple-400">##</span>
                                                                        <span className="text-green-400"> Challenges & Solutions</span>
                                                                    </div>
                                                                    <div className="text-gray-400 leading-6">
                                                                        {project.challenges}
                                                                    </div>
                                                                </>
                                                            ) : null}
                                                        </div>
                                                        <div className="leading-6">&nbsp;</div>

                                                        {/* <div className="leading-6">
                                                            <span className="text-purple-400">##</span>
                                                            <span className="text-green-400"> Demo Features</span>
                                                        </div>
                                                        <div className="bg-gray-800 border border-gray-700 rounded p-4">
                                                            <code className="text-green-300 leading-6">{project.demo}</code>
                                                        </div>
                                                        <div className="leading-6">&nbsp;</div> */}

                                                        <div className="leading-6 flex gap-3">
                                                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-xs flex items-center gap-2 transition-colors">
                                                                <ExternalLink size={14} />
                                                                <a href={project.githublink}>View Code</a>
                                                            </button>
                                                            {/* <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-xs flex items-center gap-2 transition-colors">
                                                                <a href={project.githublink}>View Code</a>
                                                            </button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            ) : (
                                <div className="h-50 flex items-center justify-center text-gray-500 font-mono">
                                    <div className="text-center">
                                        <Code size={64} className="mx-auto mb-4 opacity-50" />
                                        <p className="text-xs md:text-sm">Select a project from the explorer to view details</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="bg-blue-600 px-4 py-1 flex items-center justify-between text-xs font-mono text-white">
                        <div className="flex items-center gap-4">
                            <span className="hidden md:block">◉ Main</span>
                            <span className="hidden md:block">⚠ 0</span>
                            <span className="hidden md:block">✓ {projects.length} Projects</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="hidden md:block">UTF-8</span>
                            <span className="hidden md:block">Markdown</span>
                            <span className="hidden md:block">Ln 1, Col 1</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default ProjectsSection


