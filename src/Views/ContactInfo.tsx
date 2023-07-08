import React from "react";
import CopyToClipboardTextArea from "../components/CopyToClipboardTextArea";
import Info from "./Info";
import {Box} from "@chakra-ui/react";

const ContactInfo = () => {
  return <Box display="flex" flexDirection="column" alignItems={"center"} gap={2}>
    <CopyToClipboardTextArea value={"tomasezequieltoloza@gmail.com"}/>
    <Info/>
  </Box>
}

export default ContactInfo;
