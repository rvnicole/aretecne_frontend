import { useState } from "react";
import { ButtonPrimary } from "../../components/ui/Buttons";
import { Card } from "../../components/ui/Cards";
import { Subtitle, Texto, TitlePrimary } from "../../components/ui/Texts";
import { UserStore } from "../../store";
import { login } from "../../api/authAPI";
import type { LoginType } from "../../types";

export default function Login() {
    const [error, setError] = useState(false);
    const [user, setUser] = useState<LoginType>({
        email: "",
        password: ""
    });

    const { setID, setName, setEmail, setWalletAddress } = UserStore((state) => state);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;

        if(name && value) {
            setUser(c => ({
                ...c,
                [name]: value
            }));

            setError(false);
        }
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const res = await login(user);

        if(res.message == "Usuario o contraseña incorrectos") {
            setError(true);
            return;
        }

        setID(res.data._id);
        setName(res.data.name);
        setEmail(res.data.email);
        setWalletAddress(res.data.walletAddress);

        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
    }

    return(
        <div className="flex justify-center items-center mt-10">
            <Card className="w-full md:w-[400px]">
                <div className="text-center space-y-2">
                    <TitlePrimary title="MicroCommerce"/>
                    <Subtitle subtitle="Bienvenido de nuevo"/>
                    <Texto>Ingresa tu correo y contraseña para tener acceso a tu cuenta</Texto>
                </div>
                
                <form className="py-3 space-y-3">

                    { error && (
                        <div className="text-white font-medium bg-red-600 text-center p-1 rounded-lg">
                            Ops! correo o contraseña inconcorrecta.
                        </div>
                    )}

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

                    <ButtonPrimary
                        className="w-full disabled:bg-neutral-400"
                        onClick={handleSubmit}
                        disabled={Boolean(!user.email || !user.password)}
                    >
                        Iniciar
                    </ButtonPrimary> 

                    <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                        <Texto>¿No tienes una cuenta?</Texto>
                        <a
                            href="/auth/register"
                            className="text-sm font-medium cursor-pointer"
                        >
                            Registrarme
                        </a>
                    </div>
                </form>
            </Card>
        </div>
    )
}