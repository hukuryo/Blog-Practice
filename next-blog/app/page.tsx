import { loadPosts } from "./lib/fetch-posts";

import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { FooterForm } from "./components/FooterForm";
import { PageTitle } from "./components/PageTitle";
import { ArticleList } from "./components/ArticleList";

export default async function Home() {
    const articles = await loadPosts();

    return (
        <>
        <Header />
        <main className="md:container md:mx-auto">
            <div className="flex flex-row-reverse">
                <SideBar/>
                <div className="mt-10 ml-5 mr-3 w-full rounded-md">
                    <div>
                        <PageTitle title={"オススメの記事一覧"}/>
                    </div>
                    <ArticleList articles={articles} pass={"articleList"}/>
                    <FooterForm />
                </div>
            </div>
        </main>
        </>
    );
}