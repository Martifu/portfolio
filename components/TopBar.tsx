"use client";

import React, { useState, useEffect } from "react";
import { BlackButton } from "./BlackButton";

export const TopBar = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const mexicoTime = new Date().toLocaleTimeString("es-MX", {
                timeZone: "America/Mexico_City",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            });
            setTime(mexicoTime);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="absolute top-0 left-0 w-full z-50 bg-transparent  flex flex-col items-center">

            <div className="w-full max-w-5xl px-6 py-3 md:py-6 flex justify-between items-center relative z-10 text-gray-900">

                {/* Left Slot */}
                <div className="flex items-center gap-2">
                    {/* Desktop: Time/Flag */}
                    <div className="hidden md:flex items-center gap-2">
                        <span className="text-xl">🇲🇽</span>
                        <span className="text-sm font-medium tracking-wide text-gray-600">MX | {time} GMT-6</span>
                    </div>
                    {/* Mobile: Logo */}
                    <div className="md:hidden font-caveat text-3xl font-light text-gray-900 tracking-tighter">
                        Martin
                    </div>
                </div>

                {/* Center Slot (Desktop Only) */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 font-caveat text-3xl font-light text-gray-800 tracking-tighter">
                    Martin
                </div>

                {/* Right Slot */}
                <div className="flex items-center gap-2">
                    {/* Desktop: Status */}
                    <div className="hidden md:flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-600">Disponible para proyectos</span>
                    </div>
                    {/* Mobile: Time/Flag (Condensed) */}
                    <div className="flex md:hidden items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                        <span className="text-lg">🇲🇽</span>
                        <span className="text-xs font-medium text-gray-600">MX {time}</span>
                    </div>
                </div>

            </div>

            {/* Full width divider */}
            <div className="w-[99%] h-px bg-gray-200" />
        </div>
    );
};
