import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function TrainingFooter() {
    return (
        <footer className="relative w-full overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200 font-sans">
            <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
                <h1 className="text-[17vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-t from-slate-200/50 to-transparent opacity-80 translate-y-[20%] font-manrope font-medium">
                    NDT
                </h1>
            </div>

            <div className="relative z-10">
                <div className="max-w-7xl mx-auto px-6 pt-20 pb-14 lg:pt-24 lg:pb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
                        <div className="lg:col-span-5">
                            <h2 className="flex items-start text-4xl font-medium text-slate-900 font-manrope mb-6">
                                NDT Training Center
                            </h2>

                            <p className="max-w-sm text-slate-500 text-lg leading-relaxed font-light mb-10 font-sans">
                                Din partner för validerad kompetens. Vi erbjuder ackrediterad utbildning och
                                certifiering för en säkrare industri.
                            </p>

                            <div className="flex gap-4">
                                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                    <a key={i} href="#" className="glass flex items-center justify-center hover:text-white hover:bg-slate-900 transition text-slate-400 bg-slate-50 w-10 h-10 border-slate-300 border rounded-lg">
                                        <Icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-16">
                            <div>
                                <h3 className="text-2xl text-slate-400 mb-6 font-manrope font-medium">
                                    Tjänster
                                </h3>
                                <ul className="space-y-3 text-slate-500">
                                    {['Utbildning', 'Certifiering', 'Företagsanpassat'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-slate-900 transition-colors duration-200 font-sans">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl text-slate-400 mb-6 font-manrope font-medium">
                                    Resurser
                                </h3>
                                <ul className="space-y-3 text-slate-500">
                                    {['Om oss', 'Nyheter', 'Kontakt'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-slate-900 transition-colors duration-200 font-sans">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl text-slate-400 mb-6 font-manrope font-medium">
                                    Info
                                </h3>
                                <ul className="space-y-3 text-slate-500">
                                    {['Integritetspolicy', 'Villkor'].map((item) => (
                                        <li key={item}>
                                            <a href="#" className="hover:text-slate-900 transition-colors duration-200 font-sans">
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-slate-400 font-sans">
                        ©2026 NDT Training Center.
                    </span>
                </div>
            </div>
        </footer>
    );
}
