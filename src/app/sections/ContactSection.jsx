'use client';
import React, { useState } from 'react'
import { FileText, Github, Linkedin, Mail, X } from 'lucide-react'

const ContactSection = () => {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "62b517ff-df61-46e9-8deb-460e38f83684");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            setShowSuccessPopup(true);
            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    return (
        <>
            {/* Contact Section - Contact Form Document */}
            <section id="contact" className="py-20 px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 mb-12 justify-center">
                        <FileText className="text-blue-600" size={40} />
                        <h2 className="text-4xl font-bold text-gray-900 font-mono">CONTACT.txt</h2>
                    </div>

                    <div className="bg-white rounded-sm shadow-2xl relative" style={{
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.6)'
                    }}>

                        <div className="p-12 border-l-4 border-blue-500">
                            <div className="font-mono">
                                <form onSubmit={onSubmit}>
                                    <input type="hidden" name="access-key" value="ae04efae-6f30-4867-8a80-c074b79b293d"></input>
                                    <div className="bg-gray-50 p-4 border-2 border-gray-300 rounded">
                                        <label className="text-xs text-gray-600 mb-1 block">NAME:</label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John_Doe"
                                            className="w-full px-3 py-2 border-b-2 border-gray-400 bg-transparent focus:border-blue-500 focus:outline-none font-mono"
                                        />
                                    </div>
                                    <div className="bg-gray-50 p-4 border-2 border-gray-300 rounded">
                                        <label className="text-xs text-gray-600 mb-1 block">EMAIL:</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            className="w-full px-3 py-2 border-b-2 border-gray-400 bg-transparent focus:border-blue-500 focus:outline-none font-mono"
                                        />
                                    </div>

                                    <div className="bg-gray-50 p-4 border-2 border-gray-300 rounded">
                                        <label className="text-xs text-gray-600 mb-1 block">MESSAGE:</label>
                                        <textarea
                                            name="message"
                                            placeholder="Type your message here..."
                                            rows="6"
                                            className="w-full px-3 py-2 border-2 border-gray-400 bg-transparent focus:border-blue-500 focus:outline-none font-mono resize-none"
                                        />
                                    </div>

                                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 border-4 border-blue-800 shadow-lg hover:shadow-xl transition-all font-mono text-lg">&gt; SEND_MESSAGE</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Success Popup */}
            {showSuccessPopup && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
                    <div className="bg-white p-8 rounded-sm shadow-2xl max-w-md w-full relative border-4 border-blue-600 animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setShowSuccessPopup(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                        >
                            <X size={24} />
                        </button>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="text-blue-600" size={32} />
                            </div>
                            <h3 className="text-2xl font-bold font-mono text-gray-900">MESSAGE_SENT</h3>
                            <p className="text-gray-600 font-mono text-sm">
                                Your email has been sent! Thank you!
                            </p>
                            <button
                                onClick={() => setShowSuccessPopup(false)}
                                className="w-full bg-blue-600 text-white font-bold py-3 px-6 mt-4 hover:bg-blue-700 transition-colors font-mono border-2 border-blue-800 shadow-[4px_4px_0px_0px_rgba(30,64,175,1)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_rgba(30,64,175,1)]"
                            >
                                ACKNOWLEDGED
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ContactSection