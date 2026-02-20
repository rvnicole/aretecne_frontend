import { useEffect, useState } from "react";
import CampaingCard from "../components/CampaingCard";
import CrowdfundingNav from "../components/CrowfundingNav";
import { Card } from "../components/ui/Cards";
import { Subtitle, Texto, Title } from "../components/ui/Texts";
import type { CampaignType } from "../types";
import { getMyCampaigns } from "../api/campaingAPI";
import { UserStore } from "../store";

export default function MyCampaings() {
    const { id } = UserStore((state) => state);
    const [campaings, setCampaings] = useState<CampaignType[]>([]);

    useEffect(() => {
        const getCampaingsByAutor = async () => {
            const idAutor = id ? id : JSON.parse(localStorage.getItem("user")!).id;
            const res = await getMyCampaigns(idAutor);
            setCampaings(res.data);
        } 

        getCampaingsByAutor();
    }, []);
    
    return (
        <div>
            <CrowdfundingNav />

            <div className="mt-5 p-4">
                <Title title="Mis Campañas" />
                
                { campaings ? 
                    <div>
                        <Texto>Estas son las campañas que has creado ¡Dales un vistazo!</Texto>
                        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 mt-5">
                            {
                                campaings.map(campaing => (
                                    <CampaingCard key={campaing._id} campaing={campaing} editar={true} />
                                ))
                            }
                        </div>
                    </div>
                    :
                    <div className="flex flex-col justify-center items-center mt-10 md:m-10 space-y-3">
                        <Card className=" space-y-3">
                            <div className="flex flex-col justify-center items-center py-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-neutral-300 size-20">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg>

                                <Subtitle subtitle="No tienes campañas"/>
                                <Texto>Comienza ahora si necesitas ayuda</Texto>
                            </div>
                        </Card>
                    </div>
                }
            </div>
        </div>
    )
}