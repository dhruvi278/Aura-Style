import React from 'react'

function TitleText({
    title = "AuraStyle Ai",
    description = "Here for your daily fashions",
    login_signup = false,
}) {
    return (
        <header className='flex gap-6 flex-col'>
            <h1 className={`playfair-display ${login_signup ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-3xl md:text-5xl lg:text-6xl'} `}>{title}</h1>
            <p className='work-sans text-sm sm:text-base md:text-lg text-slate-500'>{description}</p>
        </header>
    )
}

export default TitleText;
