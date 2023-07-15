"use client";

import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar"
import { FooterForm } from "../components/FooterForm";

export default function articleList() {
    return (
        <>
            <Header/>
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-16 ml-16 w-full rounded-md">
                        
                    <FooterForm />
                    </div>
                </div>
            </main>
        </>
    )
}
