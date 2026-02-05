import React from 'react';
import { motion } from 'framer-motion';
import { Database, Server, Smartphone, Shield, Terminal, TestTubes } from 'lucide-react';

const Skills = () => {
    const categoriasHabilidades = [
        {
            title: "Backend Core",
            icon: <Server className="w-6 h-6 text-primary-500" />,
            skills: ["Java", "Spring Boot"]
        },
        {
            title: "Databases",
            icon: <Database className="w-6 h-6 text-primary-500" />,
            skills: ["PostgreSQL", "MySQL", "MongoDB"]
        },
        {
            title: "DevOps & Tools",
            icon: <Terminal className="w-6 h-6 text-primary-500" />,
            skills: ["Docker", "Git"]
        },
        {
            title: "Frontend",
            icon: <Smartphone className="w-6 h-6 text-primary-500" />,
            skills: ["React", "JavaScript", "HTML5", "CSS3/Tailwind", "Responsive Design"]
        },
        {
            title: "Testing",
            icon: <TestTubes className="w-6 h-6 text-primary-500" />,
            skills: ["JUnit", "Mockito", "TDD", "Integration Testing"]
        },
        {
            title: "Security",
            icon: <Shield className="w-6 h-6 text-primary-500" />,
            skills: ["JWT", "OAuth2", "Spring Security"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Habilidades Técnicas</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoriasHabilidades.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-dark-800 p-6 rounded-xl border border-dark-700 hover:border-primary-500/50 transition-all hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-dark-900 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-dark-900 text-gray-300 text-sm rounded-full border border-dark-700 hover:border-primary-500/50 hover:text-white transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
