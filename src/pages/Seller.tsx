import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GeneralNav from "../components/GeneralNav";
import { Card, CardList } from "../components/ui/Cards";
import { Subtitle, Texto, Title } from "../components/ui/Texts";
import { IconPrimary } from "../components/ui/Icons";
import { ButtonPrimary } from "../components/ui/Buttons";
import type { StoreType } from "../types";
import Modal from "../components/ui/Modal";
import CreateEditStoreForm from "../components/forms/CreateEditStoreForm";

export default function Seller() {
    const [store, setStore] = useState<StoreType>();
    const [open, setOpen] = useState<boolean>(false);
    const [accion, setAccion] = useState<"create"|"edit">("create");
    const navigate = useNavigate();

    useEffect(() => {

    }, []);
    
    return (
        <div>
            <GeneralNav />

            <div className="mt-5 p-4">
                <Title title="Panel de Vendedor" />
                <Texto>Administra tu Tienda</Texto>
            </div>

            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-5 m-5">
                <Card 
                    className="flex gap-3 justify-start items-center w-full group transition-all hover:scale-[102%] cursor-pointer"
                    onClick={() => navigate("/shopping")}
                >
                    <IconPrimary>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                        </svg>
                    </IconPrimary>

                    <div>
                        <Subtitle subtitle="Ordenes"/>
                        <Texto>
                            Consulta y administra tus ordenes
                        </Texto>
                    </div>
                </Card>

                <Card 
                    className="flex gap-3 justify-start items-center w-full group transition-all hover:scale-105 cursor-pointer"
                    onClick={() => navigate("/seller")}
                >
                    <IconPrimary>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                        </svg>
                    </IconPrimary>

                    <div>
                        <Subtitle subtitle="Productos"/>
                        <Texto>
                            Agrega y administra tus productos
                        </Texto>
                    </div>
                </Card>
            </div>

            <div className="flex gap-2 flex-col text-center md:text-left md:flex-row md:justify-between items-center mt-10 p-4">
                <div>
                   <Title title="Mi Tienda" />
                    <Texto>Administra  la información de tu Tienda</Texto> 
                </div>
                
                { !store && (
                    <ButtonPrimary
                        className="flex justify-center items-center gap-2"
                        onClick={() => {
                            setOpen(true);
                            setAccion("create");
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>

                        <p className="text-sm">Crear Tienda</p>
                    </ButtonPrimary>
                )}
            </div>

            {store && (
                <div className="mt-5 p-4 w-full">
                    <CardList className="flex flex-col md:flex-row">
                        <img 
                            src={store.imagen}
                            className="md:w-1/3 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                        />

                        <div className="flex flex-col justify-between p-6 md:w-2/3">
                            <div>
                                <Subtitle subtitle={store.name}/>
                                <Texto>{store.description}</Texto>  
                            </div>
                                
                            <div className="flex justify-between items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-neutral-400 size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>

                                <ButtonPrimary
                                    className="flex justify-center items-center gap-2"
                                    onClick={() => ""}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                    </svg>

                                    <p className="text-sm">Editar</p>
                                </ButtonPrimary>
                            </div>
                        </div>
                    </CardList>
                </div>
            )}

            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <CreateEditStoreForm accion={accion}/>
            </Modal>
        </div>
    )
}