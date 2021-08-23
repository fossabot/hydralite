import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useThemeContext } from "~/hoc/theme/ThemeContext";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
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
                rounded-lg inline-flex p-6 my-8 overflow-hidden align-middle transition-all transform text-left
                ${height || "h-auto"}
                ${width || "w-[50vw]"}
                ${theme === "dark" && "bg-dark-bgMuted1 text-dark-fg"}
              `}
            >
              <div className="w-full">{children}</div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
