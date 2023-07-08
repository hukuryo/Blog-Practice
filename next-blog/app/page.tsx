"use client";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { Button, Card, CardBody, CardFooter, ChakraProvider, Heading, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
      <ChakraProvider>
        <Header />
        <main>
          <SideBar/>
        </main>
      </ChakraProvider>
  );
}