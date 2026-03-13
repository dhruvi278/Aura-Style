import React from 'react'
import TitleText from '../components/TitleText'
import OutfitForm from '../components/generateOutfit/OutfitForm'
import OutfitCard from '../components/generateOutfit/OutfitCard'

function GenerateOutfit() {
    return (
        <div className='flex flex-col gap-5 px-10 pt-12  bg-[#E7E1CF]/50'>
            <TitleText title='Style Your Movement' description='Generate a trendy outfit from your wardrobe and elevate your everyday style.' />
            <div className='grid grid-cols-2 gap-10'>
                <OutfitForm />
                <OutfitCard />
            </div>
        </div>
    )
}

export default GenerateOutfit
