export function TitlePrimary({ title }: { title: string }) {
    return (
        <h1 className="font-bold text-xl">
            {title}
        </h1>
    )
}
export function Title({ title }: { title: string }) {
    return (
        <h2 className="font-bold text-2xl">
            {title}
        </h2>
    )
}

export function Subtitle({ subtitle }: { subtitle: string }) {
    return (
        <h3 className="font-semibold text-lg">
            {subtitle}
        </h3>
    )
}

export function Texto({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-sm font-medium text-neutral-500">
            {children}
        </p>
    )
}