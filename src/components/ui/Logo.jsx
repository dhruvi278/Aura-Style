import React from 'react'
import logo from '/fevicon.png'

const Logo = () => {
    return (
        <div className="flex items-center gap-2 select-none group">
            <img src={logo} alt="AuraStyle logo" className="w-6 md:w-8 lg:w-10 shrink-0 transition-transform duration-500 group-hover:-scale-x-100" />

            <h1 className="playfair-display text-xl md:text-2xl lg:text-3xl font-semibold transition-colors duration-300">
                Aura<span className="playfair italic font-light transition-colors duration-300 group-hover:text-[#C9A96E]">Style</span>
            </h1>
        </div>
    )
}

export default Logo