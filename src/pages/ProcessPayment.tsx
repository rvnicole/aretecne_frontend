import { useEffect } from "react";
import Spinner from "../components/Spinner";
import Modal from "../components/ui/Modal";
import { useNavigate } from "react-router-dom";
import { completeDonate } from "../api/campaingAPI";

export default function ProcessPayment(){
    const navigate = useNavigate();
    useEffect(() => {
        console.log("EJECUTA USE EFEEC");
        const params = new URLSearchParams(window.location.href);
        const interactRef = params.get("interact_ref");
        const { cotizacion, pagoEntrante, permisoPagoSaliente, walletDonante, idCampaign, idDonador } = JSON.parse(localStorage.getItem("info-payment")!);

        const completePayment = async () => {
            const res = await completeDonate({
                cotizacion,
                pagoEntrante,
                permisoPagoSaliente,
                walletDonante,
                idCampaign,
                interactRef,
                idDonador
            });
            console.log(res);

            navigate(`/campaing?id=${idCampaign}`);
        }
        completePayment();
    },[])

    return (
        <div>
            <Modal
                open={true} 
                onClose={() => {}}
            >
                <Spinner />
                <p className="flex justify-center">Procesando el pago...</p>
            </Modal>
        </div>
    )
};