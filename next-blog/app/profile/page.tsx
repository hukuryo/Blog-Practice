"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";

export default function profile() {
    return (
        <>
            <Header/>
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-32 ml-16 w-full">
                        <div>
                            <div>
                                <h1 className="font-bold">プロフィールページです</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
