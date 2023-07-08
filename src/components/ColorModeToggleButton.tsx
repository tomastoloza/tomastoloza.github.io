import React from "react";
import {IconButton, useColorMode} from '@chakra-ui/react'
import MoonIcon from "./Icon/MoonIcon";
import SunIcon from "./Icon/SunIcon";

export default function ColorModeToggleButton() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <IconButton size="lg" onClick={toggleColorMode} aria-label={"Toggle dark mode"}>
      {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
    </IconButton>
  )
}