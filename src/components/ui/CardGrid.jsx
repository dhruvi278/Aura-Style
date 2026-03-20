import React from 'react'
import Card from './Card'

const CardGrid = ({ children, showUpload = "true", uploadModal }) => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7 lg:gap-9 w-full mx-auto">
            {children}
            {showUpload && <Card type='upload' uploadModal={uploadModal}/>}
        </div>
    )
}

export default CardGrid
