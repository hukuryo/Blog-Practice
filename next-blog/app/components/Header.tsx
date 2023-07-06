import { Link } from "@chakra-ui/react"

export function Header() {
return (
    <header className="bg-gray-700 text-white">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Ryohei-no-Blog</h2>
            <nav>
            <ul className="flex space-x-4">
                <li>
                    <Link href="/">トップページ</Link>
                </li>
                <li>
                    <Link href="/articleList">記事一覧</Link>
                </li>
                <li>
                    <Link href="/profile">プロフィール</Link>
                </li>
                <li>
                    <Link href="/bookIntroduction">IT書籍紹介</Link>
                </li>
            </ul>
            </nav>
        </div>
    </header>
);
}