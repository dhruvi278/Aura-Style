import React from 'react'
import TitleText from '../components/TitleText'
import OutfitForm from '../components/generateOutfit/OutfitForm'
import OutfitCard from '../components/generateOutfit/OutfitCard'
import AIResponce from '../components/generateOutfit/AIResponce'

function GenerateOutfit() {
    return (
        <main className='flex flex-col gap-5 px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-12 bg-[#E7E1CF]/50 min-h-[calc(100dvh-80px)]'>
            <TitleText title='Style Your Movement' description='Generate a trendy outfit from your wardrobe and elevate your everyday style.' />
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
                <OutfitForm />
                <OutfitCard />
                <aside className='block md:hidden mb-10 px-2.5'>
                    <AIResponce />
                </aside>
            </div>
        </main>
    )
}

export default GenerateOutfit
