"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { BlackButton } from "./BlackButton";

export const Testimonials = () => {
    return (
        <section className="relative w-full pt-4 lg:pt-12 pb-32 flex flex-col items-center overflow-hidden bg-white">

            {/* Background Warm Glow - Centered behind "Their Words" */}
            <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] pointer-events-none z-0">
                <div className="w-full h-full opacity-100 blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(255,220,200, 1) 0%, rgba(255,240,230,0.9) 60%, transparent 80%)' }} />
            </div>

            {/* Header Section */}
            <div className="relative z-10 flex flex-col items-center text-center mb-16 w-full px-8 md:px-12">

                {/* Trusted by Clients */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-caveat text-2xl md:text-3xl text-gray-800 mb-2 relative z-20"
                >
                    Confían en mí
                </motion.span>

                {/* Main Headline Group */}
                <div className="flex flex-col items-center relative">

                    {/* Animated Clouds - Strictly Behind Text & Positioned Below/Around "Not Mine" */}
                    <div className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300px] pointer-events-none z-0 opacity-100">
                        {/* Seamless Loop Container */}
                        <div className="w-full h-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "0%" }}
                                animate={{ x: "-50%" }}
                                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-[200%] h-full flex"
                            >
                                <div className="w-1/2 h-full relative">
                                    <Image src="/assets/clouds.avif" alt="Clouds Header 1" fill className="object-contain" />
                                </div>
                                <div className="w-1/2 h-full relative">
                                    <Image src="/assets/clouds.avif" alt="Clouds Header 2" fill className="object-contain" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Badge + Text Row */}
                    <div className="flex items-center gap-3 md:gap-4 relative z-20">
                        {/* Badge */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ rotate: -3, scale: 1.02 }}
                            // Updated border style: Ring effect for gray outer, white inner
                            className="relative shadow-sm rounded-xl px-4 py-2 flex items-center gap-2 overflow-hidden ring-1 ring-gray-200 ring-offset-4 ring-offset-[#FFF8F5]"
                            style={{
                                background: 'radial-gradient(circle at center, #FFFFFF 0%, #FFF0E5 100%)'
                            }}
                        >
                            <div className="relative w-6 h-6 md:w-8 md:h-8">
                                <Image
                                    src="https://framerusercontent.com/images/moEcktZXt0v8Lsl6330uPxdg.png?width=164&height=160"
                                    alt="Speech Bubble"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-serif text-2xl md:text-4xl text-gray-900 tracking-tight whitespace-nowrap">Sus Palabras</span>
                        </motion.div>
                    </div>

                    {/* "Not Mine" */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-serif text-5xl md:text-6xl text-gray-900 tracking-tight mt-1 relative z-20"
                    >
                        No las Mías
                    </motion.h2>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto px-8 md:px-12 w-full mb-12">

                {/* Card 1 - Blue Sky (Right Blue from Hero) */}
                <TestimonialCard
                    quote="Tuve el placer de trabajar con Martin en un proyecto reciente de diseño UI/UX, y su trabajo superó mis expectativas. Ejecutó el diseño con precisión, creatividad y atención al detalle. Martin fue capaz de entender..."
                    name="Denver Lopes"
                    title="Founder Frogit"
                    image="/assets/person.png"
                    logo="/assets/interface-icon.png"
                    delay={0.2}
                    // Linear Gradient Top to Bottom
                    gradient="linear-gradient(to bottom, rgba(180,210,255, 0.5) 0%, rgba(255,255,255,0) 60%)"
                />

                {/* Card 2 - Warm Sky (Left Warm from Hero) */}
                <TestimonialCard
                    quote="Trabajar con Martin fue honestamente muy fácil. El tipo puede hacer magia bajo presión: le lanzamos un proyecto con un plazo loco de 24 horas y lo clavó perfectamente, incluso estando en zonas horarias completamente diferentes..."
                    name="Angela Wu"
                    title="Founder Komo AI"
                    image="/assets/person.png"
                    logo="/assets/interface-icon.png"
                    delay={0.3}
                    // Linear Gradient Top to Bottom
                    gradient="linear-gradient(to bottom, rgba(255,200,160, 0.4) 0%, rgba(255,255,255,0) 60%)"
                />

            </div>

            {/* Read More Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-20"
            >
                <BlackButton className="px-8 py-3 rounded-full text-white bg-gray-900 shadow-xl hover:scale-105 transition-transform">
                    Leer Más
                </BlackButton>
            </motion.div>

        </section>
    );
};

const TestimonialCard = ({ quote, name, title, image, logo, delay = 0, gradient }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover="hover" // Fix: Propagate hover state to children
            transition={{ delay }}
            className="flex flex-col bg-white border border-gray-100 rounded-[32px] p-8 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow h-full"
        >
            {/* Top Gradient - Dynamic */}
            <div
                className="absolute top-0 left-0 w-full h-full opacity-60 z-0 pointer-events-none"
                style={{ background: gradient }}
            />

            {/* Top Cloud Asset - Centered at Top - Animates on Hover Seamlessly */}
            <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-full h-[200px] opacity-100 pointer-events-none z-0 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 w-[200%] h-full flex"
                    // Seamless loop on hover: moves from 0 to -50% (scrolling left)
                    variants={{
                        hover: {
                            x: "-50%",
                            transition: { duration: 5, repeat: Infinity, ease: "linear" }
                        }
                    }}
                // Note: whileHover removed here because parent propagates it
                >
                    <div className="w-1/2 h-full relative">
                        <Image src="/assets/clouds.avif" alt="Clouds Card 1" fill className="object-contain" />
                    </div>
                    <div className="w-1/2 h-full relative">
                        <Image src="/assets/clouds.avif" alt="Clouds Card 2" fill className="object-contain" />
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start h-full">
                <Quote className="text-gray-400 fill-gray-400 mb-6 w-8 h-8 opacity-50" />

                <p className="text-gray-900 leading-relaxed mb-8 font-normal text-lg">
                    {quote}
                </p>

                <div className="mt-auto flex items-center justify-between w-full">
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                            <Image src={image} alt={name} fill className="object-cover" />
                        </div>
                        <div>
                            <h4 className="font-serif text-gray-900 font-medium text-lg leading-tight">{name}</h4>
                            <p className="text-xs text-gray-500 font-medium">{title}</p>
                        </div>
                    </div>

                    {/* Logo Badge */}
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center p-2">
                        <Image src={logo} alt="Company" width={20} height={20} className="object-contain opacity-80" />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
