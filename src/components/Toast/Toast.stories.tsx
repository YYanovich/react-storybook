import type { Meta } from "@storybook/react";
import React, { useState } from "react";
import { Toast } from "./Toast";

const ToastManager = () => {
  const [activeToast, setActiveToast] = useState<
    "success" | "error" | "info" | null
  >(null);

  const showToast = (type: "success" | "error" | "info") => {
    setActiveToast(type);
  };

  const handleClose = () => {
    setActiveToast(null);
  };

  return (
    <div>
      <p>Click to the burron to show certain Toast:</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => showToast("success")}>Show Success</button>
        <button onClick={() => showToast("error")}>Show Error</button>
        <button onClick={() => showToast("info")}>Show Info</button>
      </div>

      <div className="toast-container">
        {activeToast && (
          <Toast
            type={activeToast}
            message={`Message type: "${activeToast}"`}
            duration={3000}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Feedback/Toast",
  render: () => <ToastManager />,
};

export default meta;

export const Default = {};
