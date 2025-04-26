import { IParallax, IParallaxLayer, Parallax, ParallaxLayer } from '@react-spring/parallax';
import logo from '../assets/img/logo-ding.png'
import Navbar from './modules/Landing/Navbar';
import { useEffect, useRef } from 'react';
import { Hero } from './modules/Landing/Hero';
import { Sponsors } from './modules/Landing/Sponsors';
import { About } from './modules/Landing/About';
import { HowItWorks } from './modules/Landing/HowItWorks';
import { Features } from './modules/Landing/Features';
import { Services } from './modules/Landing/Services';
import { Cta } from './modules/Landing/CTA';
import { Testimonials } from './modules/Landing/Testimonials';
import { Team } from './modules/Landing/Team';
import { Pricing } from './modules/Landing/Pricing';
import { FAQ } from './modules/Landing/FAQ';

export const WelcomePage = () => {

    const parallax = useRef<IParallax>(null!);
    const layerAbout = useRef<IParallaxLayer>(null!)
    const sponsorAbout = useRef<IParallaxLayer>(null!)

    useEffect(() => {
        if (layerAbout.current) {
            layerAbout.current.setHeight(0.1, false)
        }
        if (sponsorAbout.current) {
            sponsorAbout.current.setHeight(0.1, false)
        }
    }, [])

    return (
        <main className='relative'>
            {/* <Parallax pages={1} style={{ top: '0', left: '0' }}>
                <ParallaxLayer offset={0} speed={2.5}>
                    <section className="[background-image:url(/assets/img/bg-welcome.jpg)] h-screen relative">
                        <div className="mx-auto max-w-screen px-4 py-32 lg:flex lg:h-screen lg:items-center backdrop-blur-sm">
                            <div className="mx-auto max-w-[400px] sm:max-w-xl text-center flex flex-col justify-center items-center">
                                <img src={logo} alt="Logo Ding" className='mb-16 w-40' />
                                <h1 className="text-3xl font-semibold sm:text-5xl text-gray-800">
                                    Bienvenido a <span className="text-primary-hover font-extrabold">SimpleBar</span>
                                    <hr className="my-4 sm:mb-0 border-gray-400" />
                                    <strong className="font-extrabold text-primary-hover sm:flex items-center justify-center w-full mt-4">
                                        {' '}
                                        <span><span className='text-gray-800'>Menú</span> Online</span>{' '}
                                    </strong>
                                </h1>

                                <p className="mt-4 sm:text-xl/relaxed">
                                    Una <strong>Carta Online</strong> para tu local gastronómico
                                </p>

                                <div className="mt-8 flex flex-wrap justify-center gap-4">
                                    <a
                                        className="block w-full rounded-sm bg-primary-hover px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-primary focus:ring-3 focus:outline-hidden sm:w-auto"
                                        href="https://ding.com.ar/"
                                        target='_blank'
                                    >
                                        Ingresar
                                    </a>

                                    <a
                                        className="block w-full backdrop-blur-2xl rounded-sm px-12 py-3 text-sm font-medium text-primary-hover shadow-sm hover:text-primary focus:ring-3 focus:outline-hidden sm:w-auto"
                                        href="https://ding.com.ar/"
                                        target='_blank'
                                    >
                                        Explorar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={2.5}>
                    <p>Parallax</p>
                </ParallaxLayer>
            </Parallax> */}

            <Navbar />
            <Parallax className="!h-[calc(100vh-3.5rem)]" ref={parallax} pages={6} style={{ width: '100%' }}>
                <ParallaxLayer speed={0} className='flex justify-center w-full'>
                    <Hero />
                </ParallaxLayer>
                {/* <ParallaxLayer offset={0.98} speed={0.75} className='flex items-center flex-col w-full'>
                    <Sponsors />
                    <About />
                </ParallaxLayer>
                <ParallaxLayer offset={1.2} speed={1.3} ref={layerAbout}>
                    <HowItWorks />
                </ParallaxLayer>
                
                <ParallaxLayer offset={1.95} speed={1.5} ref={layerAbout}>
                    <Features />
                </ParallaxLayer> */}
                {/*  */}
                {/*<ParallaxLayer offset={2.5} speed={0} ref={layerAbout}>
                    <Services />
                    <Cta />
                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0}>
                    <Testimonials />
                    <Team />
                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={0} ref={layerAbout}>
                    <Pricing />
                    </ParallaxLayer>
                    <FAQ />
                    <ParallaxLayer offset={5} speed={0}>
                    </ParallaxLayer> */}

            </Parallax>

        </main>
    );
};
