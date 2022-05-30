import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import { MutableRefObject, ReactNode, useEffect, useRef } from "react";

interface SidebarProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar = ({ children, isOpen, onClose }: SidebarProps) => {
  const overlayRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (overlayRef.current) {
      if (isOpen) {
        disableBodyScroll(overlayRef.current);
      } else {
        enableBodyScroll(overlayRef.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div
          ref={overlayRef}
          className="fixed inset-0 overflow-hidden h-full z-50"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div
              onClick={onClose}
              className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
            />
            <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none">
              <div className="h-full md:w-screen md:max-w-md">
                <div className="h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto">
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  );
};
