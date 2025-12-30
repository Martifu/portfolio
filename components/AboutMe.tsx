"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const AboutMe = () => {
    return (
        <section className="relative w-full py-20 pb-32 flex flex-col items-center bg-white overflow-hidden">

            {/* Header */}
            <div className="flex flex-col items-center gap-4 mb-12 relative z-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-caveat text-xl sm:text-2xl text-gray-600"
                >
                    Quién Soy
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 text-center leading-[1.1]"
                >
                    Un desarrollador que le
                    <br />
                    <span className="flex items-center justify-center gap-3">
                        importan los

                        {/* Details Badge */}
                        <span className="inline-flex items-center gap-[0.11em] bg-gradient-to-b from-[#F2F6FF] to-[#FFFFFF] border border-gray-500/20 rounded-[0.2em] px-[0.2em] py-[0.12em] shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl relative transform hover:scale-105 transition-transform duration-300 z-0">
                            {/* Subtle inner shadow */}
                            <div className="absolute inset-0 rounded-[0.2em] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]" />

                            <div className="relative w-[0.55em] h-[0.7em] overflow-hidden">
                                <Image
                                    src="/assets/design-icon.png"
                                    alt="Design Icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <span className="font-serif text-[0.8em] tracking-tight text-gray-900 relative z-10 leading-none">Detalles</span>
                        </span>
                    </span>
                </motion.h2>
            </div>

            {/* Photos Section */}
            <div className="relative w-full max-w-4xl h-[350px] mb-12 flex justify-center items-center z-10">
                {/* Cloud Background behind photos - STATIC */}
                {/* Fixed Z-Index: Was -z-10 (hidden by white bg), now z-0 */}
                <div className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] z-0 opacity-80 pointer-events-none">
                    <Image
                        src="/assets/cloud-bg.png"
                        alt="Cloud Background"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* Animated Clouds - Layered: Behind Photos (z-10), In front of Static BG (z-0) */}
                <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full h-[60%] z-5 pointer-events-none opacity-80 mix-blend-normal">
                    <div className="w-full h-full overflow-hidden relative">
                        <motion.div
                            initial={{ x: "0%" }}
                            animate={{ x: "-50%" }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-0 left-0 w-[200%] h-full flex"
                        >
                            <div className="w-1/2 h-full relative">
                                <Image src="/assets/clouds.avif" alt="Clouds Layer 1" fill className="object-contain object-bottom" />
                            </div>
                            <div className="w-1/2 h-full relative">
                                <Image src="/assets/clouds.avif" alt="Clouds Layer 2" fill className="object-contain object-bottom" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Left Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -30, rotate: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotate: -6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-xl border-[2px] border-white transform translate-x-[20%] sm:translate-x-[-20%] translate-y-[10%] sm:-translate-y-[-5%] z-10"
                >
                    <Image
                        src="/assets/about-left.png"
                        alt="Work Left"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Center Video - Main */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative w-48 h-36 sm:w-80 sm:h-60 rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl z-20 bg-black"
                >
                    <video
                        src="/assets/about-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Right Photo */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 10 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 6 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-[20px] sm:rounded-[30px] overflow-hidden shadow-xl border-[2px] border-white transform -translate-x-[20%] sm:-translate-x-[-20%] translate-y-[10%] sm:-translate-y-[-5%] z-10"
                >
                    <Image
                        src="/assets/about-right.png"
                        alt="Work Right"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>

            {/* Biography Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl px-6 text-center space-y-6 relative z-10 font-sans"
            >
                <p className="text-gray-600 text-lg leading-relaxed">
                    I'm Martin, a UI/UX Designer specializing in clean, intuitive UI for websites and digital products. With 3 years of experience, I help brands turn ideas into interfaces that actually work guiding users seamlessly, creating flow, and boosting conversion.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                    For me, good design is like a good host: it makes people feel welcomed, clear about where to go, and happy to stay longer.
                </p>

                {/* Divider Diamonds */}
                <div className="flex justify-center gap-3 py-4 text-gray-300">
                    <span>✧</span><span>✧</span><span>✧</span>
                </div>

                {/* Mission */}
                <div className="space-y-4">
                    <span className="font-caveat text-xl text-gray-500 block">My Mission?</span>
                    <p className="text-gray-600 text-xl leading-relaxed">
                        My mission is to help brands build digital experiences that go beyond "pretty" making them intuitive, engaging, and truly impactful.
                    </p>
                </div>
            </motion.div>



        </section>
    );
};
