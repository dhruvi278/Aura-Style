import React from 'react'
import Card from './Card'

const CardGrid = ({ children }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-25 w-full mx-auto">
            {children}
            <Card type='upload' />
        </div>
    )
}

export default CardGrid
