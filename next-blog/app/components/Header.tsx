import Link from "next/link";

export default function Header() {
return (
    <header className="bg-gray-900 text-white">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Next-Blog</h2>
            <nav>
            <ul className="flex space-x-4">
                <li>
                <Link href="/">Home</Link>
                </li>
                <li>
                <Link href="/articleList">ArticleList</Link>
                </li>
                <li>
                <Link href="/profile">Profile</Link>
                </li>
            </ul>
            </nav>
        </div>
    </header>
);
}