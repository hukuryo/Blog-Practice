import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar"
import { FooterForm } from "../components/FooterForm";
import { PageTitle } from "../components/PageTitle";
import { ArticleList } from "../components/ArticleList";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const getArticles = async () => {
    const supabase = createServerComponentClient({ cookies });
    const { data: books } = await supabase.from("books").select();
    return books;
}

export default async function bookIntroduction() {
    const books = await getArticles();
    
    return (
        <>
            <Header />
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                        <div>
                            <PageTitle title={"読んだ書籍一覧"}/>
                        </div>
                        <ArticleList articles={books} pass={"bookIntroduction"} />
                        <FooterForm />
                    </div>
                </div>
            </main>
        </>
    )
}
