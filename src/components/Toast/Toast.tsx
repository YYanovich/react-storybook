import { useEffect, useState, useCallback } from "react";
import "./Toast.scss";

export interface ToastProps {
  type: "success" | "error" | "info";
  duration: number;
  onClose: () => void;
  message: string;
}
const icons = {
  success: "✅",
  error: "❌",
  info: "ℹ️",
};

export const Toast = ({ type, duration, onClose, message }: ToastProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const toastClassName = `toast ${type} ${isExiting ? "exiting" : ""}`;

  const handleClose = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => {
      onClose();
    }, 500);
  }, [onClose]);

  useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [duration, handleClose]);

  return (
    <div className={toastClassName}>
      <span className="toast-icons">{icons[type]}</span>
      {message}
      <button onClick={handleClose} className="toast-close-button">
        &times;
      </button>
    </div>
  );
};
