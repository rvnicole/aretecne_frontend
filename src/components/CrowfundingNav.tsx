import { useNavigate } from "react-router-dom";
import { ButtonGhost, ButtonOutline, ButtonPrimary } from "./ui/Buttons";

export default function CrowdfundingNav() {
    const navigate = useNavigate();
    const url = window.location.pathname == "/crowdfunding" ? "/" : "/crowdfunding";

    return (
        <nav className="flex flex-col md:flex-row md:justify-between items-center">
            <ButtonGhost
                className="flex justify-center items-center gap-2 self-start md:self-center"
                onClick={() => navigate(url)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <p className="text-sm">Regresar</p>
            </ButtonGhost>

            <div className="flex flex-col md:flex-row gap-2">
                <ButtonOutline
                    className="flex justify-center items-center gap-2"
                    onClick={() => navigate("/my-campaings")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                    <p className="text-sm">Mis Campañas</p>
                </ButtonOutline>
                
                <ButtonPrimary
                    className="flex justify-center items-center gap-2"
                    onClick={() => navigate("/create-campaing")}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className="text-sm">Crear Campaña</p>
                </ButtonPrimary>
            </div>
        </nav>
    )
}