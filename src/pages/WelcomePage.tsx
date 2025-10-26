import Navbar from './modules/Landing/Navbar';
import { Hero } from './modules/Landing/Hero';
import { Features } from './modules/Landing/Features';
import { Dashboard } from './modules/Landing/Dashboard';
import { Pricing } from './modules/Landing/Pricing';
import { Testimonials } from './modules/Landing/Testimonials';
import { ContactCTA } from './modules/Landing/ContactCTA';
import { Footer } from './modules/Landing/Footer';

export const WelcomePage = () => {
    return (
        <main className='mt-0 bg-neutral-950'>
            <Navbar />
            <div className='w-full overflow-x-hidden'>
                <Hero />
                <Features />
                <Dashboard />
                <Pricing />
                <Testimonials />
                <ContactCTA />
                <Footer />
            </div>
        </main>
    );
};