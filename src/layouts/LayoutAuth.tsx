import { Outlet, useNavigate } from "react-router-dom";
import { UserStore } from "../store";
import { useEffect } from "react";

export default function LayoutAuth() { 
    const { id } = UserStore((state) => state);
    const navigate = useNavigate();

    useEffect(() => {
        if( id ) navigate("/");
    }, [id]);

    return (
        <div>
            <main className="p-2">
                <Outlet />
            </main>
        </div>
    )
}