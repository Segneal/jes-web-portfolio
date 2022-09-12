import React from "react";
import { Image, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";

export default function ImageModal({ currentPhoto, isOpen, onOpen, onClose }) {
  return (
    <Modal
      size="full"
      className="photo-modal"
      isOpen={isOpen}
      onClose={onClose}
      bgColor="red.500"
    >
      <ModalOverlay onClick={onClose} bgColor="blackAlpha.800" />
      <ModalContent
        onClick={onClose}
        bgColor="whiteAlpha.100"
        className="photo-modal-content"
        tabIndex="99999"
      >
        <Image
          className="modal-image"
          bgColor="red.100"
          src={currentPhoto}
          alt=""
        ></Image>
      </ModalContent>
    </Modal>
  );
}
