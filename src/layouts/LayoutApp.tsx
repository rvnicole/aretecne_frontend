import { Outlet, useNavigate } from "react-router-dom";
import { TitlePrimary } from "../components/ui/Texts";
import { ButtonOutline } from "../components/ui/Buttons";
import { UserStore } from "../store";
import { useEffect } from "react";

export default function LayoutApp() { 
    const { id } = UserStore((state) => state);
    const navigate = useNavigate();

    useEffect(() => {
        if( !id ) navigate("/auth/login");
    }, [id]);

    return (
        <div>
            <header className="flex flex-col md:flex-row justify-between items-center bg-white border-b border-neutral-100 p-4">
                <div 
                    className="cursor-pointer"
                    onClick={() => navigate("/")}
                >
                    <TitlePrimary title="MicroCommerce"/>
                </div>

                <ButtonOutline
                    className="flex justify-center items-center gap-2"
                    onClick={() => {
                        localStorage.removeItem("user");
                        localStorage.removeItem("info-payment");
                        window.location.reload();
                    }}
                >
                    <p className="text-sm">Cerrar Sesión</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </ButtonOutline>
            </header>
            <main className="p-2">
                <Outlet />
            </main>
        </div>
    )
}