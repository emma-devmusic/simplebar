
export const Spinner = ({ size = 24, className = '', containerClassName = '' }: { size?: number; className?: string; containerClassName?: string }) => {

    return (
        <div className={`inline-flex space-x-2 justify-center items-center bg-transparent ${containerClassName}`}>
            <span className='sr-only'>Loading...</span>
            <div className={`${className} w-7 h-7 bg-primary rounded-full [animation-delay:-0.3s] animate-ping`} style={{height: size, width: size}}></div>
            <div className={`${className} w-7 h-7 bg-primary rounded-full [animation-delay:-0.15s] animate-ping`} style={{height: size, width: size}}></div>
            <div className={`${className} w-7 h-7 bg-primary rounded-full animate-ping`} style={{height: size, width: size}}></div>
        </div>
    )
}
