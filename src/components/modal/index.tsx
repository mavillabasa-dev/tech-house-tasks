import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  toggle: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md relative w-11/12 max-w-[380px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
