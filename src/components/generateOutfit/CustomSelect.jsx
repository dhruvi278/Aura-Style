import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

function CustomSelect({ options = ["a", "b", "c"], label, placeholder = "Select", onChange, labelClassname }) {

    const ref = useRef()
    const [selected, setSelected] = useState(null)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handler = (e) => {
             if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown" , handler)
    }, [])

    const handleSelected = (option) => {
        setSelected(option)
        setOpen(false)
        if (onChange) onChange(option)
    }

    return (
        <div ref={ref} className='relative flex flex-col gap-2 '>
            <p className={labelClassname || `text-[14px] font-semibold work-sans tracking-[2px] text-[#A8A29E] uppercase`}>{label}</p>
            <button
                onClick={() => setOpen(prev => !prev)}
                className='flex justify-between items-center hover:cursor-pointer p-2 rounded-xl border border-t-0 border-l-0 border-r-0 border-b-[#E7E5E4] transition-all duration-300 hover:border-[#C9A96E]'>
                <div className='playfair-display text-[#1D1C1B] text-[18px] font-medium italic'>{selected || placeholder}</div>
                {open ? <ChevronUp color="#6B7280" /> : <ChevronDown color="#6B7280" />}
            </button>
            {open && (
                <ul
                    className='absolute top-[calc(100%+6px)] left-0 right-0 px-2 bg-[#FDFAF6] border border-[#E7E1CF] rounded-xl overflow-hidden z-50 py-2 flex flex-col gap-2' >
                    {options.map((option, i) =>
                        <li key={i}
                            onClick={() => handleSelected(option)}
                            className={`
                                rounded-xl
                                px-5 py-3 playfair italic
                                text-base cursor-pointer
                                transition-all duration-150
                                ${selected === option
                                    ? "bg-[#F5ECD9] text-[#1A1A18]"
                                    : "text-[#1A1A18]/70 hover:bg-[#F5ECD9] hover:text-[#A8895E]"
                                }
                            `}
                        >
                            {option}
                        </li>
                    )}
                </ul>
            )}
        </div>
    )
}

export default CustomSelect
