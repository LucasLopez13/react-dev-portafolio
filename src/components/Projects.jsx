import React from 'react';
import { motion } from 'framer-motion';
import { Github, Folder } from 'lucide-react';

const Projects = () => {
    const proyectos = [
        {
            title: "Booking API RESTful",
            desc: "API para la gestión de reservas que asegura cero solapamientos mediante validaciones en tiempo real, implementando seguridad JWT y arquitectura Docker.",
            tags: ["Java", "Spring Boot", "Docker", "MySQL"],
            links: { code: "https://github.com/LucasLopez13/spring-boot-booking-api" },
            image: require("../assets/images/banner-booking-api.png")
        },
        {
            title: "ForoHub",
            desc: "Gestión de foros que impide la duplicidad de tópicos mediante validaciones, implementando seguridad JWT, migraciones Flyway y documentación Swagger.",
            tags: ["Java", "Spring Boot", "MySQL", "JWT", "Swagger"],
            links: { code: "https://github.com/LucasLopez13/ChallengeForoHub_AluraLatam" },
            image: require("../assets/images/banner-forohub.png")
        },
        {
            title: "LedgerX (En Desarrollo)",
            desc: "En desarrollo",
            tags: ["Java", "Spring Boot", "PostgreSQL", "MongoDB"],
            links: { code: "https://github.com/LucasLopez13/spring-boot-ledgerX" },
            image: require("../assets/images/banner-ledgerx.png")
        }
    ];

    return (
        <section id="projects" className="py-20 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proyectos.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-dark-900 rounded-xl overflow-hidden border border-dark-700 hover:border-primary-500/50 transition-all hover:-translate-y-2"
                        >
                            <div className="h-48 bg-dark-800 overflow-hidden relative group">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center group-hover:from-dark-700 group-hover:to-dark-600 transition-colors">
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                                            <Folder className="w-24 h-24" />
                                        </div>
                                        <span className="text-gray-500 font-medium z-10">{project.title} Preview</span>
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="text-xs px-2 py-1 bg-dark-800 text-primary-400 rounded border border-dark-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto">
                                    <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-dark-800 hover:bg-primary-600 text-gray-300 hover:text-white rounded-lg transition-all font-medium border border-dark-700 hover:border-transparent">
                                        <Github className="w-5 h-5" /> Ver Código en GitHub
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
