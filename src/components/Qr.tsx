import {QrCode} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {Dialog} from "@mui/material";
import {useState} from "react";
import Image from "next/image";

const Qr = () => {
  const [open, setOpen] = useState(false);
  const toggleDialog = () => {
    return setOpen(!open);
  }

  return <>
    <IconButton aria-label={"QR"} size={"large"} color={"primary"} onClick={toggleDialog}>
      <QrCode/>
    </IconButton>
    <Dialog onClose={toggleDialog} open={open}>
      <Image src={"/images/qr-tomastoloza-xyz.svg"} alt={"QR Code"} width={700}
             height={475}
             sizes="100vw"
             style={{
               width: '100%',
               height: 'auto',
             }}
      onDragStart={event => event.preventDefault()}/>
    </Dialog>
  </>
}

export default Qr
