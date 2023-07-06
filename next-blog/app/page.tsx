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
          <h1>ホームページです</h1>
            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='outline'
            >
            <Text></Text>
            <Stack>
              <CardBody>
                <Heading size='md'>The perfect latte</Heading>
              </CardBody>
              <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  Buy Latte
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        </main>
      </ChakraProvider>
  );
}