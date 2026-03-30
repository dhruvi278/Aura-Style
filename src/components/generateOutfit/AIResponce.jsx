import { MessagesSquare } from 'lucide-react'
import React from 'react'
import { useOutfit } from '../../hooks/useOutfit'

function AIResponce() {

    const{outfit, error, loading} = useOutfit();

    const message = error
    ? error 
    : outfit
    ? `Your outfit has been curated with ${outfit.length} pieces ${outfit.length !== 1 ? 's' : ''}. Style tip:mix textures and let one piece be the statement.`
    : 'Fill in the form and hit generate - Your AI stylist is ready.';
    
    const label = error ? 'Error' : 'Style Note';
    return (
        <aside aria-label='Stylish note' className='p-4 sm:p-6 border-l-4 border-[#C5A059] bg-[#EDE9E2] rounded-lg flex flex-col gap-2'>
            <header className='flex gap-2 items-center'>
                <MessagesSquare size={16} color="#C5A059" />
                <span className='work-sans text-[10px] sm:text-[12px] text-[#57534E] uppercase font-bold tracking-[1px]'>{label}</span>
            </header>
            <p className='work-sans text-[13px] sm:text-[15px] md:text-[16px] text-[#57534E] italic'>"{loading? 'Your AI stylist is working on it...': message}"</p>
        </aside>
    )
}

export default AIResponce
