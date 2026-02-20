import { useNavigate } from "react-router-dom";
import { ButtonGhost } from "./ui/Buttons";

export default function GeneralNav() {
    const navigate = useNavigate();

    return (
        <nav className="flex flex-col md:flex-row md:justify-star items-center">
            <ButtonGhost
                className="flex justify-center items-center gap-2 self-start md:self-center"
                onClick={() => navigate(-1)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p className="text-sm">Regresar</p>
            </ButtonGhost>
        </nav>
    )
}