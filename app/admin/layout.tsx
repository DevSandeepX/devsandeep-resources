import {ReactNode} from "react";
import Header from "@/components/Header";

export default function  AdminLayout({children}:{
    children:ReactNode
}){
    return <>
    <Header/>
        <main>
            {children}
        </main>

    </>
}