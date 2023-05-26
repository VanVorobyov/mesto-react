import { useEffect } from 'react';

function usePopupClose(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;
    const handleOverlay = (event) => {
      if (event.target.classList.contains('popup_opened')) {
         onClose();
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
         onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOverlay);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOverlay);
    };
  }, [isOpen, onClose]);
}
export default usePopupClose