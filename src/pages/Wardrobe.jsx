import React from 'react'
// import Navbar from '../components/Navbar'
import TitleText from '../components/ui/TitleText'
import TotalItems from '../components/wardrobe/TotalItems'
import Button from '../components/ui/Button'
import { CirclePlus } from 'lucide-react'
import FilterTabs from "../components/wardrobe/FilterTab";
import CardGrid from '../components/ui/CardGrid'
import Card from '../components/ui/Card'
import Pagination from '../components/ui/Pagination'




function Wardrobe() {

    return (
        <div className='flex flex-col gap-5 pt-12 bg-[#E7E1CF]/40' >
            {/* <Navbar /> */}
            <div className='flex flex-col gap-10 px-12'>
                <section aria-label='My worddrobe' className='flex flex-col md:flex-row md:justify-between md:items-end gap-4'>
                    {/* Headings */}
                    <div>
                        <TitleText title='My Wardrobe' description='' />
                        <TotalItems />
                    </div>
                    <Button className="w-full md:w-auto flex gap-2 justify-center">
                        <CirclePlus color="#ffff" />
                        <span className='newsreader uppercase text-md sm:text-lg'>Upload items</span>
                    </Button>
                </section>

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
                <div>
                    <Pagination totalPages={30} currentPage={15} />
                </div>
            </div>
        </div>
    )
}

export default Wardrobe
