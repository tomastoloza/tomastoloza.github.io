import {Box} from "@chakra-ui/react";
import QrButton from "./QrButton";
import ColorModeToggleButton from "./ColorModeToggleButton";
import React from "react";

export default function ProfileActions() {
  return <Box display="flex" alignItems={"center"} gap={2} justifyContent={"center"} width={"100%"}>
    <QrButton/>
    <ColorModeToggleButton/>
  </Box>;
}