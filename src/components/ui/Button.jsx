function Button({
  children,
  type,
  onClick,
  variant = "primary",
  className,
  disabled = false,
}) {
  const styles = {
    primary: "bg-black text-white",
    secondray: "bg-[#ECB613] text-black",
    whiten: "bg-white text-black border",
    transparent: "bg-none",
    upload: "bg-[#EDE9E2] text-black",
    bordered: "border border-[#E7E5E4] text-black",
    ghost:
      "bg-[#EDE9E2] text-[#1A1A18] border border-[#DDD8D0] hover:border-[#C9A96E] hover:text-[#A8895E]",
  };


  return (
    <button type={type} onClick={onClick}
      disabled={disabled}
      className={`${styles[variant]}  rounded-full ${variant === "whiten" ? `hover:underline cursor-pointer transition-colors duration-200` : `hover:cursor-pointer hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200`} px-4 py-2 md:px-6 md:py-3 ${className} disabled:bg-gray-500 disabled:cursor-not-allowed disabled:hover:scale-100`}>
      {children} </ button>
  )
}
export default Button;
