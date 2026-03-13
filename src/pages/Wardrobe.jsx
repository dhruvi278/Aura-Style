import React from 'react'
import Navbar from '../components/Navbar'
import TitleText from '../components/TitleText'
import TotalItems from '../components/wardrobe/TotalItems'
import Button from '../components/Button'
import { CirclePlus } from 'lucide-react'
import FilterTabs from "../components/wardrobe/FilterTab";
import CardGrid from '../components/CardGrid'
import Card from '../components/Card'




function Wardrobe() {

    return (
        <div className='flex flex-col gap-5' >
            <Navbar />
            <div className='flex flex-col gap-10 px-10'>
                <div className='flex justify-between items-end-safe'>
                    {/* Headings */}
                    <div>
                        <TitleText title='My Wardrobe' description='' />
                        <TotalItems />
                    </div>
                    <Button><div className='flex gap-2 items-center'><CirclePlus color="#ffff" /><span className='newsreader uppercase'>Upload items</span></div></Button>
                </div>

                {/* FilterBar */}
                <div className='sticky top-18  z-40 backdrop-blur-sm py-3 w-full '>
                    <FilterTabs onFilterChange={(filter) => console.log(filter)} />
                </div>

                {/* Cards */}
                <CardGrid>
                    <Card src="https://images.pexels.com/photos/6333499/pexels-photo-6333499.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" />
                    <Card src="https://images.pexels.com/photos/5560028/pexels-photo-5560028.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" />
                    <Card src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" />
                    <Card src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" />
                    <Card src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" />
                    <Card src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" />
                    <Card src="image.png" cardTitle="Silk Creame Blouse" cardText="Top" />
                    <Card src="image.png" cardTitle="Silk Creame Blouse" cardText="Top" />
                    <Card src="image.png" cardTitle="Silk Creame Blouse" cardText="Top" />
                    
                </CardGrid>
            </div>
        </div>
    )
}

export default Wardrobe
