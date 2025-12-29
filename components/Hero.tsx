"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Copy, Dribbble, Twitter, Linkedin, Instagram } from "lucide-react";
import { BlackButton } from "./BlackButton";

export const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-white flex flex-col items-center justify-start pt-8 sm:pt-28 md:pt-36 lg:pt-48">

            {/* Background Gradients - Split Left (Warm) / Right (Blue) - Behind Cards */}
            <div className="absolute top-[8vh] sm:top-[10vh] md:top-[8vh] lg:top-[6vh] left-1/2 -translate-x-1/2 pointer-events-none z-0">
                <div className="relative w-[500px] sm:w-[600px] md:w-[700px] h-[350px] sm:h-[400px] md:h-[450px]">
                    {/* Left Warm Glow - Concentrated */}
                    <div className="absolute top-0 left-0 w-1/2 h-full opacity-100 blur-3xl"
                        style={{ background: 'radial-gradient(ellipse at center left, rgba(255,200,160, 1), rgba(255,220,200,0.6) 50%, transparent 70%)' }} />

                    {/* Right Blue Glow - Concentrated */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-100 blur-3xl"
                        style={{ background: 'radial-gradient(ellipse at center right, rgba(180,210,255, 1), rgba(200,220,255,0.6) 50%, transparent 70%)' }} />
                </div>
            </div>

            {/* Grid Lines Overlay - Centered/Padding Style */}
            <div className="absolute inset-0 max-w-6xl mx-auto border-l border-r border-gray-100 pointer-events-none z-0 opacity-100" />

            {/* Clouds Animation Layer - Split Container to Clip at Center */}
            <div className="absolute top-[10vh] sm:top-[12vh] md:top-[10vh] lg:top-[8vh] left-1/2 -translate-x-1/2 w-[600px] sm:w-[700px] md:w-[800px] h-[350px] sm:h-[400px] md:h-[450px] z-0 pointer-events-none flex">

                {/* Left Side Container - Clips content at right edge (center of screen) */}
                <div className="w-1/2 h-full overflow-hidden relative">
                    <div className="absolute inset-0 opacity-80">
                        <motion.div
                            initial={{ x: "-50%" }}
                            animate={{ x: "0%" }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-0 left-0 w-[200%] h-full flex"
                        >
                            {/* Duplicate images for seamless loop */}
                            <div className="w-1/2 h-full relative">
                                <Image
                                    src="/assets/clouds.avif"
                                    alt="Clouds Left 1"
                                    fill
                                    className="object-contain scale-150"
                                    priority
                                />
                            </div>
                            <div className="w-1/2 h-full relative">
                                <Image
                                    src="/assets/clouds.avif"
                                    alt="Clouds Left 2"
                                    fill
                                    className="object-contain scale-150"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Right Side Container - Clips content at left edge (center of screen) */}
                <div className="w-1/2 h-full overflow-hidden relative">
                    <div className="absolute inset-0 opacity-80">
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "-50%" }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute top-0 left-0 w-[200%] h-full flex"
                        >
                            {/* Duplicate images for seamless loop */}
                            <div className="w-1/2 h-full relative">
                                <Image
                                    src="/assets/clouds.avif"
                                    alt="Clouds Right 1"
                                    fill
                                    className="object-contain scale-150 -scale-x-100"
                                    priority
                                />
                            </div>
                            <div className="w-1/2 h-full relative">
                                <Image
                                    src="/assets/clouds.avif"
                                    alt="Clouds Right 2"
                                    fill
                                    className="object-contain scale-150 -scale-x-100"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>

            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center max-w-5xl mx-auto text-center scale-[0.85] sm:scale-[0.8] md:scale-85 lg:scale-95 xl:scale-100 origin-top">

                {/* Mobile Status Indicator (Matches reference position - Text Only) */}
                {/* <div className="flex md:hidden items-center gap-2 mb-2 sm:mb-3 relative z-50">
                    <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">Disponible para proyectos</span>
                </div> */}

                {/* Person & Cards Group */}
                <div className="relative w-full max-w-[500px] h-[580px] mb-2 flex justify-center items-end opacity-100">

                    {/* Animated Clouds behind Cards - Reduced Size */}
                    <div className="absolute top-8 sm:top-10 md:top-12 left-1/2 -translate-x-1/2 w-[350px] sm:w-[380px] md:w-[400px] h-[350px] sm:h-[380px] md:h-[400px] -z-10 opacity-70 pointer-events-none">
                        <motion.div
                            animate={{ x: [-30, 30, -30] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/assets/clouds.avif"
                                alt="Clouds Behind"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </div>

                    {/* Project Cards (Behind) - Fanned out */}
                    <div className="absolute top-[140px] sm:top-[100px] md:top-[-20px] lg:top-[-40px] xl:top-[-80px] left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 flex justify-center items-start scale-[0.6] sm:scale-[0.7] md:scale-80 lg:scale-90 xl:scale-100 origin-top">
                        {[
                            { title: "SaaS Móvil", x: -140, y: 40, rotate: -20, delay: 0.6, z: 0 },
                            { title: "Asistente IA", x: -100, y: 0, rotate: -12, delay: 0.4, z: 10 },
                            { title: "Nexus GPT", x: 0, y: -20, rotate: 0, delay: 0.2, z: 20, isCenter: true },
                            { title: "Agencia IA", x: 100, y: 0, rotate: 12, delay: 0.4, z: 10 },
                            { title: "Dashboard SaaS", x: 140, y: 40, rotate: 20, delay: 0.6, z: 0 },
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: 0, y: 100, rotate: 0, opacity: 0 }}
                                animate={{ x: card.x, y: card.y, rotate: card.rotate, opacity: .5 }}
                                transition={{ delay: card.delay, duration: 0.8, type: "spring" }}
                                style={{ zIndex: card.z }}
                                className={`absolute top-0 w-50 h-50 bg-gradient-to-b from-white/10 via-white/60 to-white shadow-lg rounded-[15px] border border-white/40 p-1 backdrop-blur-[2px] flex flex-col origin-bottom ${card.isCenter ? 'scale-110' : 'scale-100 opacity-80'}`}
                            >
                                {/* Card Image Area - Removed explicit image for center card to match request */}
                                <div className="relative w-full h-56 bg-white rounded-sm rounded-[15px] overflow-hidden shadow-inner mb-1 group-hover:scale-[1.02] transition-transform">
                                    <Image
                                        src="/assets/card-image.png"
                                        alt={card.title}
                                        fill
                                        className="object-cover opacity-90"
                                    />
                                </div>

                                {/* Card Title - Times New Roman style (serif), distinct and small */}
                                <div className="px-2 mt-auto pb-1">
                                    <h3 className="font-serif text-sm text-gray-900 tracking-tight text-left leading-tight">
                                        {card.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Person Image - Raised Position & Closer to Text */}
                    <motion.div
                        className="relative w-[300px] h-[360px] sm:w-[320px] sm:h-[400px] md:w-[360px] md:h-[460px] lg:w-[420px] lg:h-[540px] xl:w-[500px] xl:h-[620px] z-30 origin-bottom translate-y-[-20px] sm:translate-y-[-10px] md:translate-y-[-5px] opacity-90 [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <Image
                            src="/assets/me.png"
                            alt="Martin Esparza"
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                        {/* White Gradient Overlay at Bottom */}
                        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/60 to-transparent z-40 pointer-events-none" />
                    </motion.div>

                </div>

                {/* Headline - Negative margin to pull it closer to image */}
                <motion.div className="-mt-[135px] sm:-mt-[110px] md:-mt-[130px] lg:-mt-[135px] xl:-mt-[140px] relative z-30">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.90] text-gray-900 font-serif flex flex-col items-center"
                    >
                        <span className="flex items-center gap-3 sm:gap-4">
                            <span className="italic font-light tracking-tight font-serif">Desarrollando</span>

                            {/* Interface Badge Pill - Scales down on mobile */}
                            <span className="inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 bg-gradient-to-b from-[#E8F0FE] via-[#F5F9FF] to-white/95 border border-white/80 rounded-[35px] px-2.5 py-1 sm:px-3 sm:py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-3 shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-xl relative">
                                {/* Subtle inner shadow */}
                                <div className="absolute inset-0 rounded-[35px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]" />

                                {/* Icon */}
                                <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-11 lg:w-10 lg:h-14 rounded-[35px] overflow-hidden shadow-lg">
                                    <Image
                                        src="/assets/interface-icon.png"
                                        alt="Interface Icon"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>

                                {/* Text */}
                                <span className="font-serif text-[0.7rem] sm:text-[0.63rem] md:text-[0.64em] lg:text-[0.65em] tracking-tight text-gray-900 relative z-10">Software</span>
                            </span>
                        </span>

                        <span className="mt-1 tracking-tight font-serif">Que Impacta</span>
                    </motion.h1>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                    className="mt-6 sm:mt-2.5 md:mt-3 text-sm sm:text-sm md:text-base text-gray-500 max-w-xl font-light px-6 sm:px-8 leading-relaxed"
                >
                    Hola, soy Martin, Desarrollador de Software con 3 años de experiencia ayudando a marcas y negocios a construir productos digitales robustos y escalables.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
                    className="mt-8 sm:mt-5 md:mt-6 flex flex-row items-center justify-center gap-3 sm:gap-3 w-full px-1"
                >
                    <div className="flex-shrink-0 w-auto">
                        <BlackButton className="w-auto whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base">Trabajemos Juntos</BlackButton>
                    </div>
                    <button className="w-auto whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm flex-shrink-0">
                        <BriefcaseIcon /> Agendar Llamada
                    </button>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
                    className="mt-6 sm:mt-7 md:mt-8 flex items-center gap-4 sm:gap-5"
                >
                    {[Dribbble, Twitter, Linkedin, Instagram].map((Icon, i) => (
                        <div key={i} className="p-3 sm:p-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm text-gray-600 hover:text-black hover:scale-110 transition-all cursor-pointer">
                            <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

const BriefcaseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="14" x="3" y="8" rx="2" /><path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" /></svg>
)
