import React from "react";
import { Modal } from "../Modal/Modal";
import { CreateRippleModalBody } from "./CreateRippleModalBody";
import { CreateRippleModalHeader } from "./CreateRippleModalHeader";

export const CreateRippleModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} width="w-[35rem]">
        <CreateRippleModalHeader
          projectName="hydralite"
          closeModal={() => setIsOpen(false)}
        />
        <CreateRippleModalBody />
      </Modal>
    </>
  );
};
