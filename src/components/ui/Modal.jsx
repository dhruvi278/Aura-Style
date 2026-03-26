import { createPortal } from "react-dom";
import { useEffect } from "react";
import { X } from "lucide-react";

function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  showClose = true,
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-[95vw]",
  };

  return createPortal(
    // Backdrop
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-40 flex items-center justify-center overscroll-none overflow-hidden p-4 h-screen w-screen"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
        className="absolute left-0 right-0 bottom-0 top-0 bg-[#1C1C1A]/40 backdrop-blur-sm transition-opacity duration-300"
      />

      <article
        onClick={(e) => e.stopPropagation()}
        className={`
                relative z-10
                w-full ${sizes[size]}
                bg-[#FDFAF6]
                rounded-[24px] sm:rounded-[32px]
                shadow-[0_24px_64px_rgba(28,28,26,0.18)]
                border border-[#E7E1CF]
                flex flex-col
                max-h-[90vh]
                transition-all duration-300
                animate-fade-up
            `}
      >
        {(title || showClose) && (
          <header className="flex items-start justify-between px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
            <div className="flex flex-col gap-1">
              {title && (
                <h2 className="playfair italic text-xl sm:text-2xl text-[#1A1A18] font-medium">
                  {title}
                </h2>
              )}
              {description && (
                <p className="work-sans text-[12px] sm:text-[13px] text-[#6B6460] tracking-[0.02em]">
                  {description}
                </p>
              )}
            </div>

            {showClose && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="
                                    flex-shrink-0 ml-4
                                    w-8 h-8 sm:w-9 sm:h-9
                                    rounded-full
                                    bg-[#F0EDE6]
                                    border border-[#E7E1CF]
                                    flex items-center justify-center
                                    text-[#6B6460]
                                    hover:bg-[#1C1C1A] hover:text-[#FDFAF6] hover:border-[#1C1C1A]
                                    transition-all duration-200
                                "
              >
                <X size={14} aria-hidden="true" />
              </button>
            )}
          </header>
        )}

        <div aria-hidden="true" className="mx-6 sm:mx-8 h-[1px] bg-[#E7E1CF]" />

        <section className="px-6 sm:px-8 py-6 overflow-y-auto scrollbar-hide flex-1">
          {children}
        </section>
      </article>
    </div>,
    document.body,
  );
}

export default Modal;
