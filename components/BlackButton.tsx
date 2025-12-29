import React from "react";

interface BlackButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const BlackButton = ({ children, onClick, className = "" }: BlackButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`relative px-7 py-3.5 bg-[#111] text-white rounded-full text-sm font-medium hover:scale-105 transition-transform overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.24)] group border border-white/5 ${className}`}
        >
            {/* Top Shine/Light Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[50%] bg-gradient-to-b from-white/20 to-transparent opacity-80 blur-[1px] rounded-t-full pointer-events-none" />

            {/* Inner Top Bevel/Highlight */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.35)] pointer-events-none" />

            {/* Subtle Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

            <span className="relative z-10">{children}</span>
        </button>
    );
};
