import React from "react";
import { Dialog } from "@headlessui/react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (boolean) => void;
  width?: string;
  height?: string;
  children: any;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  width,
  height,
  children,
}) => {
  const { theme } = useThemeContext();

  const closeModal = () => setIsOpen(false);

  return (
    <Dialog
      as="div"
      className={`
        fixed inset-0 z-10 bg-opacity-90 overflow-y-auto
        ${theme === "dark" && "bg-dark-bg"}
      `}
      open={isOpen}
      onClose={closeModal}
    >
      <div className="px-4 text-center">
        {/* Closes the modal when clicked outside of */}
        <Dialog.Overlay className="fixed inset-0" />

        {/* Centers the Modal */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>

        {/* Modal */}
        <div
          className={`
            rounded-lg inline-flex p-6 my-8 overflow-hidden text-left align-middle transition-all transform 
            ${height || "h-[50vh]"}
            ${width || "w-[50vw]"}
            ${theme === "dark" && "bg-dark-fg"}
          `}
        >
          {children}
        </div>
      </div>
    </Dialog>
  );
};
