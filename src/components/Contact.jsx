import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contacto</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400">¿Tenés un proyecto en mente? ¡Contactame!</p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-8 bg-dark-800 p-8 rounded-2xl border border-dark-700 max-w-2xl w-full"
                    >
                        <div className="flex flex-col md:flex-row gap-8 justify-around">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-dark-900 rounded-lg">
                                    <Mail className="w-6 h-6 text-primary-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Email</h4>
                                    <a href="mailto:lopezlucasdev@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                                        lopezlucasdev@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-dark-900 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white">Ubicación</h4>
                                    <p className="text-gray-400">
                                        Ciudad Autonoma de Buenos Aires, Argentina
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-dark-700 flex flex-col items-center">
                            <h4 className="text-lg font-medium text-white mb-6">Sígueme en mis redes</h4>
                            <div className="flex gap-6">
                                <a href="https://github.com/LucasLopez13" target="_blank" rel="noopener noreferrer" className="p-4 bg-dark-900 rounded-xl text-gray-400 hover:text-white hover:bg-primary-600 transition-all transform hover:scale-110">
                                    <Github className="w-8 h-8" />
                                </a>
                                <a href="https://www.linkedin.com/in/lucas-federico-lopez2003" target="_blank" rel="noopener noreferrer" className="p-4 bg-dark-900 rounded-xl text-gray-400 hover:text-white hover:bg-primary-600 transition-all transform hover:scale-110">
                                    <Linkedin className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
