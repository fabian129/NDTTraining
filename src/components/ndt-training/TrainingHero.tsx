"use client";

import React from "react";
import { Sparkles, ArrowRight, PlayCircle } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { ElectricCard } from "./ElectricCard";

export function TrainingHero() {
    return (
        <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 flex flex-col relative items-start z-10">
                {/* Tag */}
                <FadeIn delay={0.1}>
                    <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm text-xs text-slate-500">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />
                        <span className="font-sans font-medium">
                            ISO/IEC 17024 Ackrediterad
                        </span>
                    </div>
                </FadeIn>

                {/* Headline */}
                <FadeIn delay={0.15}>
                    <h1 className="lg:text-[76px] text-5xl leading-[1.05] text-slate-900 max-w-xl mb-6 tracking-tight font-manrope font-medium">
                        Certifierad kompetens inom Oförstörande Provning
                    </h1>
                </FadeIn>

                {/* Subhead */}
                <FadeIn delay={0.2}>
                    <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed font-sans">
                        ISO-ackrediterad utbildning och personcertifiering för yrkesverksamma och företag inom industri och besiktning.
                    </p>
                </FadeIn>

                {/* Buttons */}
                <FadeIn delay={0.3}>
                    <div className="flex flex-wrap gap-6 items-center">
                        <button className="group relative px-8 py-3.5 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4)] active:scale-95 overflow-hidden bg-indigo-600">
                            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            <div className="relative flex items-center justify-center gap-2 font-sans">
                                Se kursutbud
                            </div>
                        </button>

                        <button className="relative px-8 py-3.5 rounded-full bg-white/80 border border-slate-200 text-slate-700 text-lg font-medium backdrop-blur-md transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 flex items-center gap-2 shadow-sm hover:text-indigo-600 active:scale-95">
                            <span className="font-sans">Boka företagsdialog</span>
                        </button>
                    </div>
                </FadeIn>
            </div>

            {/* Right Column (Card with Lightning) */}
            <FadeIn
                delay={0.5}
                className="lg:col-span-5 flex justify-center lg:justify-end mt-12 lg:mt-0 relative z-10"
            >
                <ElectricCard />
            </FadeIn>
        </section>
    );
}
