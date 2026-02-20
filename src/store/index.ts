import { create } from "zustand";
import type { UserType } from "../types";

type UserStore = UserType & {
    setID: (data: string) => void,
    setName: (data: string) => void,
    setEmail: (data: string) => void,
    setWalletAddress: (data: string) => void
}

const user: UserType = JSON.parse(localStorage.getItem("user") || "{}");

export const UserStore = create<UserStore>((set) => ({
    id: user.id || "",
    name: user.name || "",
    email: user.email || "",
    walletAddress: user.walletAddress || "",
    setID: (data) => {
        set({id: data});
    },
    setName: (data) => {
        set({name: data});
    },
    setEmail: (data) => {
        set({email: data});
    },
    setWalletAddress: (data) => {
        set({walletAddress: data});
    }
}));