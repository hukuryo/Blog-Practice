import Link from "next/link";

export function Header() {
    return (
        <>
            <div className="w-full shadow-lg  p-4 pl-4 border border-gray-200 bg-sky-200 rounded-t-xl dark:border-gray-600 dark:bg-gray-700">
                <div className="grid grid-cols-3">
                    <div className="sm:col-span-1">
                        <h1 className="font-bold text-xl">Hukuryo-no-Blog</h1>
                    </div>
                    <div className="items-center justify-center hidden col-span-1 space-x-3 sm:flex w-96">
                        <Link href="/" legacyBehavior><a className="text-xs hover:border-black font-bold hover:border-b-2">トップページ</a></Link>
                        <Link href="/articleList" legacyBehavior><a className="text-xs hover:border-black font-bold hover:border-b-2">記事一覧</a></Link>
                        <Link href="/profile" legacyBehavior><a className="text-xs hover:border-black font-bold hover:border-b-2">プロフィール</a></Link>
                        <Link href="/bookIntroduction" legacyBehavior><a className="text-xs hover:border-black font-bold hover:border-b-2">IT書籍紹介</a></Link>
                    </div>
                    <div className="flex justify-end col-span-2">
                        <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-700 rounded-lg sm:hidden bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600">
                            <span className="sr-only">Open sidebar</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}