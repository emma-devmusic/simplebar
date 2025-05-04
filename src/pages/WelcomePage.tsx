import Navbar from './modules/Landing/Navbar';
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
import { Footer } from './modules/Landing/Footer';

export const WelcomePage = () => {
    return (
        <main>
            <Navbar />
            <div className='px-4 lg:px-0 flex flex-col items-center gap-y-32'>
                <Hero />
                <Sponsors />
                <About />
                <HowItWorks />
                <Features />
                <Services />
                <Cta />
                <Testimonials />
                <Team />
                <Pricing />
                <FAQ />
                <Footer />
            </div>
        </main>
    );
};