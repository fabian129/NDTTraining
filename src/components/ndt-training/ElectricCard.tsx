import React from "react";
import { CheckCircle, PlayCircle, Lock, Trophy } from "lucide-react";

export function ElectricCard() {
    return (
        <div className="electric-card overflow-hidden bg-white w-[360px] rounded-[32px] p-[2px] relative ring-1 ring-slate-200/50">
            {/* Glowing Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-400/10 via-indigo-200 to-transparent opacity-80 z-0"></div>

            {/* Inner Card Content */}
            <div className="z-10 flex flex-col overflow-hidden bg-white h-full rounded-[30px] p-8 relative items-start">
                {/* Background Noise/Particles inside card */}
                <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-indigo-50/80 to-transparent"></div>

                {/* Header */}
                <div className="flex justify-between w-full items-center mb-6 relative z-10">
                    <span className="text-[10px] uppercase text-slate-500 border border-slate-200 px-2 py-1 rounded bg-slate-50 flex items-center gap-1.5 font-sans font-semibold tracking-wide">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Certifiering
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider font-sans">
                        NIVÅ 2
                    </span>
                </div>

                <h3 className="text-xl text-slate-900 mb-2 tracking-tight font-semibold font-sans relative z-10">
                    Min Utbildning
                </h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed font-sans relative z-10">
                    Du har 3 moment kvar att slutföra.
                </p>

                {/* Task List */}
                <div className="w-full mb-8 space-y-3 relative z-10">
                    {/* Completed Task */}
                    <div className="flex items-center gap-3 group">
                        <div className="w-5 h-5 rounded-[6px] border border-green-200 bg-green-50 flex items-center justify-center text-green-600">
                            <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm text-slate-400 line-through decoration-slate-300 font-sans">
                            Materiallära Grund
                        </span>
                        <span className="ml-auto text-[10px] text-slate-400 font-mono font-sans">
                            100%
                        </span>
                    </div>

                    {/* Active Task */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-200 to-indigo-200 rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity"></div>
                        <div className="relative flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-md">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-600 flex items-center justify-center shadow-[0_4px_10px_rgba(79,70,229,0.3)] text-white">
                                <PlayCircle className="w-5 h-5 fill-current" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-sm text-slate-900 font-medium font-sans">
                                    Ultraljudsprovning Nivå 1
                                </span>
                                <div className="flex items-center gap-1.5">
                                    <span className="text-[10px] text-indigo-600 font-sans font-semibold">
                                        Teori + Praktik
                                    </span>
                                    <span className="w-0.5 h-0.5 rounded-full bg-slate-400"></span>
                                    <span className="text-[10px] text-slate-500 font-sans">
                                        40 min kvar
                                    </span>
                                </div>
                            </div>
                            <span className="ml-auto text-[10px] text-slate-600 font-mono bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded font-sans tracking-tight">
                                FORTSÄTT
                            </span>
                        </div>
                    </div>

                    {/* Upcoming Task */}
                    <div className="flex items-center gap-3 group opacity-80">
                        <div className="w-5 h-5 rounded-[6px] border border-slate-200 hover:border-indigo-400 transition-colors bg-white flex items-center justify-center text-slate-400">
                            <Lock className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-slate-500 font-sans">
                            Teoretiskt Prov
                        </span>
                        <span className="ml-auto text-[10px] text-slate-400 font-mono font-sans">
                            60 min
                        </span>
                    </div>
                </div>

                {/* Button */}
                <button className="relative z-10 hover:brightness-105 transition-all text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-sky-600 w-full rounded-full border-t border-indigo-400/20 mb-8 py-3 shadow-[0_4px_15px_rgba(79,70,229,0.25)] font-sans font-medium">
                    Fortsätt Kurs
                </button>

                {/* Bottom Stats */}
                <div className="flex items-center justify-between w-full pt-4 border-t border-slate-100 relative z-10">
                    <div className="flex flex-col gap-1">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans font-semibold">
                            Framsteg
                        </span>
                        <div className="flex items-center gap-1.5">
                            <span className="text-slate-900 font-medium font-sans">
                                75%
                            </span>
                            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1 py-px rounded font-sans font-medium">
                                +5%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 text-right">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans font-semibold">
                            Studietid
                        </span>
                        <span className="text-slate-900 font-medium font-sans">
                            12h 30m
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
