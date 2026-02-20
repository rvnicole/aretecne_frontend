import { useNavigate } from "react-router-dom";
import type { CampaignType } from "../types";
import { CardList } from "./ui/Cards";
import { ProgressBar } from "./ui/ProgressBar";
import { Texto } from "./ui/Texts";
import { ButtonOutline } from "./ui/Buttons";

type CampaingCardProps = {
    campaing: CampaignType,
    editar?: boolean
}

export default function CampaingCard({ campaing, editar }: CampaingCardProps) {
    const navigate = useNavigate();
    const porcentaje = Math.floor((parseFloat(campaing.cantidadAcumulada )/ parseFloat(campaing.montoMeta)) * 100);

    const handleClickEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        navigate(`/edit-campaing?id=${campaing._id}&titulo=${campaing.titulo}&shortDescription=${campaing.shortDescription}&story=${campaing.story}&montoMeta=${campaing.montoMeta}`);
    }

    return (
        <CardList
            className="cursor-pointer transition-all hover:scale-[102%]"
            onClick={() => navigate(`/campaing?id=${campaing._id}`)}
        >
            <img 
                className="w-full h-52 object-cover rounded-t-lg"
                src={`${import.meta.env.VITE_API_URL}/imgs/${campaing.imagen}`}
            />
                <div className="p-5 space-y-3">
                    <div>
                        <p className="font-semibold">{campaing.titulo}</p>
                        <Texto>{campaing.shortDescription}</Texto>
                    </div>
                    
                    <div>
                        <p className="my-2 text-neutral-400 text-right text-sm font-medium">{porcentaje}%</p>
                        <ProgressBar value={porcentaje} />  
                    </div>                    

                    <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 text-neutral-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                        </svg>
                        
                        <p className="text-neutral-500 text-sm">{campaing.idUser.length} Donadores</p>
                    </div>
                    
                    <div className="border-b border-neutral-200" />
                    { editar ? 
                        <div className="flex gap-2">
                            <ButtonOutline
                                className="w-full h-fit"
                                onClick={handleClickEdit}
                            >
                                Editar
                            </ButtonOutline>
                        </div> 
                        :
                        <p className="text-sm font-medium text-neutral-500">Autor: <span className="text-neutral-900">{campaing.idAutor.name}</span></p>
                    }
                </div>
        </CardList>
    )
}