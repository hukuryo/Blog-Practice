"use client";

import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar"
import { FooterForm } from "../components/FooterForm";
import { PageTitle } from "../components/PageTitle";


export default function bookIntroduction() {
    return (
        <>
            <Header />
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-10 ml-5 w-full rounded-md">
                        <div>
                            <PageTitle title={"読んだ書籍一覧"}/>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="pt-10 h-60 w-11/12 sm:w-2/5 text-center rounded-lg shadow-lg">
                                <div className="font-bold mt-10">タイトル</div>
                                <div className="mt-5">2023/7/19</div>
                            </div>
                            <div className="pt-10 h-60 w-11/12 sm:w-2/5 text-center rounded-lg shadow-lg">
                                <div className="font-bold mt-10">タイトル</div>
                                <div className="mt-5">2023/7/19</div>
                            </div>
                            <div className="pt-10 h-60 w-11/12 sm:w-2/5 text-center rounded-lg shadow-lg">
                                <div className="font-bold mt-10">タイトル</div>
                                <div className="mt-5">2023/7/19</div>
                            </div>
                        </div>
                        <FooterForm />
                    </div>
                </div>
            </main>
        </>
    )
}
