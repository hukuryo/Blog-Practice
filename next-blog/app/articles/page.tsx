import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar"
import { FooterForm } from "../components/FooterForm";
import { PageTitle } from "../components/PageTitle";
import { ArticleList } from "../components/ArticleList";

export default async function articles() {
    const supabase = createServerComponentClient({ cookies });

    const { data: articles } = await supabase.from("articles").select();
    return (
        <>
            <Header />
            <main className="md:container md:mx-auto">
                <div className="flex flex-row-reverse">
                    <SideBar/>
                    <div className="mt-10 mr-3 ml-5 w-full rounded-md">
                        <div>
                            <PageTitle title={"技術記事一覧"}/>
                        </div>
                        <ArticleList articles={articles} pass={"articles"}/>
                        <FooterForm />
                    </div>
                </div>
            </main>
        </>
    )
}
