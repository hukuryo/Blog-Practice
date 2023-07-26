export type articlesContent = {
    id: number;
    title: string;
    body: string;
    date: string
}

export type ArticleListProps = {
    articles: articlesContent[] | null;
}