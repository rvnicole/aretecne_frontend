import { useState } from "react";
import { ButtonPrimary } from "../../components/ui/Buttons";
import { Card } from "../../components/ui/Cards";
import { Subtitle, Texto, TitlePrimary } from "../../components/ui/Texts";
import type { RegisterType } from "../../types";
import { register } from "../../api/authAPI";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [user, setUser] = useState<RegisterType>({
        name: "",
        email: "",
        password: "",
        walletAddress: ""
    });

    const navigate = useNavigate();

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        if(name && value) {
            setUser(c => ({
                ...c,
                [name]: value
            }));
        }
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await register(user);
        navigate("/auth/login");
    }

    return(
        <div className="flex justify-center items-center mt-10">
            <Card className="w-full md:w-[400px]">
                <div className="text-center space-y-2">
                    <TitlePrimary title="MicroCommerce"/>
                    <Subtitle subtitle="Crea una Cuenta"/>
                    <Texto>¡Unete a nuestra comunidad!</Texto>
                </div>
                
                <form className="py-3 space-y-3">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-medium">Nombre Completo*</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Ingresa tu nombre completo"
                            className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                            onChange={handleChangeInput}
                            required
                        /> 
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-medium">Correo*</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Ingresa tu correo electronico"
                            className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                            onChange={handleChangeInput}
                            required
                        /> 
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-medium">Contraseña*</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Ingresa tu contraseña"
                            className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                            onChange={handleChangeInput}
                            required
                        /> 
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="walletAddress" className="font-medium">Wallet Address*</label>
                        <input
                            id="walletAddress"
                            name="walletAddress"
                            type="text"
                            placeholder="Ingresa la dirección de tu wallet"
                            className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                            onChange={handleChangeInput}
                            required
                        /> 
                    </div>

                    <ButtonPrimary
                        className="w-full disabled:bg-neutral-400"
                        onClick={handleSubmit}
                        disabled={Boolean(!user.email || !user.password || !user.name || !user.walletAddress)}
                    >
                        Enviar
                    </ButtonPrimary>  

                    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                        <Texto>¿Ya tienes una cuenta?</Texto>
                        <a
                            href="/auth/login"
                            className="text-sm font-medium cursor-pointer"
                        >
                            Iniciar Sesión
                        </a>
                    </div>
                </form>
            </Card>
        </div>
    )
}