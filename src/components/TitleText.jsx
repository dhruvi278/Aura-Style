import React from 'react'

function TitleText({
    title = "AuraStyle Ai",
    description = "Here for your daily fashions"
}) {
    return (
        <header className='flex gap-6 flex-col'>
            <h1 className='playfair-display text-3xl md:text-5xl lg:text-6xl'>{title}</h1>
            <p className='work-sans text-sm sm:text-base md:text-lg text-slate-500'>{description}</p>
        </header>
    )
}

export default TitleText
