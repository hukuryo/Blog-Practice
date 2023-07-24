import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar"
import { FooterForm } from "../components/FooterForm";
import { PageTitle } from "../components/PageTitle";

type booksContent = {
    id: number
    title: string,
    body: string,
}


export default async function bookIntroduction() {

    const supabase = createServerComponentClient({ cookies });

    const { data: books } = await supabase.from("books").select();
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
                            {books?.map((books: booksContent) => (
                                <div className="pt-10 h-60 w-11/12 sm:w-2/5 text-center rounded-lg shadow-lg" key={books.id}>
                                    <div className="font-bold mt-10">{books.title}</div>
                                </div>
                            ))}
                        </div>
                        <FooterForm />
                    </div>
                </div>
            </main>
        </>
    )
}
