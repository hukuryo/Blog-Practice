"use client";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex">
        <SideBar />
        <section className="relative flex">
          <h1>ホームページです</h1>
        </section>
      </main>
      <Footer />
    </div>
  );
}