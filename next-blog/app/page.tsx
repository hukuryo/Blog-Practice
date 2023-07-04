"use client";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";

export default function Home() {
  return (
    <>
      <div>
        <Header/>
          <div className="flex">
            <SideBar/>
            <div className="relative flex">
              <h1>ホームページです</h1>
            </div>
          </div>
      </div>
      <Footer/>
    </>
  )
}
