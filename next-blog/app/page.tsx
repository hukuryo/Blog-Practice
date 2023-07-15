"use client";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SideBar />
      </main>
    </>
  );
}