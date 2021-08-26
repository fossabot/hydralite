import React from "react";
import { Modal } from "../Modal/Modal";
import { CreateRippleModalBody } from "./CreateRippleModalBody";
import { CreateRippleModalHeader } from "./CreateRippleModalHeader";

interface ICreateRippleModal{
  isOpen: any,
  setIsOpen: any,
}
export const CreateRippleModal = (props: ICreateRippleModal) => {
  return (
    <>
      <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen} width="w-[35rem]">
        <CreateRippleModalHeader
          projectName="hydralite"
          closeModal={() => props.setIsOpen(true)}
        />
        <CreateRippleModalBody />
      </Modal>
    </>
  );
};
