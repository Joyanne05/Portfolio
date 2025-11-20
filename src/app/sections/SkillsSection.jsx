import React from 'react'
import IconFolder from '../components/IconFolder';
import { Code, Info } from 'lucide-react';

const SkillsSection = () => {
    return (
        <section id="skills" className="h-200 md:h-100 flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3">
                        <Code className="text-blue-600" size={40} />
                        <h2 className="text-4xl font-bold text-gray-900 font-mono">SKILLS</h2>
                    </div>
                    <div className="flex gap-2 ">
                        <div className="flex items-center">

                        <Info size={15} className="text-neutral-500" />
                        </div>
                        <p className="font-mono text-neutral-500 text-sm">Hover on laptop / Tap on mobile to interact!</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-10 md:gap-30 justify-center mt-5 md:mt-10">
                    {/* React folder */}
                    <div className="flex flex-col items-center">
                        <IconFolder
                            icons={[
                                '/assets/react.png',
                                '/assets/tailwind-css.png',
                                '/assets/nextjs.png'
                            ]}
                            folderColor="bg-pink-400"
                        />
                        <h2 className="font-mono text-xl font-semibold pt-4">Front-end Development</h2>
                        <p className="font-mono text-xs">React.js, Tailwind CSS, Next.js</p>
                    </div>


                    {/* Different colored folder with different icons */}
                    <div className="flex flex-col items-center">
                        <IconFolder
                            icons={[
                                '/assets/fastapi.png',
                                '/assets/nodejs.png',
                                '/assets/expressjs.png'
                            ]}
                            folderColor="bg-blue-400"
                        />
                        <h2 className="font-mono text-xl font-semibold pt-4">Back-end Development</h2>
                        <p className="font-mono text-xs">FastAPI, Node.js, Express.js</p>

                    </div>

                    {/* Another variation */}
                    <div className="flex flex-col items-center">
                        <IconFolder
                            icons={[
                                '/assets/flutter.png',
                                '/assets/react.png',
                                // '/assets/react.png'
                            ]}
                            folderColor="bg-purple-400"
                        />
                        <h2 className="font-mono text-xl font-semibold pt-4">Mobile Development</h2>
                        <p className="font-mono text-xs">Flutter, React Native</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SkillsSection