import { useEffect, useRef, useCallback } from 'react';

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    gravity: number;
    opacity: number;
    rotation: number;
    rotationSpeed: number;
    icon: string;
}

const barIcons = [
    '🍷', // Copa de vino
    '🍸', // Cocktail
    '🍺', // Cerveza
    '🍴', // Cubiertos
    '🍽️', // Plato
    '☕', // Café
    '🥂', // Brindis
    '🍹', // Trago tropical
    '🧊', // Hielo
    '🍋', // Limón
];

const GRAVITY = 0.015; // Aceleración gravitacional
const MAX_SPEED = 3; // Velocidad máxima de caída

const createParticle = (width: number): Particle => ({
    x: Math.random() * width,
    y: Math.random() * -300 - 40, // Empieza arriba del canvas
    size: Math.random() * 18 + 14,
    speedX: (Math.random() - 0.5) * 0.5, // Leve movimiento horizontal
    speedY: 0, // Empieza sin velocidad vertical
    gravity: GRAVITY + Math.random() * 0.008, // Variación en gravedad por objeto
    opacity: Math.random() * 0.15 + 0.1,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.02,
    icon: barIcons[Math.floor(Math.random() * barIcons.length)],
});

interface FloatingElementsProps {
    count?: number;
}

export const FloatingElements = ({ count = 25 }: FloatingElementsProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number | null>(null);
    const isInitializedRef = useRef(false);

    const initParticles = useCallback((width: number, height: number) => {
        if (isInitializedRef.current && particlesRef.current.length > 0) return;
        
        particlesRef.current = [];

        // Distribuir partículas en diferentes alturas iniciales
        for (let i = 0; i < count; i++) {
            const particle = createParticle(width);
            particle.y = Math.random() * height; // Distribuir por toda la altura
            // Dar velocidad inicial proporcional a la posición (simula que ya venían cayendo)
            particle.speedY = Math.sqrt(2 * particle.gravity * (particle.y + 40)) * 0.3;
            particlesRef.current.push(particle);
        }
        isInitializedRef.current = true;
    }, [count]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.offsetWidth;
                canvas.height = parent.offsetHeight;
                initParticles(canvas.width, canvas.height);
            }
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        let lastTime = performance.now();

        const animate = (currentTime: number) => {
            if (!ctx || !canvas) return;

            const deltaTime = (currentTime - lastTime) / 16.67; // Normalizar a ~60fps
            lastTime = currentTime;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Aplicar gravedad - acelerar la caída
                particle.speedY += particle.gravity * deltaTime;
                
                // Limitar velocidad máxima
                if (particle.speedY > MAX_SPEED) {
                    particle.speedY = MAX_SPEED;
                }

                // Actualizar posición
                particle.x += particle.speedX * deltaTime;
                particle.y += particle.speedY * deltaTime;
                
                // La rotación acelera con la velocidad de caída
                particle.rotation += particle.rotationSpeed * deltaTime * (1 + particle.speedY * 0.5);

                // Si sale por abajo, reaparece arriba con velocidad inicial 0
                if (particle.y > canvas.height + 40) {
                    particle.y = Math.random() * -100 - 40;
                    particle.x = Math.random() * canvas.width;
                    particle.speedY = 0; // Reiniciar velocidad
                    particle.icon = barIcons[Math.floor(Math.random() * barIcons.length)];
                }

                // Wrap horizontal
                if (particle.x < -40) particle.x = canvas.width + 40;
                if (particle.x > canvas.width + 40) particle.x = -40;

                // Dibujar emoji
                ctx.save();
                ctx.translate(Math.round(particle.x), Math.round(particle.y));
                ctx.rotate(particle.rotation);
                ctx.globalAlpha = particle.opacity;
                ctx.font = `${particle.size}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(particle.icon, 0, 0);
                ctx.restore();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [initParticles]);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0"
        />
    );
};
