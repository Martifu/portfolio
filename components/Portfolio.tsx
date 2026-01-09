"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BlackButton } from "./BlackButton";
import { PROJECTS, Project } from "@/lib/projects";
import { ProjectDetailModal } from "./ProjectDetailModal";

export const Portfolio = () => {
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
        <section id="portfolio" className="relative w-full py-20 pb-32 flex flex-col items-center bg-white overflow-hidden">

            {/* Background Warm Glow - Centered behind title */}
            <div className="absolute top-[90px] left-1/2 -translate-x-1/2 w-full max-w-lg h-[400px] pointer-events-none z-0">
                <div className="w-full h-full opacity-100 blur-3xl"
                    style={{ background: 'radial-gradient(circle, rgba(255,220,200, 1) 0%, rgba(255,240,230,0.9) 60%, transparent 80%)' }} />
            </div>

            {/* Header Section */}
            <div className="relative z-10 flex flex-col items-center text-center mb-16 w-full px-8 md:px-12">

                {/* Portfolio Label */}
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-caveat text-2xl md:text-3xl text-gray-800 mb-2 relative z-20"
                >
                    Portfolio
                </motion.span>

                {/* Main Headline with Badge */}
                <div className="flex flex-col items-center relative">

                    {/* Animated Clouds - Over Text */}
                    <div className="absolute top-[75%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[300px] pointer-events-none z-30 opacity-100"
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
                                className="absolute top-25 left-0 w-[200%] h-full flex"
                            >
                                <div className="w-1/2 h-full relative">
                                    <Image src="/assets/clouds.avif" alt="Clouds Portfolio 1" fill className="object-contain" />
                                </div>
                                <div className="w-1/2 h-full relative">
                                    <Image src="/assets/clouds.avif" alt="Clouds Portfolio 2" fill className="object-contain" />
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
                        <span className="flex items-center gap-3 justify-center flex-wrap">
                            Un Vistazo a

                            {/* Eye Badge */}
                            <span className="inline-flex items-center gap-[0.12em] bg-gradient-to-b from-[#F2F6FF] to-[#FFFFFF] border border-gray-500/20 rounded-[0.35em] px-[0.18em] py-[0.08em] shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-xl relative -rotate-2 transform hover:rotate-0 transition-transform duration-300">
                                <div className="absolute inset-0 rounded-[0.35em] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]" />
                                <div className="relative w-[0.6em] h-[0.75em] overflow-hidden">
                                    <Image
                                        src="https://framerusercontent.com/images/wOrn0GT7asDych8wTCdlyzGWtM.png?width=140&height=164"
                                        alt="Eye Icon"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-serif text-[0.9em] tracking-tight text-gray-900 relative z-10 leading-none">Mi Trabajo</span>
                            </span>
                        </span>
                    </motion.h2>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto px-8 sm:px-6 md:px-8 w-full mb-12">
                {PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        delay={index * 0.1}
                        onClick={() => handleProjectClick(project)}
                    />
                ))}
            </div>

            {/* See More Detail Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-20"
            >
                <BlackButton className="px-8 py-4 text-base cursor-pointer">
                    Ver Más Detalles
                </BlackButton>
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

const ProjectCard = ({ project, delay = 0, onClick }: { project: Project, delay?: number, onClick: () => void }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            onClick={onClick}
            className="flex flex-col bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-[28px] p-[3px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
            {/* Project Image */}
            <div className="relative w-full h-40 sm:h-44 bg-gray-50 overflow-hidden rounded-[25px] mb-3">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Project Info */}
            <div className="flex flex-col gap-2 px-3 pb-2">
                <h3 className="font-serif text-base sm:text-lg text-gray-900 leading-tight">
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
        </motion.div>
    );
};
