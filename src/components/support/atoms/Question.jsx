import { ChevronDown, ChevronUp, CircleQuestionMark, MessageSquareQuote } from 'lucide-react'
import React, { useState } from 'react'

function Question({ question, answer }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(prev => !prev);
  }

  return (
    <article className='flex flex-col gap-2 transition-all duration-300'>

      <button
        onClick={handleClick}
        className='flex w-full justify-between items-center p-4  md:p-6 bg-[#FDFAF6] relative overflow-hidden rounded-2xl sm:rounded-full border-l-4 border-[#F2CC0D]'>


        <div className='flex gap-4 items-center'>
          <CircleQuestionMark color="#F2CC0D" strokeWidth={3} />
          <h3 className='work-sans text-left font-medium text-[16px] sm:text-[18px] md:text-[19px] select-none'>{question}?</h3>
        </div>
        {open ? <ChevronUp color="#94A3B8" /> : <ChevronDown color="#94A3B8" />}
      </button>


      <div className={`accordion-content ${open ? 'open' : ''}`}>
        <div className='accordion-content-inner'>
          <div className={`mx-2 sm:mx-4 md:mx-6 p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-[#FDFAF6] work-sans italic flex flex-col gap-2 border-l-2 border-[#F2CC0D]/50 transition-all duration-300 z`}>
            <MessageSquareQuote size={24} color="#F2CC0D" strokeWidth={3} />
            <p className='text-sm sm:text-base leading-relaxed'>{answer}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Question
