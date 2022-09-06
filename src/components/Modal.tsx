import React from "react";
import { Modal as DefaultModal, ModalProps } from "react-native";

export default function Modal({
  visible = false,
  transparent = false,
  children,
  close,
}: {
  visible: boolean;
  children: ModalProps["children"];
  close: () => void;
  transparent?: boolean;
}) {
  return (
    <DefaultModal
      animationType={transparent ? "none" : "slide"}
      transparent={transparent}
      visible={visible}
      onRequestClose={close}
    >
      {children}
    </DefaultModal>
  );
}
