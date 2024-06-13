import React, {useEffect} from "react";
import {ColorModeScript, useColorMode} from "@chakra-ui/react";
import MoonIcon from "./Icon/MoonIcon";
import SunIcon from "./Icon/SunIcon";
import TooltipButton from "./TooltipButton";

export default function ColorModeToggleButton() {
  const {colorMode, toggleColorMode} = useColorMode();

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toggleColorMode();
    }
  });

  let isLightMode = colorMode === "light";
  return (
    <>
      <ColorModeScript initialColorMode="system"/>
      <TooltipButton
        onClick={toggleColorMode}
        label={"Toggle color mode"}
        tooltipLabel={"Toggle color mode"}
        icon={isLightMode ? <MoonIcon/> : <SunIcon/>}
      />
    </>
  );
}