import React from 'react';
import { motion } from 'framer-motion';
import { Server, Database, GraduationCap, Terminal } from 'lucide-react';

const About = () => {
    const tarjetas = [
        {
            icon: <Server className="w-8 h-8 text-primary-500" />,
            title: "Backend Development",
            desc: "Desarrollo de APIs RESTful robustas con Java y Spring Boot."
        },
        {
            icon: <Database className="w-8 h-8 text-primary-500" />,
            title: "Base de Datos",
            desc: "Diseño y optimización de esquemas SQL y NoSQL (MySQL, PostgreSQL, MongoDB)."
        },
        {
            icon: <Terminal className="w-8 h-8 text-primary-500" />,
            title: "DevOps & Testing",
            desc: "Gestión de contenedores con Docker y aseguramiento de calidad mediante Unit Testing (JUnit, Mockito)."
        }
    ];

    return (
        <section id="about" className="py-20 bg-dark-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sobre Mí</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-8 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Desarrollador Backend especializado en Java y Spring Boot, con capacidad de integración en Frontend utilizando React.
                        Construyo soluciones escalables gestionando tanto bases de datos relacionales como no relacionales.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tarjetas.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-dark-900 p-8 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-colors"
                        >
                            <div className="mb-4">{card.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-gray-400">{card.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-dark-900 p-8 rounded-2xl border border-dark-700"
                >
                    <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                        <div className="p-3 bg-dark-800 rounded-lg">
                            <GraduationCap className="w-8 h-8 text-primary-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Formación Académica</h3>
                    </div>

                    <div className="space-y-8">
                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-8 border-b border-dark-800">
                            <div>
                                <h4 className="text-xl font-bold text-white">Licenciatura en Informática</h4>
                                <p className="text-primary-400 mt-1">Estudiante en curso</p>
                            </div>
                            <span className="px-4 py-1 bg-primary-900/30 text-primary-400 rounded-full text-sm font-medium w-fit">
                                Actualidad
                            </span>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div>
                                <h4 className="text-xl font-bold text-white">Tecnicatura Universitaria en Programación</h4>
                                <p className="text-gray-400 mt-1">Último cuatrimestre en curso</p>
                            </div>
                            <span className="px-4 py-1 bg-gray-800 text-gray-300 rounded-full text-sm font-medium w-fit">
                                Finalizando
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
