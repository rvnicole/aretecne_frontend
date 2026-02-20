type CardProps = {
    children: React.ReactNode;
    className ?: string;
    onClick?: () => void;
}

export function Card({ children, className, onClick } : CardProps) {
    return (
        <div 
            className={`bg-white border p-6 border-neutral-200 rounded-lg shadow shadow-neutral-200 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export function CardList({ children, className, onClick } : CardProps) {
    return (
        <div 
            className={`bg-white border border-neutral-200 rounded-lg shadow shadow-neutral-200 ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}