"use client";

import React from "react";
import { User, Briefcase, FileText, MessageSquare } from "lucide-react";
import Image from "next/image";
import { BlackButton } from "./BlackButton";

export const Navbar = () => {
    return (
        <div className="fixed bottom-[calc(2rem+env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 px-2 py-2 bg-white/80 backdrop-blur-xl border border-white/40 rounded-full shadow-2xl">

                {/* Avatar Section */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 radial-gradient from-white to-gray-200 cursor-pointer ">
                    <Image
                        onClick={() => window.location.href = "#hero"}
                        src="/assets/person.webp" // Using person image as avatar for now
                        alt="Avatar"
                        fill
                        className="object-cover translate-y-1 opacity-90"
                    />
                </div>

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300 mx-1" />

                {/* Navigation Icons */}
                <div className="flex items-center gap-1">
                    {[
                        { icon: User, href: "#about" },
                        { icon: Briefcase, href: "#services" },
                        { icon: FileText, href: "#portfolio" },
                        { icon: MessageSquare, href: "#testimonials-slider" }
                    ].map(({ icon: Icon, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            className="p-2.5 text-gray-500 hover:text-black hover:bg-gray-100 rounded-full transition-all cursor-pointer"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>

                {/* Contact Button */}
                <a href="/assets/Martin Esparza CV.pdf" target="_blank" rel="noopener noreferrer">
                    <BlackButton className="ml-2 px-5 py-2.5 cursor-pointer">
                        Mi CV
                    </BlackButton>
                </a>

            </div>
        </div>
    );
};
