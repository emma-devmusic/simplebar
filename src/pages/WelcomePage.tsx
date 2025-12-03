import Navbar from './modules/Landing/Navbar';
import { Hero } from './modules/Landing/Hero';
import { Features } from './modules/Landing/Features';
import { Dashboard } from './modules/Landing/Dashboard';
import { Pricing } from './modules/Landing/Pricing';
// import { Testimonials } from './modules/Landing/Testimonials';
import { ContactCTA } from './modules/Landing/ContactCTA';
import { Footer } from './modules/Landing/Footer';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Modal } from '../components/modal/Modal';

export const WelcomePage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    // Schema.org JSON-LD para datos estructurados
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "SimpleBar",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Sistema de gestión para bares y restaurantes. POS, Menú QR, Pedidos, Gestión de Caja, Productos y más.",
        "offers": {
            "@type": "Offer",
            "price": "17000",
            "priceCurrency": "ARS",
            "priceValidUntil": "2025-12-31"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "150"
        },
        "provider": {
            "@type": "Organization",
            "name": "Ding Technology",
            "url": "https://ding.com.ar"
        }
    };

    return (
        <>
            <Helmet>
                <title>SimpleBar | Sistema de Gestión para Bares y Restaurantes</title>
                <meta name="description" content="Unificá POS, Menú QR, Pedidos, Gestión de Caja, Productos y más en un solo sistema. Interfaz intuitiva, soporte en español y onboarding en minutos." />
                <link rel="canonical" href="https://simplebar.ding.com.ar/" />
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            </Helmet>
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
                {/* <motion.div 
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <Testimonials />
                </motion.div> */}
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
        <Modal />
        </>
    );
};