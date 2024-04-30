import { useOutside } from "@/shared/hooks";

export interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
  children: React.ReactNode;
}

export const Modal = ({ onClose, isOpen, children }: ModalProps) => {
  const ref = useOutside(() => {
    onClose();

    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "unset";
    }
  });

  return (
    <>
      {isOpen ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                ref={ref}
                className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full px-4"
              >
                {/*body*/}
                {children}
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-opacity-70  bg-black w-screen h-screen"></div>
        </div>
      ) : null}
    </>
  );
};
