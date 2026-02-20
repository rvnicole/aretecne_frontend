import { api } from "../lib/axios";
import { isAxiosError } from "axios";
import type { LoginType, RegisterType } from "../types";

export const login = async ( dataLogin: LoginType) => {
    try{
        const url = "/auth/login";

        const { data } = await api.post(url, dataLogin);
        console.log("Data login", data)

        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    };
};

export const register = async ( dataRegister: RegisterType) => {
    try{
        const url = "/user/create-user";

        const { data } = await api.post(url, dataRegister);
        console.log("Data register", data)

        return data;
    }
    catch(error){
        if(isAxiosError(error) && error.response){
            return error.response.data;
        }
    };
};
