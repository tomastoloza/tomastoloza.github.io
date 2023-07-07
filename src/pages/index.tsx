import Profile from "../Views/Profile";
import Head from "next/head";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import theme from "./theme";

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Tomás Toloza</title>
        <link rel="icon"
              href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Profile/>
    </ChakraProvider>
  )
}
