import Link from "next/link";

type articlesContent = {
    id: number;
    title: string;
    body: string;
    date: string
}

type ArticleListProps = {
    articles: articlesContent[] | null;
}

export function ArticleList(props: ArticleListProps) {
    const { articles } = props;
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {articles?.map((article: articlesContent) => (
                <li className="col-span-1 rounded-lg shadow-lg" key={article.id}>
                    <Link href={`/articles/${article.id}`} legacyBehavior>
                        <a className="block space-y-2">
                            <div className="h-40 mb-2 bg-white">
                                <img src="" alt="" />
                            </div>
                            <div className="mx-2">
                                <h5 className="font-bold mb-3">{article.title}</h5>
                                <small className="text-xs">{article.date}</small>
                            </div>
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}