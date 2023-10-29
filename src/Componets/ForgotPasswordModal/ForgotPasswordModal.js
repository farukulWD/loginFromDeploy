import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import {
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "./ForgotPasswordModalStyle";
import { Button, Form, FormWrapper, Heading, Input } from "../LoginFormStyle";

const ForgotPasswordModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      onClose();
    }
  };

  return (
    <ModalOverlay id="overlay" onClick={(e) => closeModal(e)}>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>
          <AiOutlineClose></AiOutlineClose>
        </ModalCloseButton>
        <Heading>Reset Your Password</Heading>

        <Form>
          <Input full type="email" placeholder="Type your Email" />
          <Button type="submit">Reset</Button>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ForgotPasswordModal;
