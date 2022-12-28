import React from "react";
import Box from "@mui/material/Box";
import CopyToClipboardTextArea from "../components/CopyToClipboardTextArea";
import Info from "./Info";
import {styled} from "@mui/material";


const InfoBox = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  alignItems: "center",
}));

const ContactInfo = () => {
  return <InfoBox>
    <CopyToClipboardTextArea value={"tomasezequieltoloza@gmail.com"}/>
    <Info/>
  </InfoBox>
}

export default ContactInfo;
