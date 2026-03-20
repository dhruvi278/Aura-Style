import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
import TitleText from '../components/ui/TitleText'
import TotalItems from '../components/wardrobe/TotalItems'
import Button from '../components/ui/Button'
import { CirclePlus } from 'lucide-react'
import FilterTabs from "../components/wardrobe/FilterTab";
import CardGrid from '../components/ui/CardGrid'
import Card from '../components/ui/Card'
import Pagination from '../components/ui/Pagination'
import Modal from '../components/ui/Modal'
import UploadOption from '../components/ui/UploadOption'




function Wardrobe() {


    const [uploadOpen, setUploadOpen] = useState(false)


    return (
        <div className='page-enter flex flex-col gap-5 lg:justify-center lg:items-center lg:w-full pt-12 bg-[#F7F4EF]' >
            {/* <Navbar /> */}
            <div className='flex flex-col gap-10 px-12 lg:max-w-6xl'>
                <section aria-label='My worddrobe' className='flex flex-col md:flex-row md:justify-between md:items-end gap-4'>
                    {/* Headings */}
                    <div>
                        <TitleText title='My Wardrobe' description='' />
                        <TotalItems items={10} items_name={`wardrobe items`} />
                    </div>
                    <Button onClick={() => setUploadOpen(true)} className="w-full md:w-auto flex items-center justify-center gap-2 ">
                        <CirclePlus size={20} color='#ffff' aria-hidden='true' className='shrink-0' />
                        <span className='playfair uppercase text-[14px] sm:text-[18px] tracking-[2px] font-semibold leading-none'>Upload items</span>
                    </Button>
                </section>

                {/* FilterBar */}
                <div className='sticky top-18 z-40 bg-[#F7F4EF]  backdrop-blur-md py-3 w-full border-b border-[#E7E1CF]/40 '>
                    <FilterTabs onFilterChange={(filter) => console.log(filter)} />
                </div>


                {/* Cards */}
                <CardGrid>
                    <Card src="https://images.pexels.com/photos/6333499/pexels-photo-6333499.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
                    <Card src="https://images.pexels.com/photos/5560028/pexels-photo-5560028.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
                    <Card src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
                    <Card src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
                    <Card src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
                    <Card src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
                    <Card src="image.png" cardTitle="cotton Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
                    <Card src="image.png" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
                    <Card src="image.png" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />

                </CardGrid>
                <div>
                    <Pagination totalPages={30} currentPage={15} />
                </div>
            </div>
            <Modal
                isOpen={uploadOpen}
                onClose={() => setUploadOpen(false)}
                title='Add to Your Wardrobe'
                description='Upload a piece and let AI identify the details for you'
                size='md'
            >
                <UploadOption onClose={() => setUploadOpen(false)} onUpload={(e) => console.log(e.target)} cameraFacing={`environment`} />
            </Modal>
        </div>
    )
}

export default Wardrobe
