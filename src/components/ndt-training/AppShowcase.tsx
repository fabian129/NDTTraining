import React from "react";
import {
    Search,
    Users,
    PlusCircle,
    LayoutDashboard,
    Book,
    Medal,
    Flame,
    Code2,
    Clock,
    CheckCircle,
    PlayCircle,
    Video,
} from "lucide-react";

export function AppShowcase() {
    return (
        <section className="mt-[-1rem] lg:mt-[-2rem] mb-24 max-w-7xl mx-auto px-2.5 relative perspective-distant group z-20">
            {/* Glow Effect Behind App */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] blur-[120px] rounded-full z-0 bg-indigo-100/50 transition-transform duration-1000 group-hover:scale-125 group-hover:bg-indigo-200/40"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transform-style-preserve-3d">
                {/* Main Panel (full width) */}
                <div className="overflow-hidden md:col-span-2 lg:col-span-3 bg-white/80 ring-slate-200 ring-1 rounded-2xl relative shadow-2xl backdrop-blur-md rotate-x-5 hover:rotate-x-0 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.3)] transform-style-preserve-3d">
                    {/* Card-style Top Border */}
                    <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-90 z-30"></div>

                    {/* Top bar */}
                    <div className="flex sm:px-6 bg-white border-slate-100 border-b py-3 px-4 items-center justify-between relative z-20">
                        <div className="flex items-center gap-3 text-sm text-slate-500">
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-slate-900 transition-colors font-sans font-medium"
                            >
                                NDT Portal
                            </a>
                            <span className="opacity-40 font-sans">/</span>
                            <span className="text-slate-900 font-sans">Mina kurser</span>
                            <span className="inline text-[11px] font-sans flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-500 inline-block"></span>
                                Online
                            </span>
                        </div>

                        {/* Search & Actions */}
                        <div className="flex items-center gap-3">
                            <div className="hidden sm:flex items-center gap-2 bg-slate-50 ring-1 ring-slate-200 rounded-lg px-2.5 h-8">
                                <Search className="text-slate-400 w-3.5 h-3.5" />
                                <input
                                    type="text"
                                    placeholder="Sök utbildning..."
                                    className="bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none w-48 font-sans"
                                />
                            </div>
                            <button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white text-slate-600 text-xs ring-1 ring-slate-200 px-3 py-1.5 hover:bg-slate-50 transition font-sans font-medium">
                                <Users className="w-3.5 h-3.5" />
                                Studiegrupp
                            </button>
                        </div>
                    </div>

                    {/* Desktop layout */}
                    <div className="grid grid-cols-12 z-10 relative">
                        {/* Left Sidebar */}
                        <aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-slate-50/50 border-slate-100 border-r">
                            <div className="p-4">
                                <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/10 text-sm hover:brightness-110 transition-all px-3 py-2 font-sans font-medium">
                                    <PlusCircle className="w-4 h-4" />
                                    Nytt Mål
                                </button>
                            </div>

                            <nav className="px-3 pb-4 space-y-6 overflow-y-auto">
                                <div>
                                    <div className="px-2 mb-2 text-[10px] uppercase text-slate-400 font-sans font-semibold tracking-wider">
                                        Meny
                                    </div>
                                    <ul className="space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-900 bg-white ring-1 ring-slate-200 shadow-sm font-sans font-medium"
                                            >
                                                <LayoutDashboard className="w-4 h-4" />
                                                Översikt
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans font-medium"
                                            >
                                                <Book className="w-4 h-4" />
                                                Mina kurser
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans font-medium"
                                            >
                                                <Medal className="w-4 h-4" />
                                                Certifikat
                                                <span className="ml-auto text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.5 rounded font-sans">
                                                    2
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <div className="px-2 mb-2 text-[10px] uppercase text-slate-400 font-sans font-semibold tracking-wider">
                                        Aktiva spår
                                    </div>
                                    <ul className="space-y-1">
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans font-medium"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                                                OFP Nivå 1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans font-medium"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                                                Strålskydd
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans font-medium"
                                            >
                                                <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                                                Materiallära
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </aside>

                        {/* Center Content */}
                        <main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px] bg-white">
                            {/* Tabs */}
                            <div className="px-4 sm:px-6 py-3 border-b border-slate-100 overflow-x-auto">
                                <div className="flex items-center gap-6 min-w-max">
                                    <button className="text-sm text-slate-900 border-b-2 border-indigo-600 pb-3 -mb-3.5 font-sans font-medium">
                                        Pågående
                                    </button>
                                    <button className="text-sm text-slate-500 hover:text-slate-900 transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-slate-200 font-sans font-medium">
                                        Avslutade
                                    </button>
                                    <button className="text-sm text-slate-500 hover:text-slate-900 transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-slate-200 font-sans font-medium">
                                        Sparade
                                    </button>
                                    <button className="text-sm text-slate-500 hover:text-slate-900 transition pb-3 -mb-3.5 border-b-2 border-transparent hover:border-slate-200 font-sans font-medium">
                                        Inlämningar
                                    </button>
                                </div>
                            </div>

                            {/* Header */}
                            <div className="px-4 sm:px-6 py-6 border-b border-slate-100 bg-slate-50/30">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-slate-900 text-2xl font-manrope font-medium">
                                            Oförstörande Provning - Grundkurs
                                        </h3>
                                        <span className="text-[11px] rounded-md bg-green-100 text-green-700 ring-1 px-2 py-0.5 uppercase ring-green-600/20 font-sans font-semibold tracking-wide">
                                            Certifiering
                                        </span>
                                    </div>
                                    <div className="text-xs text-slate-500 flex items-center gap-1.5 font-sans font-medium">
                                        <Flame className="text-orange-500 w-3.5 h-3.5 fill-orange-500" />
                                        Populär
                                    </div>
                                </div>
                                <div className="mt-2 text-sm text-slate-500 font-sans">
                                    Du har klarat{" "}
                                    <span className="text-slate-900 font-medium font-sans">
                                        12 moduler
                                    </span>{" "}
                                    och har{" "}
                                    <span className="text-slate-900 font-medium font-sans">
                                        2 moment
                                    </span>{" "}
                                    kvar att göra.
                                </div>
                            </div>

                            {/* Feed / Tasks */}
                            <div className="px-4 sm:px-6 py-6 space-y-4">
                                {/* Card 1: Task */}
                                <div className="rounded-xl ring-1 ring-slate-200 bg-white p-4 hover:shadow-md transition-shadow group cursor-pointer">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0 mt-0.5">
                                                <div className="w-10 h-10 rounded-md border border-slate-200 bg-slate-50 transition-colors flex items-center justify-center">
                                                    <Code2 className="text-indigo-600 w-5 h-5" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-sm text-slate-900 transition-colors font-medium font-sans">
                                                    Ultraljudsprovning - Teori
                                                </div>
                                                <div className="text-xs text-slate-500 mt-0.5 font-sans flex items-center gap-2">
                                                    <span className="flex items-center gap-1 font-sans">
                                                        <Clock className="w-3 h-3" />
                                                        2h 15m
                                                    </span>
                                                    <span className="font-sans">•</span>
                                                    <span className="text-orange-600 font-sans font-medium">
                                                        Prov inlämnas
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex -space-x-2">
                                            <button className="text-xs bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition font-sans font-medium">
                                                Fortsätt
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Progress */}
                                <div className="rounded-xl ring-1 p-4 ring-indigo-100 bg-indigo-50/50">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="text-sm text-slate-900 font-medium font-sans">
                                                    Magnetpulverprovning
                                                </div>
                                                <div className="text-xs text-slate-500 mt-0.5 font-sans">
                                                    Praktisk övning • Lab 3
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-[11px] font-mono font-sans text-indigo-600 font-semibold">
                                            42%
                                        </div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-3">
                                        <span className="text-xs text-slate-500 font-sans font-medium">
                                            Training
                                        </span>
                                        <div className="flex-1 h-1.5 rounded-full overflow-hidden bg-indigo-100">
                                            <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-indigo-500 to-indigo-500 shadow-[0_0_10px_rgba(59,130,246,0.2)]"></div>
                                        </div>
                                        <button className="text-[10px] rounded hover:bg-white text-slate-500 px-2 py-1 transition-colors uppercase font-sans font-semibold tracking-wide">
                                            Se resultat
                                        </button>
                                    </div>
                                </div>

                                {/* Card 3: Meeting Alert */}
                                <div className="rounded-xl ring-1 ring-slate-200 bg-white p-4 hover:shadow-md transition-shadow border-l-4 border-l-indigo-600">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div className="text-sm text-slate-900 font-medium font-sans">
                                                    Live seminarium: Strålskydd
                                                </div>
                                                <div className="text-xs text-slate-500 mt-0.5 font-sans">
                                                    Startar om 15 min • Lärare: Dr. Berg
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-[10px] rounded-md bg-red-100 text-red-600 ring-1 ring-red-200 px-2 py-0.5 font-sans font-bold tracking-wide">
                                            LIVE
                                        </span>
                                    </div>
                                    <div className="mt-3 flex items-center gap-2">
                                        <button className="text-xs rounded-md ring-1 px-3 py-1.5 transition-colors text-white font-sans font-medium bg-indigo-600 border-indigo-600 hover:bg-indigo-700">
                                            Gå med
                                        </button>
                                        <button className="text-xs rounded-md text-slate-500 hover:text-slate-900 px-3 py-1.5 transition-colors font-sans font-medium">
                                            Påminn mig
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </main>

                        {/* Right Sidebar */}
                        <aside className="hidden md:block md:col-span-3 lg:col-span-3 min-h-[520px] bg-slate-50/50 border-slate-100 border-l">
                            <div className="flex flex-col h-full">
                                {/* Team Members Section */}
                                <div className="px-5 py-5 border-b border-slate-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest font-sans">
                                            Kurskamrater Online
                                        </h3>
                                        <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-mono font-sans font-medium">
                                            12
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        {/* Member 1 */}
                                        <div className="flex items-center gap-3 group cursor-pointer">
                                            <div className="relative">
                                                <img
                                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e69e5f8e-07cd-4ef2-97e3-d4bcfccc3881_320w.webp"
                                                    alt="User"
                                                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm group-hover:ring-slate-200 transition-all"
                                                />
                                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-slate-900 truncate font-sans">
                                                    Sarah J.
                                                </div>
                                                <div className="text-xs text-slate-500 truncate font-sans">
                                                    Studerar <span className="text-slate-700">Materiallära</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Member 2 */}
                                        <div className="flex items-center gap-3 group cursor-pointer">
                                            <div className="relative">
                                                <img
                                                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp"
                                                    alt="User"
                                                    className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm group-hover:ring-slate-200 transition-all"
                                                />
                                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="text-sm font-medium text-slate-900 truncate font-sans">
                                                    Mike T.
                                                </div>
                                                <div className="text-xs text-slate-500 truncate font-sans">
                                                    Studerar <span className="text-slate-700">Strålskydd</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
}
