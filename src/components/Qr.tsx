import {
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure
} from "@chakra-ui/react";
import QrIcon from "./Icon/QrIcon";

const Qr = () => {
  const {isOpen, onOpen, onClose} = useDisclosure()


  return <>
    <IconButton aria-label={"QR"} size={"lg"} color={"primary"} onClick={onOpen}>
      <QrIcon/>
    </IconButton>
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>QR Code for this site</ModalHeader>
        <ModalCloseButton/>
        <ModalBody display="flex" justifyContent={"center"}>
          <Image src={"/images/qr-tomastoloza-xyz.svg"} alt={"QR Code"} borderRadius={"xl"}
                 onDragStart={event => event.preventDefault()}/>
        </ModalBody>
        <ModalFooter/>
      </ModalContent>
    </Modal>
  </>
}

export default Qr
