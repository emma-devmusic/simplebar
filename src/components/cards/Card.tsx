import { ReactNode } from "react"

// Tipos de Props
interface CardProps {
    children: ReactNode
    className?: string
}

interface HeaderProps {
    children: ReactNode
    className?: string
}

interface BodyProps {
    children: ReactNode
    className?: string
}

interface FooterProps {
    children: ReactNode
    className?: string
}

interface ActionsProps {
    children: ReactNode
    className?: string
}

// Componente Principal Card
export const Card = ({ children, className = "" }: CardProps) => {
    return (
        <div className={`rounded-lg shadow bg-white ${className}`}>
            {children}
        </div>
    )
}

// Subcomponente Header
Card.Header = function CardHeader({ children, className = "" }: HeaderProps) {
    return (
        <div className={`${className} p-4 border-b border-gray-300 font-semibold text-lg text-gray-600`}>
            {children}
        </div>
    )
}

// Subcomponente Body
Card.Body = function CardBody({ children, className = "" }: BodyProps) {
    return (
        <div className={`p-4 ${className}`}>
            {children}
        </div>
    )
}

// Subcomponente Footer
Card.Footer = function CardFooter({ children, className = "" }: FooterProps) {
    return (
        <div className={`p-4 bg-gray-100 ${className}`}>
            {children}
        </div>
    )
}

// Subcomponente Actions
Card.Actions = function CardActions({ children, className = "" }: ActionsProps) {
    return (
        <div className={`p-4 flex justify-end space-x-2 ${className}`}>
            {children}
        </div>
    )
}