import {
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
import TooltipButton from "./TooltipButton";

const QrButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <TooltipButton
        icon={<QrIcon />}
        label="Show QR Code"
        tooltipLabel="Show QR Code"
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>QR Code for this site</ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center">
            <Image
              src="/images/qr-tomastoloza-xyz.svg"
              alt="QR Code"
              borderRadius="xl"
              onDragStart={(event) => event.preventDefault()}
            />
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default QrButton;
