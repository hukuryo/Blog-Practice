"use client";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SideBar } from "../components/SideBar";

export default function profile() {
    return (
        <div>
        <Header/>
            <div className="flex">
                <SideBar/>
                <div className="relative flex">
                    <h1>プロフィールページです</h1>
                </div>
            </div>
        <Footer/>
    </div>
    )
}
