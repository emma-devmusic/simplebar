import { useEffect, useState } from 'react';

/**
 * Hook para detectar cambios en media queries
 * @param query - Media query string (e.g., '(min-width: 1024px)')
 * @returns boolean - true si la media query coincide
 */
export const useMediaQuery = (query: string): boolean => {
    const [matches, setMatches] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        
        const handleChange = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, [query]);

    return matches;
};
