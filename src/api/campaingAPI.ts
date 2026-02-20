import { api } from "../lib/axios";
import { isAxiosError } from "axios";
import type { CampaingEditType, DonateType } from "../types";

export const createCampaign = async ( dataCampaign: FormData) => {
    try{
        const url = "/campaign/create-campaign";

        const { data } = await api.post(url, dataCampaign);
        console.log("Data Nueva Campaña", data)

        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    };
};

export const getMyCampaigns= async ( idAutor: string) => {
    try{
        const url = `/campaign/campaigns-autor?idAutor=${idAutor}`;

        const { data } = await api.get(url);
        console.log("Data Nueva Campaña", data)

        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    };
};

export const getCampaignByID= async ( id: string) => {
    try{
        const url = `/campaign/campaign?id=${id}`;

        const { data } = await api.get(url);
        console.log("Data Campaña By ID", data)

        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    };
};

export const getAllCampaigns= async () => {
    try{
        const url = `/campaign/campaigns`;

        const { data } = await api.get(url);
        console.log("Data Todas las Campañas", data)

        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    };
};

export const editCampaign= async (campaingEdit: CampaingEditType & { id: string }) => {
    try{
        const url = `/campaign/update-campaign`;

        const { data } = await api.post(url, campaingEdit);
        console.log("Data Campaña Editada", data)

        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    };
};

export const makeDonate= async (dataDonate: DonateType) => {
    try{
        const url = `/campaign/donate`;

        const { data } = await api.post(url, dataDonate);
        console.log("Data Donación", data)

        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    };
};

export const completeDonate = async (dataCompleteDonate: any) => {
    try{
        const url = `/campaign/complete-donate`;
        const { data } = await api.post(url, dataCompleteDonate);

        console.log("Response complete payment", data);
        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    }
}
