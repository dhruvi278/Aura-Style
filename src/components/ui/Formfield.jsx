import React from 'react'

const Formfield = ({
  name,
  value,
  type = "text",
  onChange,
  error,
  label,
  children,
  props,
  placeholder,
  className,
  variant="primary"
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
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
            className={`jost w-full px-5 py-3 rounded-full border border-gray-300 
            bg-[#FDFAF6] outline-none 
            focus:border-[#EEBD2B] focus:ring-2 focus:ring-[#EEBD2B]/30
            placeholder:text-gray-400 transition ${className}`}
          />

          {/* Error */}
          <p className="text-red-500 text-xs min-h-4">{error}</p>
        </div>
      )}
    </>
  )
}

export default Formfield
