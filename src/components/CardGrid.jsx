import React from 'react'
import Card from './Card'

const CardGrid = ({ children }) => {
    return (
        <div className="max-w-7xl mx-auto  py-10 grid gap-26 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {children}
            <Card type='upload'/>
        </div>
    )
}

export default CardGrid
