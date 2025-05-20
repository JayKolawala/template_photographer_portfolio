import { useEffect } from "react";

const Modal = ({ isOpen, onClose, image, caption }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
          onClick={onClose}
        >
          ×
        </button>

        <div className="bg-transparent p-4 rounded-lg">
          <img
            src={image}
            alt={caption}
            className="w-full max-h-[80vh] object-contain"
          />
          <p className="text-white text-center mt-4 text-lg">{caption}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
