import Navbar from './modules/Landing/Navbar';
import { Hero } from './modules/Landing/Hero';
// import { Sponsors } from './modules/Landing/Sponsors';
import { About } from './modules/Landing/About';
import { HowItWorks } from './modules/Landing/HowItWorks';
// import { Features } from './modules/Landing/Features';
import { Services } from './modules/Landing/Services';
// import { Cta } from './modules/Landing/CTA';
// import { Testimonials } from './modules/Landing/Testimonials';
// import { Team } from './modules/Landing/Team';
import { Pricing } from './modules/Landing/Pricing';
// import { FAQ } from './modules/Landing/FAQ';
import { Footer } from './modules/Landing/Footer';

export const WelcomePage = () => {
    return (
        <main  className='mt-0'>
            <Navbar />
            <div className='w-full overflow-x-hidden flex flex-col items-center'>
                <Hero />
                <HowItWorks />
                <Services />
                <Pricing />
                <About />
                {/* <FAQ /> */}
                {/* <Sponsors /> */}
                {/* <Features /> */}
                {/* <Cta />
                <Testimonials />
                <Team /> */}
                <Footer />
            </div>
        </main>
    );
};