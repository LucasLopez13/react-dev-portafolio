import React from 'react';
import { Github, Linkedin, FileText, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center bg-dark-900 pb-12 relative overflow-hidden">
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">


                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden md:flex flex-col gap-8 items-center py-8 border-r border-dark-700/50 pr-8"
                    >
                        <a href="https://github.com/LucasLopez13" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/lucas-federico-lopez2003" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <div className="h-24 w-px bg-gradient-to-b from-dark-700 to-transparent"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 text-left"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-dark-800 border border-dark-700 text-primary-500 font-medium text-sm tracking-wide uppercase mb-6">
                            Backend Developer
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                            Hola, soy <br />
                            <span className="gradient-text">Lucas Lopez</span>
                        </h1>

                        <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
                            Desarrollador Backend apasionado por el código limpio y la arquitectura de software eficiente.
                            Me enfoco en crear sistemas escalables, seguros y de alto rendimiento.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#projects" className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg shadow-primary-600/20 flex items-center gap-2">
                                Ver Mis Proyectos <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="/Lucas_Lopez_Backend_Developer_Java.pdf" download="Lucas_Lopez_Backend_Developer_Java.pdf" className="px-6 py-3 bg-dark-800 hover:bg-dark-700 text-gray-300 hover:text-white rounded-lg font-medium transition-all border border-dark-700 flex items-center gap-2">
                                <FileText className="w-5 h-5" /> Descargar CV
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
