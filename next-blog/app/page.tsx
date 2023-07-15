"use client";
import {client} from "../libs/client"

import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

export const getStaticProps = async() => {
  const data = await client.get({ endpoint: "ryoheiblog" });

  return {
    props: {
      blog: data,
    }
  }
}

type BlogContent = {
  title: string,
  body: string
}

export default function Home({ blog }: { blog: BlogContent }) {
  return (
    <>
      <Header />
      <main>
        <SideBar />
      </main>
    </>
  );
}