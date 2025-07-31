import { motion } from "framer-motion";

interface ImageAnimatedProps {
    src: string;
alt: string;
className?: string;
}

export const ImageAnimated = ({src, alt, className = ""}: ImageAnimatedProps) => {

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Ajuste para rotación según posición del mouse
        const rotateX = (y / rect.height) * 15; // Cambia el valor máximo de rotación
        const rotateY = -(x / rect.width) * 15;

        return { rotateX, rotateY };
    };

    return (
        <motion.img
            src={src}
            className={className}
            alt={alt}
            style={{
                transition: "transform 0.2s ease-out",
            }}
            onMouseMove={(e) =>
                e.currentTarget.style.transform = `perspective(1000px) rotateX(${handleMouseMove(e).rotateX}deg) rotateY(${handleMouseMove(e).rotateY}deg)`
            }
            onMouseLeave={(e) =>
                e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`
            }
        />
    )
}