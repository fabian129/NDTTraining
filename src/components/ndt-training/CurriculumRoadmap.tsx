import React from 'react';
import { FileText, GraduationCap, Award, BadgeCheck, RefreshCw, ArrowRight } from 'lucide-react';

export default function CurriculumRoadmap() {
    return (
        <section
            className="lg:mx-auto bg-white border border-slate-200 shadow-sm max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative overflow-hidden"
            style={{
                position: 'relative'
            }}
        >
            {/* Header */}
            <div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">
                <div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-mono tracking-widest text-indigo-600">
                            02
                        </span>
                        <div className="h-px flex-1 bg-slate-200"></div>
                        <span className="uppercase text-xs tracking-widest text-slate-400">
                            The Process
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                        <div className="max-w-3xl flex flex-col gap-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium">
                                En strukturerad väg till
                                <span className="block text-slate-400 font-manrope font-medium">
                                    certifiering.
                                </span>
                            </h2>

                            <p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
                                Från ansökan till examination och certifiering – en tydlig och kvalitetssäkrad process.
                            </p>
                        </div>

                        <button className="group flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50 transition whitespace-nowrap">
                            <span>Läs mer om processen</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Node Grid Visual */}
                <div className="min-h-[560px] flex md:mt-0 w-full max-w-6xl mt-16 mr-auto ml-auto pr-4 pl-4 relative items-center justify-center">
                    {/* SVG Connections - Only visible on md+ screens to match logic */}
                    <svg className="absolute inset-0 hidden h-full w-full pointer-events-none md:block" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid meet">
                        <defs>
                            <linearGradient id="noodleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0"></stop>
                                <stop offset="50%" stopColor="#818CF8" stopOpacity="1"></stop>
                                <stop offset="100%" stopColor="#4F46E5" stopOpacity="0"></stop>
                            </linearGradient>
                            <filter id="wireGlow" x="-30%" y="-30%" width="160%" height="160%">
                                <feGaussianBlur stdDeviation="2" result="blur"></feGaussianBlur>
                                <feMerge>
                                    <feMergeNode in="blur"></feMergeNode>
                                    <feMergeNode in="SourceGraphic"></feMergeNode>
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Static Paths */}
                        <path d="M 165 130 L 290 130 Q 360 130 360 200 V 255 Q 360 280 390 280 L 440 280" stroke="#cbd5e1" strokeOpacity="0.8" strokeWidth="1.5" fill="none"></path>
                        <path d="M 165 430 L 290 430 Q 360 430 360 360 V 305 Q 360 280 390 280 L 440 280" stroke="#cbd5e1" strokeOpacity="0.8" strokeWidth="1.5" fill="none"></path>
                        <path d="M 560 280 L 771 280" stroke="#cbd5e1" strokeOpacity="0.8" strokeWidth="1.5" fill="none"></path>

                        {/* Animated Paths */}
                        <path
                            d="M 165 130 L 290 130 Q 360 130 360 200 V 255 Q 360 280 390 280 L 440 280"
                            stroke="url(#noodleGradient)"
                            strokeWidth="2"
                            fill="none"
                            filter="url(#wireGlow)"
                            strokeDasharray="100"
                            strokeDashoffset="100"
                            className="animate-dash-flow"
                        >
                            {/* Fallback for animate attribute if class doesn't work in SVG context properly, but kept consistent with original */}
                            <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="3s" repeatCount="indefinite"></animate>
                        </path>
                    </svg>

                    {/* Nodes Grid */}
                    <div className="relative z-10 grid h-full w-full grid-cols-1 gap-14 md:grid-cols-3 md:gap-0">
                        {/* Left Column */}
                        <div className="flex h-full flex-row items-center justify-center gap-6 px-4 md:flex-col md:gap-14 md:px-12">
                            {/* Node 1: Ansokan */}
                            <div className="group relative">
                                <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
                                    <FileText className="text-orange-500 text-3xl" />
                                    <span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                                        Ansökan
                                    </span>
                                </div>
                            </div>
                            {/* Node 2: Utbildning */}
                            <div className="group relative md:translate-x-16">
                                <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
                                    <GraduationCap className="text-3xl text-indigo-500" />
                                    <span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                                        Utbildning
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Center Hub */}
                        <div className="flex items-center justify-center py-10 md:py-0">
                            <div className="relative">
                                <div className="absolute -inset-10 rounded-full blur-3xl bg-[radial-gradient(circle,_rgba(99,102,241,0.2),_transparent_65%)]"></div>
                                <div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border border-indigo-100 bg-white backdrop-blur-2xl shadow-[0_20px_60px_-10px_rgba(99,102,241,0.25)] md:h-[132px] md:w-[132px]">
                                    <Award className="text-indigo-600 text-5xl" />
                                </div>
                                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-slate-900 font-medium font-sans whitespace-nowrap">
                                    Examination
                                </span>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex h-full flex-row items-center justify-center gap-6 px-4 md:flex-col md:gap-14 md:px-12">
                            {/* Node 4: Certifiering */}
                            <div className="group relative">
                                <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
                                    <BadgeCheck className="text-emerald-500 text-3xl" />
                                    <span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                                        Certifiering
                                    </span>
                                </div>
                            </div>
                            {/* Node 5: Fornyelse */}
                            <div className="group relative md:-translate-x-16">
                                <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
                                    <RefreshCw className="text-3xl text-indigo-500" />
                                    <span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans">
                                        Förnyelse
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
