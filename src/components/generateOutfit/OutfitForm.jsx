import React from 'react'
import CustomSelect from './CustomSelect'
import Button from '../Button'
import { MessagesSquare, Sparkles } from 'lucide-react'



function OutfitForm() {
    return (
        <div className='flex flex-col gap-8 mr-10 w-[80%]'>

            <div className='rounded-3xl bg-[#FDFAF6] p-8 flex flex-col gap-4 border border-[#E7E5E4]'>
                <p className='text-[#C5A059] work-sans font-bold text-[12px] uppercase'>Request Details</p>
                <CustomSelect label={`Occassion*`} placeholder='Select an occassion' />
                <label className='flex flex-col gap-2' htmlFor="description">
                    <p className='work-sans uppercase text-[14px] text-[#A8A29E] tracking-[2px]'>describe your event</p>
                    <textarea
                        className=' bg-[#F5F0E8] w-full work-sans resize-none scrollbar-hide 
                                    text-[13px] sm:text-[14px]
                                    p-3
                                    rounded-[14px]
                                    border border-[#E7E1CF]
                                    placeholder:text-[#1A1A18]/30 placeholder:italic placeholder:playfair
                                    focus:outline-none focus:border-[#C9A96E]
                                    transition-all duration-200'
                        name="description"
                        id="description"
                        placeholder='E.g. A sophisticated sunset gathering at a coastal villa...'
                        rows={4}
                    />
                </label>
                <Button className="flex gap-2 justify-center items-center mb-8">
                    <Sparkles color="#C5A059" fill='#C5A059' />
                    <span className='text-[14px] work-sans uppercase font-semibold py-4 tracking-[2px]'>Generate My Outfit</span>
                </Button>
            </div>

            <div className='p-6 border-l-4 border-[#C5A059] bg-[#EDE9E2] rounded-lg flex flex-col gap-2'>
                <div className='flex gap-2 items-center'>
                    <MessagesSquare size={16} color="#C5A059" />
                    <span className='work-sans text-[12px] text-[#57534E] uppercase font-bold tracking-[1px]'>Message or Error</span>
                </div>
                <div className='work-sans text-[16px]'>"Error message ."</div>
            </div>

        </div>
    )
}

export default OutfitForm
