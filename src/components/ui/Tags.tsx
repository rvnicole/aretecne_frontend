
type TagsProps = {
    status: "pending" | "processing" | "complete"
}

const statusDetails = {
    pending: {
        color: "bg-amber-400",
        label: "Pendiente"
    },
    processing: {
        color: "bg-sky-500",
        label: "Procesando"
    },
    complete: {
        color: "bg-lime-500",
        label: "Completado"
    }
};

export function Tags({ status }: TagsProps) {
    const estado = statusDetails[status];

    return (
        <div className={`text-white text-sm font-bold rounded-lg px-3 py-1 ${estado.color}`}>
            {estado.label}
        </div>
    )
}