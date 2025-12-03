import { StrictMode } from 'react';
// Import only Redux Provider and ThemeProvider, skip RouterProvider and HelmetProvider to avoid SSR issues
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ThemeProvider } from '../common/contexts/ThemeContext';
// Import WelcomePage components separately to avoid Modal (which imports Cart with useParams)
import Navbar from '../pages/modules/Landing/Navbar';
import { Hero } from '../pages/modules/Landing/Hero';
import { Features } from '../pages/modules/Landing/Features';
import { Dashboard } from '../pages/modules/Landing/Dashboard';
import { Pricing } from '../pages/modules/Landing/Pricing';
import { ContactCTA } from '../pages/modules/Landing/ContactCTA';
import { Footer } from '../pages/modules/Landing/Footer';

export interface PrerenderResult {
  appHtml: string;
}

// Returns the React element for SSR prerender
// NOTE: We render WelcomePage content without Modal, RouterProvider, and HelmetProvider to avoid SSR issues
// Meta tags will be injected manually by the prerender script
export const createAppTree = () => {
  const element = (
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <main className='mt-0 bg-neutral-50 dark:bg-neutral-950'>
            <Navbar />
            <div className='w-full overflow-x-hidden'>
              <Hero />
              <Features />
              <Dashboard />
              <Pricing />
              <ContactCTA />
              <Footer />
            </div>
          </main>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
  return { element };
};
