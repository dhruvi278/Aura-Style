import React from 'react'

function ContactCard({ icon, contactType, contactInformation }) {
    return (
        <article className='flex items-start gap-4 sm:gap-5 md:gap-6'>

            <div className='w-10 h-10 sm:w-12 sm:h-12 bg-[#FFFFFF]/5 rounded-full flex items-center justify-center shrink-0'>
                {icon}
            </div>

            <div className='flex flex-col'>
                <p className='alexandria text-[#64748B] uppercase font-semibold text-[12px] sm:text-[14px] tracking-wide'>{contactType}</p>
                <p className='alexandria text-[#F1F5F9] text-[16px] sm:text-[18px] break-words'>{contactInformation}</p>
            </div>

        </article>
    )
}

export default ContactCard
