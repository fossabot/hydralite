import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
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
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        className={`
        fixed inset-0 z-10 bg-opacity-90 overflow-y-auto
        ${theme === "dark" && "bg-dark-bg"}
      `}
        open={isOpen}
        onClose={closeModal}
      >
        <div className="px-4 text-center">
          {/* Closes the modal when clicked outside of */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* Centers the Modal */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          {/* Modal */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
