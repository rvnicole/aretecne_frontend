type IconProps = {
    children: React.ReactNode,
    className?: string,
}

export function IconPrimary({ children, className }: IconProps) {
    return (
        <div
            className={`text-white bg-neutral-900 font-medium p-2 rounded-lg group transition-all hover:shadow hover:scale-105 ${className}`}
        >
            {children}
        </div>
    )
}

export function IconProfile({ className, nameUser }: Pick<IconProps, "className"> & { nameUser: string }) {
    return (
        <div
            className={`text-neutral-900 bg-neutral-300 flex justify-center items-center font-bold rounded-full ${className}`}
        >
            <p>{nameUser.charAt(0)}</p>
        </div>
    )
}