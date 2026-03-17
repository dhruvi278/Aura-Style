import React from 'react'
import logo from '../../assets/logo.svg'

const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <img src={logo} alt="AuraStyle logo" className="w-4 md:w-6 lg:w-8" />

            <h1 className="playfair-display text-xl md:text-2xl lg:text-3xl font-semibold">
                Aura<span className="playfair italic font-light">Style</span>
            </h1>
        </div>
    )
}

export default Logo