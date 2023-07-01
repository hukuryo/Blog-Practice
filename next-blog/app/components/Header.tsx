"use client";

import Link from "next/link";

export default function header() {
    return (
        <div>
            <h2>next-blog</h2>
            <nav>
                <ul>
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/articleList"}>ArticleList</Link></li>
                    <li><Link href={"/profile"}>Profile</Link></li>
                </ul>
            </nav>
        </div>
    )
}
