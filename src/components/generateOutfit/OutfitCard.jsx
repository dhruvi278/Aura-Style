import React from 'react'
import GenerateOutfitImg from '../../assets/GenerateOutfit.png'
import Shirt from '../../assets/Shirt.png'
import Pant from '../../assets/Pant.png'
import Shoes from '../../assets/Shoes.png'
import Button from '../Button'

function OutfitCard() {

    const outfitItems = [Shirt, Pant, Shoes];
    return (
        <div className='flex flex-col gap-8 ml-10'>
            <figure className='bg-[#FDFAF6] border border-[#E7E5E4] rounded-3xl px-8 py-10'>
                <img src={GenerateOutfitImg} alt="Generated Outfit" className='h-125 overflow-hidden w-full object-cover rounded-2xl' />
            </figure>

            <section className='flex justify-between items-center px-8'>
                <div className='flex gap-4'>
                    {outfitItems.map((items, i) =>
                        <figure key={i} className='p-2'>
                            <img src={items} alt={items} />
                        </figure>
                    )}
                </div>
                <div className='flex gap-3'>
                    <Button variant='bordered' className="border-[#E7E5E4]"><span className='work-sans text-[12px] uppercase font-semibold tracking-[2px]'>Regenerate</span></Button>
                    <Button className="border-[#E7E5E4]"><span className='work-sans text-[12px] uppercase font-semibold tracking-[2px]'>Select look</span></Button>
                </div>
            </section>
        </div>
    )
}

export default OutfitCard
