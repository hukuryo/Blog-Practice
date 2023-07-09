"use client";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";

export default function Home() {
  return (
    <>
        <Header />
        <main>
          <SideBar/>
        </main>
    </>
  );
}