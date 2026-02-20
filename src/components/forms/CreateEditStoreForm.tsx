import { ButtonPrimary } from "../ui/Buttons";
import { Subtitle, Texto } from "../ui/Texts";

type CreateEditStoreFormProps = {
    accion: "create"|"edit";
}

export default function CreateEditStoreForm({ accion }: CreateEditStoreFormProps) {

    const handleChangeInput = () => {
        
    }

    const handleSubmit = () => {

    }

    return (
        <div className="space-y-3">
            <div>
                <Subtitle subtitle={accion == "create" ? "Crear una Tienda" : "Editar Tienda"}/>
                <Texto>Ingresa la información de tu tienda</Texto>
            </div>
            

            <div className="flex flex-col items-center text-start py-2 w-full">
                <form className="w-full space-y-3">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-sm font-medium">Nombre de la Tienda*</label>
                        <input 
                            id="name" 
                            name="name" 
                            type="text"
                            placeholder="Ingresa el nombre de tu tienda"
                            className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                            onChange={handleChangeInput}
                        /> 
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-sm font-medium">Descripción*</label>
                        <textarea 
                            id="description" 
                            name="description"
                            placeholder="Describe tu tienda..."
                            className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                            onChange={handleChangeInput}
                        /> 
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="imagen" className="text-sm font-medium">Imagen*</label>
                        <input 
                            id="imagen" 
                            name="imagen" 
                            type="text"
                            placeholder="Ingresa el nombre de tu tienda"
                            className="border border-neutral-200 py-1 px-2 rounded-lg focus:ring focus:ring-neutral-300 focus:outline-none"
                            onChange={handleChangeInput}
                        /> 
                    </div>

                    <ButtonPrimary
                        className="w-full disabled:bg-neutral-400"
                        onClick={handleSubmit}
                    >
                        {accion == "create" ? "Guardar" : "Guardar"}
                    </ButtonPrimary>                 
                    </form>
                </div>
        </div>
    )
}