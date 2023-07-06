"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";

export default function profile() {
    return (
        <>
        <Header/>
        <main className="min-h-screen bg-gray-100">
            <SideBar/>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="flex">
                        <div className="relative flex">
                            <h1>プロフィールページです</h1>
                        </div>
                    </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}
