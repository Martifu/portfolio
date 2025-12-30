"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Copy, Dribbble, Twitter, Linkedin, Instagram } from "lucide-react";
import { BlackButton } from "./BlackButton";

export const Hero = () => {
    return (
        <section className="relative w-full h-auto pb-20 md:pb-10 lg:pb-40 overflow-hidden bg-white flex flex-col items-center justify-start pt-8 sm:pt-16 md:pt-24 lg:pt-48">

            {/* Background Gradients - Split Left (Warm) / Right (Blue) - Behind Cards */}
            <div className="absolute top-[-5%] sm:top-[2%] md:top-[5%] lg:top-[-2%] xl:top-[-4%] left-1/2 -translate-x-1/2 pointer-events-none z-0">
                <div className="relative w-[500px] sm:w-[600px] md:w-[700px] h-[350px] sm:h-[400px] md:h-[450px]">
                    {/* Left Warm Glow - Concentrated */}
                    <div className="absolute top-0 left-0 w-1/2 h-full opacity-100 blur-3xl"
                        style={{ background: 'radial-gradient(ellipse at center left, rgba(255,200,160, 1), rgba(255,220,200,0.6) 50%, transparent 70%)' }} />

                    {/* Right Blue Glow - Concentrated */}
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-100 blur-3xl"
                        style={{ background: 'radial-gradient(ellipse at center right, rgba(180,210,255, 1), rgba(200,220,255,0.6) 50%, transparent 70%)' }} />
                </div>
            </div>



            {/* Clouds Animation Layer - Split Container to Clip at Center */}
            <div className="absolute top-[0%] sm:top-[4%] md:top-[8%] lg:top-[0%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[700px] md:w-[800px] h-[350px] sm:h-[400px] md:h-[450px] z-0 pointer-events-none flex">

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
                <div className="relative w-full max-w-[500px] h-[490px] sm:h-[550px] md:h-[550px] lg:h-[600px] xl:h-[620px] mb-2 flex justify-center items-end opacity-100">



                    {/* Project Cards (Behind) - Fanned out */}
                    <div className="absolute top-[70px] sm:top-[80px] md:top-[40px] lg:top-[-40px] xl:top-[-80px] left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0 flex justify-center items-start scale-[0.6] sm:scale-[0.7] md:scale-80 lg:scale-90 xl:scale-100 origin-top">
                        {[
                            { title: "Reda CRM", x: -160, y: 70, rotate: -20, delay: 0.6, z: 0, opacity: 0.5 },
                            { title: "Gebesa Desk Controller", x: -120, y: 25, rotate: -8, delay: 0.4, z: 10, opacity: 0.8 },
                            { title: "Nexus GPT", x: 0, y: -5, rotate: 0, delay: 0.2, z: 20, isCenter: true, opacity: 1 },
                            { title: "Automatizaciones IA", x: 160, y: 25, rotate: 8, delay: 0.4, z: 10, opacity: 0.8 },
                            { title: "N8N Flows", x: 190, y: 70, rotate: 20, delay: 0.6, z: 0, opacity: 0.5 },
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: 0, y: 100, rotate: 0, opacity: 0 }}
                                animate={{ x: card.x, y: card.y, rotate: card.rotate, opacity: card.opacity }}
                                transition={{ delay: card.delay, duration: 0.8, type: "spring" }}
                                style={{ zIndex: card.z }}
                                className={`absolute top-0 w-55 h-55 bg-gradient-to-b from-white/10 via-white/60 to-white shadow-lg rounded-[15px] border border-gray-200 p-1 backdrop-blur-[2px] flex flex-col origin-bottom ${card.isCenter ? 'scale-110' : 'scale-100'}`}
                            >
                                {/* Card Image Area - Removed explicit image for center card to match request */}
                                <div className="relative border border-gray-200 w-full h-56 bg-white rounded-[10px] overflow-hidden shadow-inner mb-1 group-hover:scale-[1.02] transition-transform">
                                    <Image
                                        src="/assets/card-image.png"
                                        alt={card.title}
                                        fill
                                        className="opacity-90"
                                    />
                                </div>

                                {/* Card Title - Times New Roman style (serif), distinct and small */}
                                <div className="px-2 mt-auto pb-2 pt-2">
                                    <h3 className="font-serif text-md text-gray-900 tracking-tight text-left leading-tight">
                                        {card.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Animated Clouds IN FRONT of Cards */}
                    <div className="absolute top-[-20px] sm:top-0 md:top-5 left-1/2 -translate-x-1/2 w-[350px] sm:w-[380px] md:w-[400px] h-[350px] sm:h-[380px] md:h-[400px] z-25 opacity-70 pointer-events-none">
                        <motion.div
                            animate={{ x: [-30, 30, -30] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/assets/clouds.avif"
                                alt="Clouds Front"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </div>

                    {/* Person Image - Raised Position & Closer to Text */}
                    <motion.div
                        className="relative w-[280px] h-[330px] sm:w-[300px] sm:h-[370px] md:w-[340px] md:h-[430px] lg:w-[400px] lg:h-[510px] xl:w-[460px] xl:h-[580px] z-30 origin-bottom translate-y-[-20px] sm:translate-y-[-10px] md:translate-y-[-5px] opacity-90 [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]"
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
                <motion.div className="-mt-[125px] sm:-mt-[80px] md:-mt-[130px] lg:-mt-[125px] xl:-mt-[125px] relative z-30">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                        className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.90] text-gray-900 font-serif flex flex-col items-center"
                    >
                        <span className="flex items-center gap-3 sm:gap-4">
                            <span className="font-light tracking-tight font-serif mr-[-5px]">Desarrollando</span>

                            {/* Interface Badge Pill - Scales down on mobile */}
                            <span className="inline-flex items-center gap-[0.08em] bg-gradient-to-b from-[#F2F6FF] to-[#FFFFFF] border border-gray-500/20 rounded-[0.3em] px-[0.15em] py-[0.05em] shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl relative -rotate-3 transform hover:rotate-0 transition-transform duration-300">
                                {/* Subtle inner shadow - lighter */}
                                <div className="absolute inset-0 rounded-[0.3em] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]" />

                                {/* Icon - Rounded Rectangle, No Circle Container */}
                                <div className="relative w-[0.55em] h-[0.7em] overflow-hidden">
                                    <Image
                                        src="/assets/interface-icon.png"
                                        alt="Interface Icon"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>

                                {/* Text - Tighter leading */}
                                <span className="font-serif text-[0.9em] tracking-tight text-gray-900 relative z-10 leading-none">Software</span>
                            </span>
                        </span>

                        <span className="mt-[-5px] tracking-tight font-serif">Que Impacta</span>
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
                        <BlackButton className="w-auto whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base cursor-pointer">Trabajemos Juntos</BlackButton>
                    </div>
                    <button className="w-auto whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm flex-shrink-0 cursor-pointer">
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
