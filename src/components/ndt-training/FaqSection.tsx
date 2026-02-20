"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        question: "Vad innebär en ISO/IEC 17024-certifiering?",
        answer: "Det är en internationell kvalitetsstämpel som verifierar din kompetens enligt global standard. Det är ofta ett krav för att få utföra provning och besiktning inom industrin."
    },
    {
        question: "Vilka förkunskaper krävs?",
        answer: "Kraven varierar beroende på metod och nivå. För nivå 1 krävs oftast inga förkunskaper, medan nivå 2 och 3 kräver dokumenterad praktik och tidigare utbildning."
    },
    {
        question: "Hur anmäler jag mig till en kurs?",
        answer: "Du kan boka direkt via vår webbplats eller kontakta oss för en dialog om företagsanpassade upplägg för din personal."
    },
    {
        question: "Vad krävs för omcertifiering?",
        answer: "För att behålla ditt certifikat krävs dokumenterad aktivitet inom metoden samt ett godkänt omcertifieringsprov vart femte år."
    },
    {
        question: "Erbjuder ni utbildning på plats hos företag?",
        answer: "Ja, vi skräddarsyr utbildningar som kan genomföras direkt i er verksamhet för att minimera produktionsbortfall och reskostnader."
    }
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="lg:mx-auto animate bg-slate-100/50 max-w-7xl border-slate-200 border rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-12 pr-10 pb-12 pl-10 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 lg:items-start relative gap-x-16 gap-y-16 items-start">
                <div className="flex flex-col">
                    <div className="mb-12">
                        <p className="text-slate-500 mb-4 text-sm font-medium tracking-wide font-sans">
                            Vanliga frågor
                        </p>
                        <h2 className="leading-[1.1] md:text-5xl text-5xl text-slate-900 font-manrope font-medium">
                            Din väg till certifiering
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-600 font-manrope font-medium from-indigo-600 block lg:inline ml-0 lg:ml-2">
                                börjar här
                            </span>
                        </h2>
                    </div>

                    <div className="aspect-[4/5] overflow-hidden flex group shadow-indigo-100 bg-white w-full border-slate-200 border rounded-3xl relative shadow-xl items-center justify-center">
                        {/* Abstract educational visual */}
                        <div className="absolute inset-0">
                            <Image
                                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/244fac58-66ac-48ae-b48d-4bec089b4c26_1600w.webp"
                                alt="Education Visual"
                                fill
                                className="object-cover opacity-50"
                            />
                        </div>

                        <div className="relative z-10 w-16 h-16 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm flex items-center justify-center shadow-sm">
                            <ArrowRight className="text-2xl text-indigo-600" />
                        </div>
                    </div>
                </div>

                {/* Right Column: Accordion */}
                <div className="flex flex-col space-y-6 lg:mt-8 self-start w-full">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="group border-b border-slate-200 pb-6">
                                <button
                                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className={`text-xl font-medium pr-8 font-sans transition-colors ${isOpen ? 'text-indigo-600' : 'text-slate-900 group-hover:text-indigo-600'}`}>
                                        {faq.question}
                                    </span>
                                    {isOpen ? (
                                        <ChevronUp className="text-slate-400 transition-transform duration-300 transform rotate-180" />
                                    ) : (
                                        <ChevronDown className="text-slate-400 transition-transform duration-300" />
                                    )}
                                </button>
                                <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
