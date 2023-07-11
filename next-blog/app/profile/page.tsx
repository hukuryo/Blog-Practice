"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";

export default function profile() {
    return (
        <>
            <Header/>
            <main className="container mx-auto">
                <div className="flex">
                    <SideBar/>
                    <div className="ml-64 mt-32">
                        <div className="flex">
                            <div className="relative flex">
                                <h1>プロフィールページです</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
