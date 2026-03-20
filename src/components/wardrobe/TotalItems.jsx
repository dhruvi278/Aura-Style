import React from 'react'

function TotalItems({items, items_name}) {

    return (
        <article className='flex items-center gap-2 bg-[#E7E1CF]/40 w-fit border border-[#E7E1Cf] rounded-full px-4 py-2 '>
            <span className='poppins  uppercase text-[12px] sm:text-[14px] tracking-[2px] font-medium'>
                {items_name}
            </span>
            <div className='w-[1px] h-3 bg-[#d10c0c]' aria-hidden='true' />
            <strong className='text-[15px] sm:text-[20px] font-medium text-[#b8821e]'>{items}</strong>
        </article>
    )
}

export default TotalItems
