"use client";

import React, { useState } from 'react';
import { CheckCircle, Leaf, Sparkles, Users, ArrowRight } from 'lucide-react';

export default function MembershipPlans() {
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

    const isMonthly = billingPeriod === 'monthly';

    return (
        <section
            className="lg:mx-auto group/section bg-white max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative shadow-sm"
            style={{
                position: 'relative'
            }}
        >
            <div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative">

                {/* Section Header */}
                <div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10 mb-16">
                    <div className="flex items-center gap-6">
                        <span className="text-xs font-mono tracking-widest text-indigo-600">
                            04
                        </span>
                        <div className="h-px flex-1 bg-slate-200"></div>
                        <span className="uppercase text-xs tracking-widest text-slate-400">
                            Tjänster & Utbildning
                        </span>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                        <div className="max-w-3xl flex flex-col gap-6">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium tracking-tight">
                                Vi erbjuder
                                <span className="block text-slate-400 transition-colors duration-500 group-hover/section:text-indigo-600">
                                    kompletta lösningar.
                                </span>
                            </h2>
                            <p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
                                Från enskilda kurser till företagsanpassade program och fullständig
                                personcertifiering enligt ISO/IEC 17024.
                            </p>
                        </div>

                        {/* Custom Billing Toggle - Hidden or repurposed to avoid visual clutter if not needed, or keep for 'Privat/Företag' context */}
                        <div className="hidden lg:flex items-center gap-4 bg-slate-100/50 p-1.5 rounded-full border border-slate-200 opacity-0 pointer-events-none">
                            {/* Hidden to preserve layout but remove functionality as per brief */}
                        </div>
                    </div>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 perspective-distant">

                    {/* Plan 1: Starter */}
                    <div className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Leaf className="text-2xl text-slate-600" />
                            </div>
                            <h3 className="text-xl font-manrope font-semibold text-slate-900 mb-2">Utbildning</h3>
                            <p className="text-sm text-slate-500 font-sans leading-relaxed">För dig som vill utvecklas inom industri och besiktning.</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-xl font-manrope font-bold text-slate-900">Kurser & Program</span>
                        </div>

                        <ul className="flex-1 space-y-4 mb-8">
                            {['Oförstörande Provning (OFP)', 'Fordonsbesiktning', 'Webbutbildningar', 'Kursmaterial online'].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-sans">
                                    <CheckCircle className="text-lg text-slate-400 shrink-0 w-5 h-5" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 font-sans">
                            Se alla utbildningar
                        </button>
                    </div>

                    {/* Plan 2: Pro (Highlighted) */}
                    <div className="group relative flex flex-col p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl shadow-indigo-500/20 transform md:scale-105 z-10 hover:-translate-y-1 transition-all duration-300 border border-slate-800">
                        {/* Abstract Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10 mb-6">
                            <div className="flex justify-between items-start">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                                    <Sparkles className="text-2xl text-indigo-300" />
                                </div>
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-200 border border-indigo-500/30">
                                    Ackrediterad
                                </span>
                            </div>
                            <h3 className="text-xl font-manrope font-semibold text-white mb-2">Certifiering</h3>
                            <p className="text-sm text-slate-400 font-sans leading-relaxed">Objektiv validering av din kompetens.</p>
                        </div>

                        <div className="relative z-10 mb-8 flex items-baseline gap-1">
                            <span className="text-3xl font-manrope font-bold text-white transition-all duration-300">
                                ISO/IEC 17024
                            </span>
                        </div>

                        <ul className="relative z-10 flex-1 space-y-4 mb-8">
                            {['Personcertifiering', 'Ackrediterad examinering', 'Utfärdande av certifikat', 'Förnyelse & omcertifiering'].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-200 font-sans">
                                    <CheckCircle className="text-lg text-indigo-400 shrink-0 w-5 h-5" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="relative z-10 w-full py-3 px-6 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] font-sans flex items-center justify-center gap-2 group/btn">
                            <span>Ansök om certifiering</span>
                            <ArrowRight className="transition-transform group-hover/btn:translate-x-1 w-4 h-4" />
                        </button>
                    </div>

                    {/* Plan 3: Team */}
                    <div className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5">
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Users className="text-2xl text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-manrope font-semibold text-slate-900 mb-2">Företag</h3>
                            <p className="text-sm text-slate-500 font-sans leading-relaxed">Lösningar anpassade för er verksamhet.</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-3xl font-manrope font-bold text-slate-900 transition-all duration-300">
                                Offert
                            </span>
                        </div>

                        <ul className="flex-1 space-y-4 mb-8">
                            {['Företagsanpassade program', 'Utbildning på plats', 'Kompetensinventering', 'Administrativ support'].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-sans">
                                    <CheckCircle className="text-lg text-slate-400 shrink-0 w-5 h-5" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all active:scale-95 font-sans">
                            Kontakta oss
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
