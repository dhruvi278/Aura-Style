function Button({ children,type, onClick, variant = "primary", className }) {

    const styles = {
        primary: "bg-black text-white",
        secondray: "bg-[#ECB613] text-black",
        whiten: "bg-white text-black border"
    }
    return (
        <button type={type} onClick={onClick}
            className={`${styles[variant]} px-4 py-2 md:px-6 md:py-3 rounded-full hover:cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-200 ${className}`}>
            {children} </ button>
    )
}
export default Button;