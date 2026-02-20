import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const testimonials = [
    {
        quote: "Professionellt och lärorikt. Certifieringen har varit avgörande för min karriär.",
        name: "Anders P.",
        role: "Besiktningsingenjör",
        avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb5cb84d-a173-4050-a57f-3c150dcec588_320w.webp",
        positionClasses: "lg:top-[8%] lg:left-[2%] xl:left-[4%]"
    },
    {
        quote: "Vi anlitar alltid NDT Training Center för våra företagsutbildningar. Högsta kvalitet rakt igenom.",
        name: "Maria L.",
        role: "Kvalitetschef",
        avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/152b527e-f3bb-44db-98a8-e224a84a1318_320w.webp",
        positionClasses: "lg:top-[8%] lg:right-[2%] xl:right-[4%]"
    },
    {
        quote: "Bra blandning av teori och praktik. Lärarna är väldigt kunniga.",
        name: "Johan K.",
        role: "NDT-tekniker",
        avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265ef229-059a-430b-b72b-0c721470692c_320w.jpg",
        positionClasses: "lg:bottom-[8%] lg:left-[2%] xl:left-[4%]"
    },
    {
        quote: "Smidig process från bokning till certifiering. Rekommenderas varmt.",
        name: "Erik S.",
        role: "Verksamhetschef",
        avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b6eee8f-691b-4350-9b31-3391c2e8d926_320w.jpg",
        positionClasses: "lg:bottom-[8%] lg:right-[2%] xl:right-[4%]"
    }
];

export default function StudentSuccess() {
    return (
        <section className="lg:mx-auto bg-transparent max-w-7xl rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-10 pr-10 pb-10 pl-10 relative">
            <div className="flex flex-col rounded-none mt-0 mb-0 pt-0 pr-0 pb-0 pl-0 relative gap-x-16 gap-y-4">
                {/* Header Section */}
                <div className="flex flex-col gap-10 w-full gap-x-10 gap-y-10">
                    <div className="flex gap-6 gap-x-10 gap-y-10 items-center">
                        <span className="text-xs font-mono tracking-widest text-indigo-600">
                            03
                        </span>
                        <div className="h-px flex-1 bg-slate-200"></div>
                        <span className="uppercase text-xs text-slate-400 tracking-widest">
                            Referenser
                        </span>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="min-h-[900px] flex flex-col overflow-hidden lg:block w-full max-w-7xl mr-auto ml-auto pt-12 pb-12 relative gap-x-16 gap-y-16 items-center justify-center">

                    {/* Abstract Background Pattern */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-40"
                        style={{
                            backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                            maskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 100%)",
                            WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 40%, transparent 100%)"
                        }}
                    ></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none z-0 bg-indigo-100/60"></div>

                    {/* Center Content */}
                    <div className="z-20 flex flex-col lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:mb-0 text-center max-w-3xl mb-16 pr-6 pl-6 relative items-center">
                        <h2 className="flex flex-col gap-4">
                            <span className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium">
                                Vad våra kunder säger.
                            </span>
                            <span className="block text-slate-500 text-lg max-w-2xl mx-auto font-sans">
                                Förtroendet från branschen är vårt viktigaste betyg.
                            </span>
                        </h2>
                        <button className="mt-8 group flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-900 text-sm font-medium rounded-full hover:bg-slate-50 transition font-sans whitespace-nowrap bg-white shadow-sm">
                            <span>Läs fler omdömen</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Cards */}
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className={`z-10 lg:absolute transition-opacity duration-500 ease-in-out group w-full max-w-sm relative ${item.positionClasses}`}
                        >
                            <div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 pt-8 pr-8 pb-8 pl-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
                                {/* Simple quote/text rendering */}
                                <p className="text-slate-700 text-lg leading-relaxed relative z-10 font-sans">
                                    "{item.quote}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 pl-4">
                                <div className="relative w-14 h-14 rounded-full border-2 border-white shadow-sm overflow-hidden shrink-0">
                                    <Image
                                        src={item.avatar}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                        sizes="56px"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-slate-900 font-medium text-base font-sans">
                                        {item.name}
                                    </span>
                                    <span className="text-slate-500 text-sm font-sans">
                                        {item.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}
