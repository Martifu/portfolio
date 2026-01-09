"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Monitor, Phone, Bot, LucideIcon } from "lucide-react";
import { BlackButton } from "./BlackButton";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  mockupImages: string[];
}

const SERVICES: Service[] = [
  {
    id: 0,
    title: "Desarrollo Móvil",
    description: "Interfaces intuitivas para productos digitales",
    icon: Phone,
    mockupImages: [
      "/assets/reda-crm.png",
      "/assets/gebesa-card.png",
      "/assets/ai-card.png",
      "/assets/simpatia.png"
    ]
  },
  {
    id: 1,
    title: "Desarrollo Web",
    description: "Sitios web que convierten visitantes en clientes",
    icon: Monitor,
    mockupImages: [
      "/assets/simpatia.png",
      "/assets/reda-crm.png",
      "/assets/n8n.png",
      "/assets/gebesa-card.png"
    ]
  },
  {
    id: 2,
    title: "Automatizaciones",
    description: "Procesos automatizados para mejorar la eficiencia (n8n)",
    icon: Bot,
    mockupImages: [
      "/assets/ai-card.png",
      "/assets/reda-crm.png",
      "/assets/gebesa-card.png",
      "/assets/simpatia.png"
    ]
  }
];

export const Services = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const activeService = SERVICES[activeServiceIndex];

  return (
    <section id="services" className="relative w-full py-20 pb-32 flex flex-col items-center bg-white overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] pointer-events-none z-0">
        <div className="w-full h-full opacity-100 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(180,210,255, 0.6) 0%, rgba(255,220,200,0.4) 50%, transparent 80%)' }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center gap-4 mb-12">
        {/* Label Caveat */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-caveat text-xl sm:text-2xl text-gray-600"
        >
          Mi Oficio
        </motion.span>

        {/* Título con Badge "👋 Ti" */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 text-center leading-[1.1] mb-6"
        >
          <span className="flex flex-col items-center gap-0">
            <span>Lo Que Puedo</span>
            <span className="flex items-center gap-2">
              Hacer Por
              {/* Badge con rotación -3deg */}
              <span className="inline-flex items-center gap-[0.12em] bg-gradient-to-b from-[#F2F6FF] to-[#FFFFFF] border border-gray-500/20 rounded-[0.35em] px-[0.18em] py-[0.08em] shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl relative -rotate-2 transform hover:rotate-0 transition-transform duration-300">
                <div className="absolute inset-0 rounded-[0.35em] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]" />
                <div className="relative w-[0.6em] h-[0.75em] overflow-hidden">
                  <Image
                    src="https://framerusercontent.com/images/O7ue84CHxV7YtOR26PKHuHpmfw.png?width=144&height=192"
                    alt="Hand Icon"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-serif text-[0.9em] tracking-tight text-gray-900 relative z-10 leading-none">Ti</span>
              </span>
            </span>
          </span>
        </motion.h2>
      </div>

      {/* Main Content Grid - Flex centrado en desktop para "flotar" */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 mb-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">

          {/* LEFT: Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-[300px] sm:max-w-[320px] lg:max-w-[340px]"
          >
            <div className="relative">
              {/* Nube estática detrás del showcase - Fuera de AnimatePresence para evitar re-render */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] z-[-1] opacity-60 pointer-events-none">
                <Image
                  src="/assets/cloud-service-bg.png"
                  alt="Cloud Background"
                  fill
                  className="object-contain"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Clean White Card - Sin wrapper glass */}
                  <div className="bg-white/90 backdrop-blur-sm shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-[32px] p-5 sm:p-5 relative overflow-hidden h-full">
                    {/* Title */}
                    <div className="mb-6 relative z-10">
                      <motion.h5
                        key={`title-${activeService.id}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="font-caveat text-sm sm:text-xl text-gray-800 text-center"
                      >
                        {activeService.title}
                      </motion.h5>
                    </div>

                    {/* Cards Container */}
                    <div className="relative  h-[200px] sm:h-[150px] flex items-center justify-center">
                      {activeService.mockupImages.slice(0, 2).map((img, idx) => {
                        const positions = [
                          { x: -40, rotate: -12, z: 0, scale: 1 },
                          { x: 40, rotate: 6, z: 10, scale: 1 }
                        ];
                        const pos = positions[idx];

                        return (
                          <motion.div
                            key={idx}
                            initial={{ x: 0, y: 40, rotate: 0, opacity: 0 }}
                            animate={{
                              x: pos.x,
                              y: 0,
                              rotate: pos.rotate,
                              opacity: 1,
                              scale: pos.scale
                            }}
                            transition={{ delay: idx * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
                            style={{ zIndex: pos.z }}
                            className="absolute w-48 sm:w-52 h-36 sm:h-40 bg-white shadow-2xl rounded-[20px] border border-white overflow-hidden"
                          >
                            <div className="relative w-full h-full bg-gray-50">
                              <Image
                                src={img}
                                alt={`${activeService.title} screenshot ${idx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Nubes Animadas - Pasan por encima de todo el Showcase Card */}
              <div className="absolute top-36 left-1/2 -translate-x-1/2 w-full h-full z-[100] pointer-events-none overflow-visible"
                style={{
                  maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
                }}
              >
                <div className="absolute inset-0 opacity-50">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      repeatType: "loop"
                    }}
                    className="absolute top-0 left-0 w-[200%] h-full flex"
                  >
                    <div className="w-1/2 h-full relative flex-shrink-0">
                      <Image
                        src="/assets/clouds.avif"
                        alt="Animated Clouds 1"
                        fill
                        className="object-contain scale-150"
                        priority
                      />
                    </div>
                    <div className="w-1/2 h-full relative flex-shrink-0">
                      <Image
                        src="/assets/clouds.avif"
                        alt="Animated Clouds 2"
                        fill
                        className="object-contain scale-150"
                        priority
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Service Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-3 items-start"
          >
            {SERVICES.map((service, index) => {
              const isActive = activeServiceIndex === index;
              const Icon = service.icon;

              return isActive ? (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceIndex(index)}
                  className="px-6 py-3 bg-[#050505] text-white rounded-full text-[15px] font-medium shadow-[0_4px_20px_rgba(0,0,0,0.25)] flex items-center gap-3 justify-start overflow-hidden relative transition-all duration-300 transform scale-[1.02] whitespace-nowrap cursor-pointer"
                >
                  {/* Top Shine Effect - Identical to reference */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-gradient-to-b from-white/15 to-transparent blur-[12px] rounded-full pointer-events-none" />

                  <Icon size={20} className="flex-shrink-0 relative z-10 text-white" />
                  <span className="relative z-10 tracking-wide">{service.title}</span>
                </button>
              ) : (
                <motion.button
                  key={service.id}
                  onClick={() => setActiveServiceIndex(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="px-6 py-3 bg-[#f0f0f0] text-[#1C1C1C] rounded-full text-[15px] font-medium flex items-center gap-3 justify-start overflow-hidden transition-all hover:bg-[#e8e8e8] whitespace-nowrap cursor-pointer"
                  style={{ boxShadow: '0 0 0 1px white, 0 0 0 2px #d0d0d0, 0 2px 4px rgba(0,0,0,0.04)' }}
                >
                  <Icon size={20} className="flex-shrink-0 text-[#1C1C1C]" />
                  <span className="tracking-wide">{service.title}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Call to Action - Por encima de todo */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="relative z-40 flex justify-center mt-4"
      >
        <BlackButton className="px-8 py-4 text-base shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)] transition-all duration-300 hover:scale-105">
          Trabajemos Juntos
        </BlackButton>
      </motion.div>

    </section>
  );
};
