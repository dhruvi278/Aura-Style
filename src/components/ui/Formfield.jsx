import React from "react";

const Formfield = ({
  name,
  type = "text",
  error,
  label,
  children,
  placeholder,
  className,
  register,
  variant = "primary",
  onKeyDown,
  onPaste,
  disabled = false,
  formVariant = "primary",
  showError = "true",
  defaultValue,
}) => {
  const style = {
    primary: "text-gray-600",
    secondary: "text-[#C5A059]",
  };
  const inputStyle = {
    primary: `
    border border-gray-300 rounded-full
    focus:border-[#EEBD2B] focus:ring-2 focus:ring-[#EEBD2B]/30`,

    underline: `
    border-0 border-b border-gray-300 rounded-none
    focus:border-b-[#EEBD2B] focus:ring-0
    bg-transparent px-0`,
  };

  const disabledStyle = {
    primary: "opacity-50 cursor-not-allowed bg-gray-100",
    underline: "cursor-not-allowed border-b-gray-200 text-gray-400",
  };

  return (
    <>
      {children || (
        <div className="flex flex-col gap-2">
          {/* Label */}
          <label
            className={`${style[variant]} jost uppercase text-sm  font-medium ${disabled ? "opacity-50" : ""}`}
          >
            {label}
            {disabled && (
              <span className="ml-2 normal-case tracking-normal font-normal text-gray-400 text-xs">
                (cannot be changed)
              </span>
            )}
          </label>

          {/* Input */}
          <input
            name={name}
            defaultValue={defaultValue}
            {...(register ? register(name) : {})}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onPaste={onPaste}
            className={`jost w-full px-5 py-3 
            bg-[#FDFAF6] outline-none 
             ${inputStyle[formVariant]}
             ${disabled ? disabledStyle[formVariant] : ""}
            placeholder:text-gray-400 transition ${className}`}
          />

          {/* Error */}

          {showError && (
            <p
              className={`text-red-500 text-xs min-h-4 mb-2 transition-opacity duration-200 ${error ? "opacity-100" : "opacity-0"}`}
            >
              {error || " "}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Formfield;
