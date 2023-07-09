import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Image from 'next/image';
import Link from 'next/link';

export function SideBar() {
    return (
        <>
            <aside id="cta-button-sidebar" className="fixed top-18 right-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar" aria-hidden="true">
                <div className="shadow-lg h-full px-3 py-4 overflow-y-auto bg-indigo-100 dark:bg-gray-800">
                    <div id="dropdown-cta" className="p-4 mt-5 mb-5 rounded-lg bg-blue-50 dark:bg-blue-900" role="alert">
                        <div className="flex items-center justify-center mb-3">
                            
                        </div>
                        <h3 className="text-center mt-7 mb-7">fukuryo</h3>
                        <p className="mb-3 text-xs dark:text-blue-400">
                            2022/11~エンジニアになりました。
                            フロント中心に頑張っています。
                        </p>
                        <div className='mb-10 mt-10 flex items-center justify-center '>
                            <button className="shadow-lg bg-gray-500 shadow-gray-500/50 text-white rounded px-2 py-1">
                                <Link className="text-xs hover:border-black" href="/profile">プロフィール</Link>
                            </button>
                        </div>
                        <div className='text-center'>
                            <a href="https://github.com/hukuryo" className='mr-5'><FontAwesomeIcon className='text-black' icon={faGithub} /></a>
                            <a href="https://twitter.com/hukuryo_"><FontAwesomeIcon className='text-black' icon={faTwitter} /></a>
                        </div>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li className="flex justify-center items-center p-2 text-gray-900 rounded-lg dark:text-white">    
                            <h5 className='mt-7'>SNS</h5>
                        </li>
                        <li>
                            <a href="https://github.com/hukuryo" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://qiita.com/hukuryo" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Qiita</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/hukuryo_" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Twitter</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    );
}