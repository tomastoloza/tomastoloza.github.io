import Profile from "../Views/Profile";
import Head from "next/head";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";
import {theme} from "../styles/theme";

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Tomás Toloza</title>
      </Head>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Profile/>
    </ChakraProvider>
  )
}
