function Button({ children, type, onClick, variant = "primary", className }) {

    const styles = {
        primary: "bg-black text-white",
        secondray: "bg-[#ECB613] text-black",
        whiten: " text-black",
        bordered: "border border-[#E7E5E4] text-black"
    }
    return (
        <button type={type} onClick={onClick}
            className={`${styles[variant]}  rounded-full ${variant === "whiten" ? `hover:underline cursor-pointer transition-colors duration-200` : `hover:cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-200`} ${className} px-4 py-2 md:px-6 md:py-3`}>
            {children} </ button>
    )
}
export default Button;