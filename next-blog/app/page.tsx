"use client";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header/>
        <h1>ホームページです</h1>
      </div>
      <Footer/>
    </>
  )
}
