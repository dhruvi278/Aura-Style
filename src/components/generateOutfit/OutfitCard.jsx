import React from 'react'
import GenerateOutfitImg from '../../assets/GenerateOutfit.png'
import Shirt from '../../assets/Shirt.png'
import Pant from '../../assets/Pant.png'
import Shoes from '../../assets/Shoes.png'
import Button from '../ui/Button'

function OutfitCard() {

    const outfitItems = [Shirt, Pant, Shoes];
    return (
        <article aria-label='Generated Outfit' className='flex flex-col gap-4 sm:gap-6 md:gap-8 ml-0 lg:ml-10'>
            <figure className='bg-[#FDFAF6] border border-[#E7E5E4] rounded-3xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10'>
                <img src={GenerateOutfitImg} alt="Generated Outfit" className='w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] object-cover object-top over' />
            </figure>

            <section aria-label='Outfit actions' className='flex flex-col xl:flex-row justify-between items-start sm:items-center gap-4  '>
                <ul className='flex gap-2 sm:gap-3 md:gap-4 w-full xl:w-auto'>
                    {outfitItems.map((items, i) =>
                        <li key={i}>
                            <figure className='p-1 sm:p-2'>
                                <img src={items} alt={items} className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-cover rounded-lg' />
                            </figure>
                        </li>
                    )}
                </ul>
                <div className='flex gap-2 sm:gap-3 w-full xl:w-auto'>
                    <Button variant='bordered' className="border-[#E7E5E4]"><span className='work-sans text-[10px] sm:text-[12px] uppercase font-semibold tracking-[1px] sm:tracking-[2px] whitespace-nowrap'>Regenerate</span></Button>
                    <Button className="border-[#E7E5E4]"><span className='work-sans text-[10px] sm:text-[12px] uppercase font-semibold tracking-[1px] sm:tracking-[2px] whitespace-nowrap'>Select look</span></Button>
                </div>
            </section>
        </article>
    )
}

export default OutfitCard
