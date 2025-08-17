import React, { useState } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export const Input = ({
  type = "text",
  clearable = false,
  ...props
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [inputValue, setInputValue] = useState(props.value || "");

  const isPassword = type === "password";

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleClear = () => {
    setInputValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type={isPassword ? (isPasswordVisible ? "text" : "password") : type}
        value={inputValue}
        onChange={handleChange}
        className="input-field"
        {...props}
      />
      {isPassword && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="input-icon eye-icon"
        >
          {isPasswordVisible ? "🙈" : "👁️"}
        </button>
      )}
      {clearable && inputValue && (
        <button
          type="button"
          onClick={handleClear}
          className="input-icon clear-icon"
        >
          x
        </button>
      )}
    </div>
  );
};
