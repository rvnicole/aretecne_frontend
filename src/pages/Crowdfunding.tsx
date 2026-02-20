import { ButtonPrimary } from "../components/ui/Buttons";
import { Title, Texto } from "../components/ui/Texts";
import type { CampaignType } from "../types";
import CampaingCard from "../components/CampaingCard";
import CrowdfundingNav from "../components/CrowfundingNav";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCampaigns } from "../api/campaingAPI";

export default function Crowdfunding() {
    const navigate = useNavigate();
    const [campaings, setCampaings] = useState<CampaignType[]>([]);

    useEffect(() => {
        const getCampaingsByAutor = async () => {
            const res = await getAllCampaigns();
            setCampaings(res.data);
        } 

        getCampaingsByAutor();
    }, []);

    return (
        <div>
            <CrowdfundingNav />

            <div className="text-center p-4 mt-5">
                <Title title="Ayuda a los Emprendedores" />
                <p className="text-sm font-medium text-neutral-500 m-auto md:w-2xl">
                    Apoya a emprendedores que necesitan un impulso para iniciar o fortalecer su negocio. Tu ayuda puede transformar ideas en oportunidades reales y darles la oportunidad de crecer y salir adelante. Juntos podemos ser parte del cambio. 
                </p>
            </div>

            <div className="flex flex-col justify-center items-center text-center space-y-3 mt-10 md:m-10 py-8 bg-linear-to-r from-white to-neutral-200 shadow shadow-neutral-200 rounded-xl">
                <p className="text-lg font-bold">¿Necesitas apoyo para tu negocio?</p>
                <Texto>
                    Crea una campaña y deja que la comunidad te dé una mano.
                </Texto>

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

            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 m-5">
                {
                    campaings.map(campaing => (
                        <CampaingCard key={campaing._id} campaing={campaing} />
                    ))
                }
            </div>
        </div>
    )
}