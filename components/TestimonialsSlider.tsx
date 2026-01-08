"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, HelpCircle } from "lucide-react";
import { BlackButton } from "./BlackButton";

// Testimonial Data
const TESTIMONIALS = [
    {
        id: 0,
        quote: "Tuve el placer de trabajar con Martin en un proyecto reciente de diseño UI/UX, y su trabajo superó mis expectativas. Ejecutó el diseño con precisión, creatividad y atención al detalle. Martin fue capaz de entender...",
        name: "Denver Lopes",
        title: "Founder Frogit",
        image: "/assets/person.png"
    },
    {
        id: 1,
        quote: "Trabajar con Martin fue honestamente muy fácil. El tipo puede hacer magia bajo presión: le lanzamos un proyecto con un plazo loco de 24 horas y lo clavó perfectamente, incluso estando en zonas horarias completamente diferentes. Su capacidad para comunicar ideas técnicas de forma sencilla es una habilidad rara.",
        name: "Angela Wu",
        title: "Founder Komo AI",
        image: "/assets/person.png"
    },
    {
        id: 2,
        quote: "Martin transformó nuestra presencia digital por completo. No solo entregó un código impecable, sino que aportó ideas de diseño que mejoraron significativamente la experiencia de usuario de nuestros clientes. Es un desarrollador que realmente entiende el negocio y el diseño.",
        name: "Carlos M.",
        title: "CTO TechStartup",
        image: "/assets/person.png"
    },
    // Final CTA Slide
    {
        id: 3,
        isCTA: true,
        quote: "¿Quién Sigue? ¿Tú? ¡Empecemos!",
        name: "Tu nombre",
        title: "tu puesto irá aquí",
        image: ""
    }
];

export const TestimonialsSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const handleNext = () => {
        if (currentIndex < TESTIMONIALS.length - 1) {
            setDirection(1);
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(prev => prev - 1);
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
            filter: "blur(4px)"
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)"
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95,
            filter: "blur(4px)"
        })
    };

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section className="relative w-full py-20 lg:py-32 flex flex-col items-center overflow-hidden bg-white min-h-[800px] justify-center">

            {/* --- Background Elements --- */}

            {/* Bottom-Left Warm Gradient & Clouds */}
            <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] pointer-events-none z-0">
                <div className="absolute inset-0 opacity-40 blur-[80px]"
                    style={{ background: 'radial-gradient(circle, rgba(255,200,160, 0.8) 0%, rgba(255,240,230,0) 70%)' }} />
                <motion.div
                    animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-20 left-10 w-[400px] h-[300px] opacity-60"
                >
                    <Image src="/assets/clouds.avif" alt="Clouds Left" fill className="object-contain opacity-80" />
                </motion.div>
            </div>

            {/* Top-Right Blue Gradient & Clouds */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] pointer-events-none z-0">
                <div className="absolute inset-0 opacity-40 blur-[80px]"
                    style={{ background: 'radial-gradient(circle, rgba(180,210,255, 0.8) 0%, rgba(200,220,255,0) 70%)' }} />
                <motion.div
                    animate={{ x: [0, -20, 0], y: [0, 10, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute top-20 right-10 w-[400px] h-[300px] opacity-60"
                >
                    <Image src="/assets/clouds.avif" alt="Clouds Right" fill className="object-contain opacity-80" />
                </motion.div>
            </div>


            {/* --- Header Content --- */}
            <div className="relative z-10 flex flex-col items-center text-center mb-12 w-full px-4">
                <span className="font-caveat text-xl sm:text-2xl text-gray-600 mb-2">Testimonios</span>
                <h2 className="font-serif text-5xl sm:text-6xl text-gray-900 tracking-tight leading-none mb-4">
                    Palabras Honestas,
                </h2>

                {/* Real Impact Badge */}
                {/* Real Impact Badge - Identical Style to Original Testimonials */}
                <div className="relative inline-flex items-center gap-2 px-4 py-2 shadow-sm rounded-xl overflow-hidden ring-1 ring-gray-200 ring-offset-4 ring-offset-[#FFF8F5] transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500"
                    style={{
                        background: 'radial-gradient(circle at center, #FFFFFF 0%, #FFF0E5 100%)'
                    }}
                >
                    <div className="relative w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0">
                        <Image
                            src="https://framerusercontent.com/images/QcWDEiwLeMULb9Yilzd4rQTwRE.png"
                            alt="Stars"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="font-garamond text-4xl sm:text-5xl text-gray-900 leading-none pb-1 whitespace-nowrap">Impacto Real</span>
                </div>
            </div>

            {/*Quote Icon Badge*/}
            <div className="relative z-10 mb-8">
                <div className="w-24 h-10 bg-[#F9FAFB] border border-[#F3F4F6] rounded-full flex items-center justify-center gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.04)] box-border px-4">
                    <div className="w-1 h-1 bg-gray-300 rounded-full transform rotate-45" />
                    <Quote className="w-5 h-5 text-gray-800 fill-gray-800" />
                    <div className="w-1 h-1 bg-gray-300 rounded-full transform rotate-45" />
                </div>
            </div>


            {/* --- Slider Section --- */}
            <div className="relative z-20 w-full max-w-3xl mx-auto px-6 h-[250px] sm:h-[300px] flex items-center justify-center mb-8">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.2 },
                            filter: { duration: 0.2 }
                        }}
                        className="absolute w-full flex flex-col items-center text-center"
                    >
                        {!currentTestimonial.isCTA ? (
                            // Normal Testimonial Content
                            <p className="text-gray-600 font-light text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl">
                                {currentTestimonial.quote}
                            </p>
                        ) : (
                            // Final CTA Content
                            <div className="flex flex-col items-center">
                                <h3 className="font-serif text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight">
                                    ¿Quién Sigue? ¿Tú? ¡Empecemos!
                                </h3>
                                <div className="mt-2">
                                    <BlackButton className="px-8 py-3 text-base">Empezar</BlackButton>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* --- Author/Footer Section --- */}
            <div className="relative z-20 flex flex-col items-center gap-6">

                {/* Author Info (Only for non-CTA slides) */}
                <div className="h-[60px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {!currentTestimonial.isCTA ? (
                            <motion.div
                                key={`author-${currentIndex}`}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-4"
                            >
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-200 shadow-sm">
                                    <Image src={currentTestimonial.image} alt={currentTestimonial.name} fill className="object-cover" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-gray-900 leading-tight">{currentTestimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{currentTestimonial.title}</p>
                                </div>
                            </motion.div>
                        ) : (
                            // CTA Placeholder Author
                            <motion.div
                                key="cta-author"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-4 opacity-60 grayscale"
                            >
                                <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                                    <HelpCircle size={20} className="text-gray-400" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-medium text-gray-700 leading-tight">Tu nombre</h4>
                                    <p className="text-sm text-gray-400">tu puesto irá aquí</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <div className="flex items-center gap-4 mt-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`w-14 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed bg-gray-50' : 'hover:bg-gray-50 hover:border-gray-300 hover:scale-105 active:scale-95 bg-white'}`}
                    >
                        <ArrowLeft size={18} className="text-gray-600" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === TESTIMONIALS.length - 1}
                        className={`w-14 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-all ${currentIndex === TESTIMONIALS.length - 1 ? 'opacity-30 cursor-not-allowed bg-gray-50' : 'hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 hover:scale-105 active:scale-95 bg-white'}`}
                    >
                        <ArrowRight size={18} className="text-gray-600 hover:text-blue-600" />
                    </button>
                </div>

            </div>

        </section>
    );
};
