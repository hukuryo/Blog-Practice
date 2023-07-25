import Link from "next/link";

type articlesContent = {
    id: number;
    title: string;
    body: string;
}

type ArticleListProps = {
    articles: articlesContent[] | null;
}

export function ArticleList(props: ArticleListProps) {
    const { articles } = props;
    return (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles?.map((article: articlesContent) => (
                <li className="col-span-1 bg-white rounded-lg shadow-lg" key={article.id}>
                    <Link href={`/articles/${article.id}`} legacyBehavior>
                        <a className="block p-6 space-y-2">
                        <h3 className="text-xl font-bold">{article.title}</h3>
                        {/* 他のコンテンツをここに追加 */}
                        </a>
                    </Link>
                </li>
            ))}
        </ul>
    );
}