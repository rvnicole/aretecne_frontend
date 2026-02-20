type ButtonProps = {
    children: React.ReactNode,
    className?: string,
    disabled?: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export function ButtonPrimary({ children, className, onClick, disabled } : ButtonProps ) {
    return (
        <button 
            className={`text-white bg-neutral-900 font-medium px-4 py-2 rounded-lg cursor-pointer hover:bg-neutral-800 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export function ButtonOutline({ children, className, onClick, disabled } : ButtonProps ) {
    return (
        <button 
            className={`bg-white text-neutral-900 font-medium border border-neutral-200 rounded-lg  px-4 py-2 cursor-pointer hover:bg-neutral-100 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export function ButtonDestructive({ children, className, onClick, disabled } : ButtonProps ) {
    return (
        <button 
            className={`text-white bg-red-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-red-700 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export function ButtonGhost({ children, className, onClick, disabled } : ButtonProps ) {
    return (
        <button 
            className={`text-neutral-900 font-medium px-4 py-2 rounded-lg cursor-pointer hover:bg-neutral-200 ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
