import { useState } from "react";
import CrowdfundingNav from "../components/CrowfundingNav";
import { ButtonOutline, ButtonPrimary } from "../components/ui/Buttons";
import { Card } from "../components/ui/Cards";
import { Subtitle, Texto, Title } from "../components/ui/Texts";
import { useNavigate } from "react-router-dom";
import type { CampaingEditType } from "../types";
import { editCampaign } from "../api/campaingAPI";

export default function EditCampaing() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id")!;
    const titulo = params.get("titulo")!;
    const shortDescription = params.get("shortDescription")!;
    const story = params.get("story")!;
    const montoMeta = params.get("montoMeta")!;

    const [campaing, setCampaing] = useState<CampaingEditType>({
        _id: id,
        titulo,
        shortDescription,
        story,
        montoMeta
    });
    const [editada, setEditada] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        
        if(name && value) {
            setCampaing(c => ({
                ...c,
                [name]: value
            }));
        }
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await editCampaign({ ...campaing, id });
        if( res.success ) {
            setEditada(true);

            setTimeout(() => {
                navigate("/my-campaings");
            }, 5000);
        }   
    }
    
    return (
        <div>
            <CrowdfundingNav />

            { editada ? 
                <div className="flex flex-col justify-center items-center mt-10 md:m-10 space-y-3">
                    <Card className=" space-y-3">
                        <div className="flex flex-col justify-center items-center py-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-neutral-300 size-20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                            <Subtitle subtitle="¡Campaña Lista!"/>
                            <Texto>Tu campaña ahora está disponible para seguir recibiendo donaciones</Texto>
                        </div>
                    </Card>
                </div>
                :
                <div className="flex flex-col justify-center items-center mt-10 md:m-10 space-y-3">

                    <div className="w-full md:w-[800px] text-left">
                        <Title title="Editar mi Campaña"/>
                        <Texto>Cuéntanos tu historia y consigue apoyo para emprender tu negocio</Texto> 
                    </div>

                    <Card className="w-full md:w-[800px] space-y-3">
                        <Subtitle subtitle="Detalles de la Campaña"/>

                        <form className="space-y-3">
                            <div className="flex flex-col">
                                <label htmlFor="titulo" className="font-medium">Titulo*</label>
                                <input
                                    id="titulo"
                                    name="titulo"
                                    type="text"
                                    placeholder="Ingresa el titulo de tu emprendimiento"
                                    className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                                    value={campaing.titulo}
                                    onChange={handleChangeInput}
                                    required
                                /> 
                            </div> 

                            <div className="flex flex-col">
                                <label htmlFor="shortDescription" className="font-medium">Descripción*</label>
                                <input 
                                    id="shortDescription"
                                    name="shortDescription"
                                    type="text"
                                    placeholder="Ingresa una descripción corta de tu emprendimiento"
                                    className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                                    value={campaing.shortDescription}
                                    onChange={handleChangeInput}
                                    required
                                /> 
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="story" className="font-medium">Tu Historia*</label>
                                <textarea 
                                    id="story"
                                    name="story"
                                    placeholder="Cuentanos tu historia y lo que te motiva a realizar este emprendimiento..."
                                    className=" border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                                    value={campaing.story}
                                    onChange={handleChangeInput}
                                    required
                                /> 
                            </div> 

                            <div className="flex flex-col">
                                <label htmlFor="montoMeta" className="font-medium">Meta*</label>
                                <input 
                                    id="montoMeta"
                                    name="montoMeta"
                                    type="number"
                                    placeholder="Ingresa la cantidad que necesitas"
                                    className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                                    min={1}
                                    value={campaing.montoMeta}
                                    onChange={handleChangeInput}
                                    required
                                /> 
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="imagen" className="font-medium">Imagen*</label>
                                <input 
                                    id="imagen"
                                    name="imagen"
                                    type="file"
                                    className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                                    onChange={handleChangeInput}
                                    required
                                /> 
                            </div>


                            <div className="border-b border-neutral-200" />

                            <ButtonPrimary
                                className="w-full disabled:bg-neutral-400"
                                onClick={handleSubmit}
                                disabled={Boolean(!campaing.titulo || !campaing.shortDescription || !campaing.story || !campaing.montoMeta)}
                            >
                                Guardar Cambios
                            </ButtonPrimary> 

                            <ButtonOutline
                                className="w-full disabled:bg-neutral-400"
                                onClick={() => navigate("/crowdfunding")}
                            >
                                Cancelar
                            </ButtonOutline> 
                        </form>
                    </Card>
                </div>
            }
            
        </div>
    )
}