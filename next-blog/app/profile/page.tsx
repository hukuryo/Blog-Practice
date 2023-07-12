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
                    <div className="mt-16 ml-16 w-full">
                        <h1 className="font-bold text-2xl">プロフィール紹介</h1>
                        <p className="mt-16">Ryohei-no-Blogへようこそ！</p>
                        <p className="mt-8">このブログでは技術についての記事などを中心に記事を書いています。</p>
                        <p className="mt-8">このページでは自分の経歴を紹介していきます。</p>
                        <div className="mt-32">
                            <div className="border border-slate-300 h-80 w-5/6 px-8 pt-8">
                                <p>2021/</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
