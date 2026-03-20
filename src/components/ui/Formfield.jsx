import React from 'react'

const Formfield = ({
  name,
  type = "text",
  error,
  label,
  children,
  placeholder,
  className,
  register,
  variant="primary",
  onKeyDown,
  onPaste,
}) => {
  const style ={
    primary:"text-gray-600",
    secondary: "text-[#C5A059]"
  }
  return (
    <>
      {children || (
        <div className="flex flex-col gap-2">

          {/* Label */}
          <label className={`${style[variant]} jost uppercase text-sm  font-medium`}>
            {label}
          </label>

          {/* Input */}
          <input
            name={name}
            {...(register ? register(name) : {})}
            type={type}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            onPaste={onPaste}
            className={`jost w-full px-5 py-3 rounded-full border border-gray-300 
            bg-[#FDFAF6] outline-none 
            focus:border-[#EEBD2B] focus:ring-2 focus:ring-[#EEBD2B]/30
            placeholder:text-gray-400 transition ${className}`}
          />

          {/* Error */}
          <p className={`text-red-500 text-xs min-h-4 mb-2 transition-opacity duration-200 ${error ? "opacity-100" : "opacity-0"}`}>{error || " "}</p>
        </div>
      )}
    </>
  )
}

export default Formfield
