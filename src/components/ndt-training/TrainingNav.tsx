import React from "react";
import Link from "next/link";
import { ShieldCheck, ChevronDown, Menu } from "lucide-react";

export function TrainingNav() {
    return (
        <nav className="sticky z-50 flex bg-white/80 max-w-6xl border-slate-200/60 border rounded-2xl mx-auto p-2 top-4 shadow-sm backdrop-blur-xl items-center justify-between">
            <Link href="#" className="flex items-center gap-2 pl-3 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-600/20">
                    <ShieldCheck className="text-white w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="font-semibold text-lg tracking-tight text-slate-900 font-sans">
                    NDT Training Center
                </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
                <Link
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-xl transition-all font-sans"
                >
                    Utbildning
                </Link>
                <Link
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-sans"
                >
                    Certifiering
                </Link>
                <Link
                    href="#"
                    className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-sans"
                >
                    Företag
                </Link>
                <div className="relative group">
                    <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-all font-sans">
                        Resurser
                        <ChevronDown className="w-4 h-4 text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                    </button>
                    {/* Simplified Dropdown Placeholder */}
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left">
                        <div className="p-1">
                            <Link href="#" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg">
                                Standarder
                            </Link>
                            <Link href="#" className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-lg">
                                Dokument
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 pr-1 sm:pr-0">
                <Link
                    href="#"
                    className="hidden sm:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors font-sans"
                >
                    Logga in
                </Link>
                <Link
                    href="#"
                    className="px-4 sm:px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-lg shadow-slate-900/10 transition-all active:scale-95 font-sans whitespace-nowrap"
                >
                    Se kursutbud
                </Link>
                <button className="md:hidden p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors active:scale-95">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
}
