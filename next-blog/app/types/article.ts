export type articlesContent = {
    id: number;
    title: string;
    body: string;
    date: string,
    pass: string
}

export type ArticleListProps = {
    articles: articlesContent[] | null;
    pass: string
}