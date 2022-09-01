import React from "react";
import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function MessageModal({ messageSent }) {
  console.log("sarasa");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Modal size="2xl" isOpen={true}>
      <ModalOverlay onClick={onClose} bgColor="blackAlpha.800" />
      <ModalContent onClick={onClose}>
        <ModalBody>
          <Box>
            <Text>Mensaje Enviado</Text>
          </Box>
          <ModalCloseButton onClick={onClose()}>Cerrar</ModalCloseButton>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
