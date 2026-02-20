import React from "react";

export function TrainingBackground() {
    return (
        <div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0 overflow-hidden">
            <div className="stars absolute inset-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[100px] rounded-full mix-blend-multiply bg-indigo-100/50"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[100px] rounded-full bg-indigo-100/40 mix-blend-multiply"></div>
            <div className="grid-bg absolute inset-0 opacity-60"></div>
        </div>
    );
}
