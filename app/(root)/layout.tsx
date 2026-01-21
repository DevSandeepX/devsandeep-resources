import { ReactNode } from "react";
import Header from "@/components/Header";
import FilterHeader from "@/components/Filter";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: {
    children: ReactNode
}) {
    return <>
        <Header />
        <main className="pt-[120px] min-h-screen">
            {children}
        </main>
        <Footer />


    </>
}