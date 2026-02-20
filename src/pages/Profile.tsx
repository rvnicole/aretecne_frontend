import GeneralNav from "../components/GeneralNav";
import { Card } from "../components/ui/Cards";
import { IconProfile } from "../components/ui/Icons";
import { Subtitle } from "../components/ui/Texts";
import { UserStore } from "../store";

export default function Profile() {
    const { id, name, email, walletAddress } = UserStore((state) => state);

    return (
        <div>
            <GeneralNav />

            <div className="flex flex-col gap-4 justify-center items-center my-10">
                <Card className="flex flex-col justify-center items-center w-full md:w-[500px] space-y-3">
                    <IconProfile
                        className="w-24 h-24 text-4xl"
                        nameUser={name}
                    />

                    <Subtitle subtitle={name}/>
                </Card>

                <Card className="flex flex-col text-left items-center w-full md:w-[500px] space-y-3">
                    <p className="font-semibold">Información de tu cuenta</p>
                    
                    <div className="flex items-center gap-3 w-full p-3 bg-neutral-100 rounded-lg">
                        <div className="h-6 w-6 text-neutral-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-neutral-400">Nombre Completo</p>
                            <p className="font-medium">{name}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full p-3 bg-neutral-100 rounded-lg">
                        <div className="h-5 w-5 text-neutral-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-neutral-400">Correo Electronico</p>
                            <p className="font-medium">{email}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 w-full p-3 bg-neutral-100 rounded-lg">
                        <div className="h-5 w-5 text-neutral-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-neutral-400">Wallet Address</p>
                            <p className="font-medium">{walletAddress}</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}