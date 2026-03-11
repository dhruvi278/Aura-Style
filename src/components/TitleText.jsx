import React from 'react'

function TitleText({
    title = "AuraStyle Ai",
    description = "Here for your daily fashions"
}) {
    return (
        <div className='flex gap-6 flex-col'>
            <h1 className='playfair-display text-4xl md:text-5xl lg:text-6xl'>{title}</h1>
            <h4 className='work-sans text-lg text-slate-500'>{description}</h4>
        </div>
    )
}

export default TitleText
