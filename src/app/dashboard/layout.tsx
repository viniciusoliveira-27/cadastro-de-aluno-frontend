import { Bus } from "lucide-react";
import React from "react";

export default function DashboardLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <div className="container flex h-20 rounded-xl items-center m-auto shadow-md gap-4 bg-zinc-800">
                <Bus className="text-yellow-500" size={48}/>
                <h1 className="uppercase font-bold text-3xl text-slate-100">Transporte do Tio Marcos</h1>
            </div>
            <div className="container items-center gap-4 w-md m-auto mt-2 rounded-xl shadow-md bg-slate-100">

            {children}
            </div>

        </>

    )
}