import { useEffect, useState } from "react";
import CrowdfundingNav from "../components/CrowfundingNav";
import { Subtitle, Texto, Title } from "../components/ui/Texts";
import { Card } from "../components/ui/Cards";
import { IconProfile } from "../components/ui/Icons";
import { ProgressBar } from "../components/ui/ProgressBar";
import { ButtonPrimary } from "../components/ui/Buttons";
import { formatCurrency } from "../lib/format";
import type { CampaignType } from "../types";
import Modal from "../components/ui/Modal";
import Donar from "../components/Donar";
import { getCampaignByID } from "../api/campaingAPI";

export default function CampaingDetails() {
    const params = new URLSearchParams(window.location.search);
    const pagado = Boolean(params.get("pagado"));
    const id = params.get("id");

    const [campaing, setCampaing] = useState<CampaignType>();
    const [open, setOpen] = useState<boolean>(pagado);
    const [porcentaje, setPorcentaje] = useState<number>(0);
    
    useEffect(() => {
        const getCampaing = async () => {
            const res = await getCampaignByID(id!);

            if(res.success) {
                setCampaing(res.data);
                const calculo = Math.floor((parseFloat(res.data.cantidadAcumulada)/ parseFloat(res.data.montoMeta)) * 100);
                setPorcentaje(calculo);
                console.log(res);
            }
        }

        getCampaing();
    }, [])

    if(campaing) return (
        <div>
            <CrowdfundingNav />
            
            <div className="flex flex-col justify-center items-center mt-10 md:m-10 space-y-3">
                <img 
                    src={`${import.meta.env.VITE_API_URL}/imgs/${campaing.imagen}`}  
                    className="w-full md:w-[800px] object-cover rounded-lg"
                />

                <div className="flex flex-col gap-3 md:flex-row w-full md:w-[800px]">
                    <div className="space-y-3 md:w-[60%]">
                        <div className="my-5">
                           <Title title={campaing.titulo}/>
                            <Texto>{campaing.shortDescription}</Texto> 
                        </div>
                        
                        <Card>
                            <Subtitle subtitle="Mi Historia" />
                            <Texto>{campaing.story}</Texto>
                        </Card>

                        <Card
                            className="flex justify-start items-center"
                        >
                            <div className="w-[25%]">
                                <IconProfile 
                                    className="w-12 h-12 text-xl md:w-20 md:h-20 md:text-3xl"
                                    nameUser={campaing.idAutor.name} 
                                />
                            </div>

                            <div className="w-[75%]">
                                <Subtitle subtitle={campaing.idAutor.name} />
                                <Texto>Creador de la campaña</Texto>
                            </div>
                        </Card>
                    </div>

                    <div className="md:w-[40%]">
                         <Card>
                            <div>
                                <p className="my-2 text-neutral-400 text-right text-sm font-medium">
                                    <span className="text-neutral-500 text-lg md:text-3xl">{formatCurrency(campaing.cantidadAcumulada)}{" "}</span>
                                    de {formatCurrency(campaing.montoMeta)}
                                </p>
                                <ProgressBar value={porcentaje} />  
                                <p className="my-2 text-neutral-400 text-sm font-medium text-right">{porcentaje}% Donado</p>
                            </div> 

                            <div className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-neutral-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                                
                                <p className="text-neutral-500 text-sm">{campaing.idUser.length} Donadores</p>
                            </div>

                            <ButtonPrimary
                                className="flex justify-center items-center gap-2 w-full mt-5"
                                onClick={() => setOpen(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                </svg>
                                <p className="text-sm">Apoya esta campaña</p>
                            </ButtonPrimary>
                        </Card>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Donar pagado={pagado} campaing={campaing}/>
            </Modal>
        </div>
    )
}