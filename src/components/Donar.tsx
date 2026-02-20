import { Subtitle, Texto } from "./ui/Texts";
import { useState } from "react";
import { ButtonOutline, ButtonPrimary } from "./ui/Buttons";
import { formatCurrency } from "../lib/format";
import type { CampaignType, DonateType } from "../types";
import { UserStore } from "../store";
import { makeDonate } from "../api/campaingAPI";

type DonarProps = {
    campaing: CampaignType,
    pagado: boolean
}

export default function Donar({ campaing, pagado }: DonarProps) {
    const [ monto, setMonto ] = useState<number>(0);
    const { id } = UserStore((state) => state);

    const handleClickMonto = (e: React.MouseEvent<HTMLButtonElement>, cantidad: number) => {
        e.preventDefault();
        if(cantidad) {
            setMonto(cantidad);
        }
    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cantidad = parseFloat(e.target.value);
        if(!isNaN(cantidad) || cantidad > 0) {
            setMonto(cantidad);
        }
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const dataDonate: DonateType = {
            idCampaign: campaing._id,
            idDonador: id ? id : JSON.parse(localStorage.getItem("user")!).id,
            montoDonacion: (monto).toString(),
            urlRedirect: "http://localhost:5173/process-payment"
        };

        const res = await makeDonate(dataDonate);
        const { cotizacion, pagoEntrante, permisoPagoSaliente, walletDonante } = res.data;
        console.log("informacion paymemt", res.data);
        if( res.success ){
            const infoPayment = {
                permisoPagoSaliente,
                cotizacion,
                pagoEntrante,
                walletDonante,
                idCampaign: campaing._id,
                idDonador: id ? id : JSON.parse(localStorage.getItem("user")!).id
            }
            console.log("infor pament", infoPayment);
            localStorage.setItem("info-payment", JSON.stringify(infoPayment) );
            window.location.href = res.data.permisoPagoSaliente.interact.redirect;
        };
    };

    return (
        <div>
            <Subtitle subtitle="Hacer una Donación"/>
            <Texto>Apoyar esta campaña</Texto>

            {pagado ? 
                <div className="flex flex-col justify-center items-center py-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-neutral-300 size-20">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                    <Subtitle subtitle="¡Gracias!"/>
                    <Texto>Su donación ha sido recibida</Texto>
                </div>
                : 
                <div className="flex flex-col items-center text-start py-2 w-full">
                    <form className="w-full space-y-3">
                        <label className="font-medium">Selecciona un monto</label>
                        <div className="flex gap-1">
                            <ButtonOutline className="w-full text-sm" onClick={(e) => handleClickMonto(e, 10)}>$10</ButtonOutline>                            
                            <ButtonOutline className="w-full text-sm" onClick={(e) => handleClickMonto(e, 50)}>$50</ButtonOutline>
                            <ButtonOutline className="w-full text-sm" onClick={(e) => handleClickMonto(e, 100)}>$100</ButtonOutline>
                            <ButtonOutline className="w-full text-sm" onClick={(e) => handleClickMonto(e, 200)}>$200</ButtonOutline>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="amount" className="text-sm font-medium">O ingresa un monto</label>
                            <input 
                                id="amount" 
                                name="amount" 
                                type="number"
                                placeholder="Ingresa un monto"
                                className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                                min={1}
                                onChange={handleChangeInput}
                            /> 
                        </div> 

                        <ButtonPrimary
                            className="w-full disabled:bg-neutral-400"
                            onClick={handleSubmit}
                            disabled={monto ? false : true}
                        >
                            Donar {formatCurrency((monto).toString())}
                        </ButtonPrimary>                 
                    </form>
                </div>
            }
        </div>
    )
}