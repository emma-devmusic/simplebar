
export const Spinner = ({ size = 24 }: { size?: number }) => {

    return (
        <div className='inline-flex space-x-2 justify-center items-center bg-transparent'>
            <span className='sr-only'>Loading...</span>
            <div className={`w-7 h-7 bg-primary rounded-full [animation-delay:-0.3s] animate-ping`} style={{height: size, width: size}}></div>
            <div className={`w-7 h-7 bg-primary rounded-full [animation-delay:-0.15s] animate-ping`} style={{height: size, width: size}}></div>
            <div className={`w-7 h-7 bg-primary rounded-full animate-ping`} style={{height: size, width: size}}></div>
        </div>
    )
}
