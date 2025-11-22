import logo from '../assets/img/simplebar.png';
import darkLogo from '../assets/img/simplebar-2.png';
import { useEffect, useState } from 'react';

interface LogoProps {
  className?: string;
  alt?: string;
}

export const Logo = ({ className = 'h-8 lg:h-10', alt = 'Simplebar Logo' }: LogoProps) => {
  const [onDarkTheme, setOnDarkTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setOnDarkTheme(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <img
      src={onDarkTheme ? darkLogo : logo}
      alt={alt}
      className={className}
    />
  );
};
