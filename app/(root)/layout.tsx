import {ReactNode} from "react";
import Header from "@/components/Header";
import FilterHeader from "@/components/Filter";

export default function  RootLayout({children}:{
    children:ReactNode
}){
    return <>
    <Header/>
    <FilterHeader/>
    <main>{children}</main>

    </>
}