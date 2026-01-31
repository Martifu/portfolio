"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
    onNextProject?: () => void;
}

export const ProjectDetailModal = ({ isOpen, onClose, project, onNextProject }: ProjectDetailModalProps) => {
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                if (previewImage) {
                    setPreviewImage(null);
                } else {
                    onClose();
                }
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose, previewImage]);

    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    // Reset scroll when project changes
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, [project]);

    if (!isOpen || !project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-gray-100 transition-colors border border-gray-200"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>

                        {/* Scrollable Content */}
                        <div ref={scrollContainerRef} className="overflow-y-auto overflow-x-hidden flex-1 p-6 sm:p-10 md:p-12 scrollbar-hide">

                            {/* Header Section */}
                            <div className="flex flex-col gap-6 mb-10">
                                <h2 className="font-serif text-4xl sm:text-5xl text-gray-900 leading-tight">
                                    {project.title}
                                </h2>

                                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                                    {project.description}
                                </p>

                                {/* Main Image */}
                                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[24px] overflow-hidden bg-gray-50 border border-gray-100 shadow-sm mt-4">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Info Grid (Date, Role, Company) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-b border-gray-100 mb-12">
                                <div className="flex flex-col gap-1">
                                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">Date</span>
                                    <span className="text-lg font-serif text-gray-900">{project.date || "N/A"}</span>
                                </div>
                                <div className="flex flex-col gap-1 md:border-l md:border-gray-100 md:pl-6">
                                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">Role</span>
                                    <span className="text-lg font-serif text-gray-900">{project.role || "N/A"}</span>
                                </div>
                                <div className="flex flex-col gap-1 md:border-l md:border-gray-100 md:pl-6">
                                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wide">Company</span>
                                    <span className="text-lg font-serif text-gray-900">{project.company || "N/A"}</span>
                                </div>
                            </div>

                            {/* Store Buttons */}
                            {(project.playStoreUrl || project.appStoreUrl) && (
                                <div className="flex flex-wrap gap-4 mb-12">
                                    {project.playStoreUrl && (
                                        <a
                                            href={project.playStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                                        >
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                            </svg>
                                            <span className="font-medium">Google Play</span>
                                        </a>
                                    )}
                                    {project.appStoreUrl && (
                                        <a
                                            href={project.appStoreUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors shadow-sm"
                                        >
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                            </svg>
                                            <span className="font-medium">App Store</span>
                                        </a>
                                    )}
                                </div>
                            )}

                            {/* Problem Section */}
                            {project.problem && (
                                <div className="mb-16">
                                    <h3 className="font-serif text-3xl text-gray-900 mb-6">{project.problem.title}</h3>
                                    <div className="space-y-6">
                                        {project.problem.points.map((point, idx) => (
                                            <div key={idx} className="flex flex-col gap-1">
                                                <h4 className="font-semibold text-gray-900 text-lg">{point.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{point.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Solution Section */}
                            {project.solution && (
                                <div className="mb-16">
                                    <h3 className="font-serif text-3xl text-gray-900 mb-6">{project.solution.title}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {project.solution.points.map((point, idx) => (
                                            <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                                <h4 className="font-semibold text-gray-900 text-lg mb-2">{point.title}</h4>
                                                <p className="text-gray-600 leading-relaxed text-sm">{point.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Market Analysis Section */}
                            {project.marketAnalysis && (
                                <div className="mb-16">
                                    <h3 className="font-serif text-3xl text-gray-900 mb-6">{project.marketAnalysis.title}</h3>
                                    <div className="space-y-6 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
                                        {project.marketAnalysis.points.map((point, idx) => (
                                            <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                                                <h4 className="font-semibold text-gray-900 text-lg">{point.title}</h4>
                                                <p className="text-gray-600 leading-relaxed">{point.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Gallery Grid */}
                            {project.gallery && project.gallery.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                                    {project.gallery.map((img, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`relative rounded-2xl overflow-hidden border border-gray-100 shadow-sm cursor-pointer ${idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'}`}
                                            onClick={() => setPreviewImage(img)}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Gallery image ${idx + 1}`}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Results Section */}
                            {project.result && (
                                <div className="mb-12">
                                    <h3 className="font-serif text-3xl text-gray-900 mb-6">{project.result.title}</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        {project.result.points.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2.5 flex-shrink-0" />
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 text-lg">{point.title}</h4>
                                                    <p className="text-gray-600 leading-relaxed text-sm">{point.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Footer / Next Project */}
                        {onNextProject && (
                            <div className="border-t border-gray-100 p-6 bg-gray-50/50 flex justify-end">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onNextProject();
                                    }}
                                    className="group flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-colors font-medium text-lg"
                                >
                                    <span>Siguiente Proyecto</span>
                                    <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 group-hover:text-white transition-all shadow-sm">
                                        <ArrowRight size={18} />
                                    </div>
                                </button>
                            </div>
                        )}
                    </motion.div>

                    {/* Image Preview Lightbox */}
                    <AnimatePresence>
                        {previewImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                                onClick={() => setPreviewImage(null)}
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setPreviewImage(null)}
                                    className="absolute top-4 right-4 z-[210] p-2 bg-white/10 backdrop-blur rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <X size={24} className="text-white" />
                                </button>

                                {/* Image container */}
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                                    className="relative w-full h-full max-w-7xl max-h-[90vh]"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Image
                                        src={previewImage}
                                        alt="Preview"
                                        fill
                                        className="object-contain"
                                        unoptimized
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </AnimatePresence>
    );
};
