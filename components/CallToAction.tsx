"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlackButton } from "./BlackButton";
import { PROJECTS, Project } from "@/lib/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";

export const CallToAction = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleNextProject = () => {
        if (!selectedProject) return;
        const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
        const nextIndex = (currentIndex + 1) % PROJECTS.length;
        setSelectedProject(PROJECTS[nextIndex]);
    };

    return (
        <section id="cta" className="relative w-full py-20 pb-32 flex flex-col items-center bg-white overflow-hidden">

            {/* Background Blue Gradient */}
            <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] pointer-events-none z-0">
                <div className="w-full h-full opacity-100 blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(180,210,255, 0.8) 0%, rgba(200,220,255,0.6) 60%, transparent 80%)' }} />
            </div>

            {/* Header Section */}
            <div className="relative z-10 flex flex-col items-center text-center mb-16 w-full px-8 md:px-12">

                {/* Label */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-caveat text-2xl md:text-3xl text-gray-800 mb-2 relative z-20"
                >
                    ¿Tienes una idea?
                </motion.span>

                {/* Main Headline with Badge */}
                <div className="flex flex-col items-center relative">

                    {/* Animated Clouds - Over Text */}
                    <div className="absolute top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300px] pointer-events-none z-30 opacity-100"
                        style={{
                            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)'
                        }}
                    >
                        <div className="w-full h-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "0%" }}
                                animate={{ x: "-50%" }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-[200%] h-full flex"
                            >
                                <div className="w-1/2 h-full relative">
                                    <Image src="/assets/clouds.avif" alt="Clouds CTA 1" fill className="object-contain" />
                                </div>
                                <div className="w-1/2 h-full relative">
                                    <Image src="/assets/clouds.avif" alt="Clouds CTA 2" fill className="object-contain" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif text-gray-900 text-center leading-[1.1] relative z-20"
                    >
                        <span className="flex flex-col items-center gap-1">
                            <span>Hagámosla Realidad</span>

                            {/* Handshake Badge */}
                            <span className="inline-flex items-center gap-[0.12em] bg-gradient-to-b from-[#F2F6FF] to-[#FFFFFF] border border-gray-500/20 rounded-[0.35em] px-[0.18em] py-[0.08em] shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl relative -rotate-2 transform hover:rotate-0 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-[0.35em] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]" />
                                <div className="relative w-[0.8em] h-[0.95em] overflow-hidden">
                                    <Image
                                        src="https://framerusercontent.com/images/pcvP8ryrbcVNCdd7iJXx1e1gBpo.png?width=200&height=192"
                                        alt="Handshake Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-serif text-[0.9em] tracking-tight text-gray-900 relative z-10 leading-none">Juntos</span>
                            </span>
                        </span>
                    </motion.h2>
                </div>
            </div>

            {/* Infinite Carousel */}
            <div className="relative z-20 w-full max-w-5xl mx-auto mb-12 overflow-hidden">
                {/* Left Gradient Fade */}
                <div 
                    className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent, black 20%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%)'
                    }}
                />

                {/* Right Gradient Fade */}
                <div 
                    className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent, black 20%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 20%)'
                    }}
                />

                <InfiniteCarousel 
                    projects={PROJECTS} 
                    onProjectClick={handleProjectClick}
                />
            </div>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-20 flex flex-row items-center justify-center gap-3 mb-16 px-1"
            >
                <div className="flex-shrink-0 w-auto">
                    <BlackButton className="w-auto whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm md:text-base cursor-pointer">
                        Trabajemos Juntos
                    </BlackButton>
                </div>
                <button className="w-auto whitespace-nowrap px-4 py-2.5 sm:px-6 sm:py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 shadow-sm flex-shrink-0 cursor-pointer">
                    <BriefcaseIcon />
                    Agendar Llamada
                </button>
            </motion.div>

            {/* Email */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-20 mb-8"
            >
                <a href="mailto:martinesparzadev@gmail.com" className="text-xl sm:text-2xl text-gray-600 hover:text-gray-800 transition-colors font-normal">
                    martinesparzadev@gmail.com
                </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-20 flex items-center mb-10"
            >
                {[
                    { icon: "dribbble", href: "https://dribbble.com" },
                    { icon: "twitter", href: "https://twitter.com" },
                    { icon: "linkedin", href: "https://linkedin.com" },
                    { icon: "instagram", href: "https://instagram.com" }
                ].map((social, idx, arr) => (
                    <div key={idx} className="flex items-center">
                        {/* White Container */}
                        <div className="w-16 h-16 rounded-[20px] bg-white flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                            <a
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-[#2D2D2D] text-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer"
                            >
                                <SocialIcon type={social.icon} />
                            </a>
                        </div>
                        {idx < arr.length - 1 && (
                            <span className="text-gray-300 text-lg mx-3">✦</span>
                        )}
                    </div>
                ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-20 text-gray-400 text-sm font-normal"
            >
                ©Martin Esparza 2025. Todos los derechos reservados
            </motion.div>

            {/* Project Detail Modal */}
            <ProjectDetailModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                project={selectedProject}
                onNextProject={handleNextProject}
            />

        </section>
    );
};

// Infinite Carousel Component
const InfiniteCarousel = ({ projects, onProjectClick }: { projects: Project[], onProjectClick: (project: Project) => void }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId: number;
        let scrollPosition = 0;
        const scrollSpeed = 1.2;

        const animate = () => {
            scrollPosition += scrollSpeed;

            if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }

            scrollContainer.scrollLeft = scrollPosition;
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Duplicate projects for infinite scroll
    const duplicatedProjects = [...projects, ...projects, ...projects];

    return (
        <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden py-4 px-8 sm:px-6"
            style={{ scrollBehavior: 'auto' }}
        >
            {duplicatedProjects.map((project, index) => (
                <CarouselCard
                    key={`${project.id}-${index}`}
                    project={project}
                    onClick={() => onProjectClick(project)}
                />
            ))}
        </div>
    );
};

const CarouselCard = ({ project, onClick }: { project: Project, onClick: () => void }) => {
    return (
        <div 
            onClick={onClick}
            className="flex-shrink-0 w-64 sm:w-72 flex flex-col bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-[28px] p-[3px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            {/* Project Image */}
            <div className="relative w-full h-44 bg-gray-50 overflow-hidden rounded-[25px] mb-3">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Project Info */}
            <div className="flex flex-col gap-2 px-3 pb-2">
                <h3 className="font-serif text-lg text-gray-900 leading-tight">
                    {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag: string, idx: number) => (
                        <span
                            key={idx}
                            className="px-2.5 py-1 bg-[#f0f0f0] text-gray-700 text-[11px] font-medium rounded-full"
                            style={{ boxShadow: '0 0 0 1px white, 0 0 0 2px #d0d0d0' }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const BriefcaseIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="14" x="3" y="8" rx="2" />
        <path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3" />
    </svg>
);

const SocialIcon = ({ type }: { type: string }) => {
    switch (type) {
        case "dribbble":
            return (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
                </svg>
            );
        case "twitter":
            return (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            );
        case "linkedin":
            return (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            );
        case "instagram":
            return (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            );
        default:
            return null;
    }
};
