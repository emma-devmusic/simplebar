import { motion } from "framer-motion"
import { ImageAnimated } from "../../../components/imageAnimated/ImageAnimated";
import { Code, Cpu, Rocket } from "lucide-react";

export const About = () => {
    const floatingAnimation = {
        animate: {
            y: [0, -10, 0, 10, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    const rocketAnimation = {
        animate: {
            x: [50, 0, 50],
            y: [50, 0, 50],
            rotate: [0, 180, 360],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    const rocketAnimation2 = {
        animate: {
            x: [0, 50, 0],
            y: [0, 50, 0],
            rotate: [180, 360, 180],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <motion.section
            id="about"
            className="w-full relative lg:h-screen  lg:max-h-[37.5rem] bg-gradient-to-br from-secondary-hover to-primary"
        >
            <motion.div className="container relative h-full px-6 py-16 lg:py-0 flex flex-col-reverse lg:justify-center justify-around items-center lg:flex-row gap-8 xm:gap-0 mx-auto">
                <motion.div
                    className="absolute hidden lg:block top-10 right-10 text-gray-200"
                    variants={floatingAnimation}
                    animate="animate"
                >
                    <Cpu size={32} />
                </motion.div>
                <motion.div
                    className="absolute hidden lg:block z-10 top-20 left-[3.5rem] text-white"
                    variants={rocketAnimation}
                    animate="animate"
                >
                    <Rocket size={48} className='-rotate-90' />
                </motion.div>
                <motion.div
                    className="absolute hidden lg:block z-10 bottom-20 right-[3.5rem] text-white"
                    variants={rocketAnimation2}
                    animate="animate"
                >
                    <Rocket size={48} className='-rotate-90' />
                </motion.div>
                <motion.div
                    className="absolute hidden lg:block top-10 left-1/2 text-white"
                    variants={floatingAnimation}
                    animate="animate"
                >
                    <Code size={32} />
                </motion.div>
                <motion.div className="lg:w-1/3 w-full"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}>
                    <ImageAnimated
                        src="src/assets/img/logo-ding.png"
                        alt="About Us Image"
                        className="max-h-[300px] object-contain rounded-lg mx-auto"
                    />
                </motion.div>
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div className="pb-6 text-white">
                        <motion.h2 className="text-3xl md:text-4xl font-bold text-center md:text-left"
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}>
                            Sobre{" "}
                            <strong className="">
                                Nosotros
                            </strong>
                        </motion.h2>
                        <motion.p className="text-lg text-white text-muted-foreground mt-4"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}>
                            Nos dedicamos a colaborar con emprendedores y empresas en el impulso de su desarrollo en el ámbito de la transformación digital.
                            Alcanzamos nuestros objetivos mediante un enfoque laboral que abarca desde el modelado de procesos hasta la aplicación de design thinking en la definición de proyectos, y finalmente, la utilización de metodologías ágiles en la ejecución del trabajo en equipo durante el desarrollo del proyecto.
                            Somos el aliado estratégico para encontrar las soluciones tecnológicas adecuadas.
                        </motion.p>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};