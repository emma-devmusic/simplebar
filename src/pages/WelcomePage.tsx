import Navbar from './modules/Landing/Navbar';
import { Hero } from './modules/Landing/Hero';
import { Features } from './modules/Landing/Features';
import { Dashboard } from './modules/Landing/Dashboard';
import { Pricing } from './modules/Landing/Pricing';
import { Testimonials } from './modules/Landing/Testimonials';
import { ContactCTA } from './modules/Landing/ContactCTA';
import { Footer } from './modules/Landing/Footer';
import { motion } from 'framer-motion';

export const WelcomePage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <main className='mt-0 bg-neutral-50 dark:bg-neutral-950'>
            <Navbar />
            <div className='w-full overflow-x-hidden'>
                <Hero />
                <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Features />
                </motion.div>
                <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Dashboard />
                </motion.div>
                <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Pricing />
                </motion.div>
                <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Testimonials />
                </motion.div>
                <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <ContactCTA />
                </motion.div>
                <Footer />
            </div>
        </main>
    );
};