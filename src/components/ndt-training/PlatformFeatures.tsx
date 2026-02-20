import React from 'react';
import { ArrowRight, MessageCircle, Terminal, Award, Lock, TrendingUp } from 'lucide-react';

export default function PlatformFeatures() {
    return (
        <section
            className="lg:mx-auto bg-white border border-slate-200 shadow-sm max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative group/section overflow-hidden"
            style={{
                position: 'relative',
                backgroundClip: 'padding-box',
            }}
        >
            {/* Subtle border gradient hint via pseudo-element or shadow if needed, but sticking to basic border for now matching Aura class */}

            {/* Main Grid */}
            <div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">
                {/* Header Section */}
                <div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">
                    {/* Top label row */}
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-mono tracking-widest text-indigo-600">
                            01
                        </span>
                        <div className="h-px flex-1 bg-slate-200"></div>
                        <span className="uppercase text-xs tracking-widest text-slate-400">
                            Platform Features
                        </span>
                    </div>

                    {/* Main content */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 gap-x-10 gap-y-10">
                        <div className="max-w-3xl flex flex-col gap-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium tracking-tight">
                                Kompetens du kan verifiera.
                                <span className="block text-slate-400 font-manrope font-medium transition-colors duration-500 group-hover/section:text-slate-500">
                                    Strukturerad kvalitetssäkring.
                                </span>
                            </h2>

                            <p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
                                Strukturerad utbildning och certifiering enligt erkända standarder – för långsiktig kvalitetssäkring.
                            </p>
                        </div>

                        {/* Secondary CTA */}
                        <button className="group/btn flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50 hover:border-slate-300 hover:shadow-sm active:scale-95 transition-all duration-300 whitespace-nowrap">
                            <span>Se alla tjänster</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 w-full mt-8 gap-x-6 gap-y-6 perspective-distant">

                    {/* Card 1: AI Tutor */}
                    <div className="group flex flex-col overflow-hidden transition-all duration-500 md:col-span-1 bg-white border-slate-200 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">

                        {/* Visual */}
                        <div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">
                            <div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-80 rounded-full blur-3xl transform scale-75 from-indigo-50 transition-all duration-700 group-hover:scale-90 group-hover:opacity-100"></div>

                            <svg
                                className="w-full h-full z-10 text-indigo-200 transition-colors duration-500 group-hover:text-indigo-300"
                                viewBox="0 0 200 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g className="origin-center animate-orbit-slow">
                                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="opacity-80"></circle>
                                    <circle cx="100" cy="20" r="3" fill="#3B82F6" className="drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"></circle>
                                    <circle cx="180" cy="100" r="2.5" fill="#60A5FA" className="opacity-80"></circle>
                                </g>
                                <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1" className="opacity-60"></circle>
                            </svg>

                            {/* Breathing Center Icon */}
                            <div
                                className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full border border-slate-200 z-20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:shadow-indigo-200/50 animate-breathe-glow"
                            >
                                <div className="absolute inset-0 rounded-full blur-sm bg-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <MessageCircle className="text-2xl text-indigo-600 transition-transform duration-500 group-hover:rotate-12" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl text-slate-900 text-left font-manrope font-medium tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                                Företagsanpassat
                            </h3>
                            <p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 font-sans group-hover:text-slate-600 transition-colors duration-300">
                                Skräddarsydda upplägg för din verksamhets unika behov och utmaningar.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Coding Labs */}
                    <div className="md:col-span-2 group flex flex-col overflow-hidden transition-all duration-500 bg-white border-slate-200 border rounded-[2rem] px-8 py-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">

                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-50 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-100/60 transition-colors duration-700"></div>

                        {/* Visual */}
                        <div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">
                            <svg className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                    <linearGradient id="flowGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0"></stop>
                                        <stop offset="50%" stopColor="#60A5FA" stopOpacity="1"></stop>
                                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M50 100 L120 100 L150 70" stroke="currentColor" strokeWidth="1" className="text-slate-200"></path>
                                <path d="M350 100 L280 100 L250 130" stroke="currentColor" strokeWidth="1" className="text-slate-200"></path>
                                <path
                                    d="M50 100 L120 100 L150 70"
                                    stroke="url(#flowGradientLeft)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeDasharray="120"
                                    strokeDashoffset="120"
                                    className="animate-flow-data"
                                ></path>
                            </svg>

                            {/* Center Console */}
                            <div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out">
                                <div className="w-32 h-24 border border-slate-200 bg-white rounded-lg flex flex-col p-2 shadow-2xl z-10 relative overflow-hidden font-mono text-[8px] text-slate-700 leading-tight group-hover:border-indigo-200 transition-colors duration-300">
                                    <span className="opacity-50 text-slate-400 font-sans">
                                    // startar prov...
                                    </span>
                                    <span className="text-indigo-600/80">&gt; start exam</span>
                                    <span className="">&gt; loading questions...</span>
                                    <span className="text-green-600/80">&gt; lycka till!</span>
                                    <span className="animate-pulse text-indigo-600">_</span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl text-slate-900 text-left transition-colors duration-300 font-manrope font-medium group-hover:text-indigo-600 tracking-tight">
                                Webbutbildningar
                            </h3>
                            <p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 group-hover:text-slate-600 transition-colors duration-300 font-sans">
                                Tillgång till modernt kursmaterial och prov direkt via vår portal,
                                för flexibelt lärande när det passar dig.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Certification */}
                    <div className="md:col-span-2 group flex flex-col overflow-hidden transition-all duration-500 bg-white border-slate-200 border rounded-[2rem] px-8 py-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">

                        {/* Visual */}
                        <div className="flex w-full h-48 mb-6 relative items-center justify-center">
                            <div className="flex items-center gap-4 relative">
                                {/* Background Glow */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[60px] rounded-full pointer-events-none bg-indigo-100 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Locks */}
                                <div className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 group-hover:border-slate-300 transition-colors duration-500 animate-shimmer-lock" style={{ animationDelay: '0s' }}>
                                    <Lock className="w-5 h-5" />
                                </div>

                                {/* Active Asset */}
                                <div className="relative w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-xl z-10 border border-slate-100 ring-4 ring-slate-50 transition-all duration-500 group-hover:scale-110 group-hover:ring-indigo-50 animate-active-pulse">
                                    <Award className="w-10 h-10 text-indigo-600" />
                                    <div className="absolute -bottom-3 bg-slate-900 text-white border border-slate-800 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300 delay-100">
                                        <span className="text-[9px] font-mono tracking-wider font-semibold">
                                            VERIFIED
                                        </span>
                                    </div>
                                </div>

                                {/* Right Lock */}
                                <div className="w-12 h-12 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400 group-hover:border-slate-300 transition-colors duration-500 animate-shimmer-lock" style={{ animationDelay: '2s' }}>
                                    <Lock className="w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl text-slate-900 text-left font-manrope font-medium tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                                ISO-ackrediterad certifiering
                            </h3>
                            <p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 font-sans group-hover:text-slate-600 transition-colors duration-300">
                                Objektiv och branschförankrad validering av kompetens enligt
                                ISO/IEC 17024.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Career */}
                    <div className="md:col-span-1 group flex flex-col overflow-hidden transition-all duration-500 bg-slate-50 border-slate-200 border rounded-[2rem] p-8 relative justify-between shadow-inner hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">
                        <div className="absolute inset-0 opacity-[0.4] pointer-events-none group-hover:opacity-60 transition-opacity duration-500"
                            style={{
                                backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
                                backgroundSize: '40px 40px'
                            }}>
                        </div>

                        {/* Visual */}
                        <div className="relative h-48 w-full flex items-center justify-center mb-6 z-10">
                            <TrendingUp className="text-6xl text-slate-300 transition-all duration-500 group-hover:text-indigo-500 group-hover:scale-110 group-hover:-rotate-3 w-16 h-16" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-3xl lg:text-4xl text-slate-900 text-left transition-colors duration-300 font-manrope font-medium group-hover:text-indigo-600 tracking-tight">
                                Karriärutveckling
                            </h3>
                            <p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 group-hover:text-slate-600 transition-colors duration-300 font-sans">
                                Praktisk och teoretisk utbildning inom NDT och fordonsbesiktning
                                som öppnar dörrar inom industrin.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
