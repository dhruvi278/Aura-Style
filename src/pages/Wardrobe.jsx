
import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
import TitleText from '../components/ui/TitleText'
import TotalItems from '../components/wardrobe/TotalItems'
import Button from '../components/ui/Button'
import { Car, CirclePlus } from 'lucide-react'
import FilterTabs from "../components/wardrobe/FilterTab";
import CardGrid from '../components/ui/CardGrid'
import Card from '../components/ui/Card'
import Pagination from '../components/ui/Pagination'
import Modal from '../components/ui/Modal'
import UploadOption from '../components/ui/UploadOption'
import SearchOutfit from '../components/History/Filter/SearchOutfit'
import { useSearchParams } from 'react-router-dom'
import { useWardrobe } from '../hooks/useWardrobe'


function Wardrobe() {

    const {
        items,
        total,
        loading,
        uploading,
        deleting,
        error,
        activeCategory,
        fetch,
        upload, 
        delete: deleteItem,
        setCategory
    } = useWardrobe();

    useEffect(() => {
        console.log('Fetch called')
        fetch();
    }, [])


    const [uploadOpen, setUploadOpen] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const activeFilter = searchParams.get('filter') || 'all';

    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteItemSelected, setDeleteItemSelected] = useState(null);

    const handleFilterChange = (filter) => {
        setSearchParams({ filter });
        setCategory(filter);
        console.log(filter)
    }
    // useEffect(() => {
    //     const filterFromURL = searchParams.get('filter') || 'all';
    //     setCategory(filterFromURL); // update Redux activeCategory
    //     console.log('fetch call');
    //     fetch(); // fetch items (optional if already fetched)
    // }, [searchParams]);

    const handleUpload = (file) =>{
        upload({ file });
    };
    
    const handleDelete = (item) =>{
        console.log(item);
        setDeleteItemSelected(item)
        setDeleteOpen(true)
        console.log(deleteItemSelected)

    }


    return (
        <div className='page-enter flex flex-col gap-5 lg:justify-center lg:items-center lg:w-full pt-12 bg-[#F7F4EF] min-h-[calc(100dvh-80px)]' >
            {/* <Navbar /> */}
            <div className='flex flex-col gap-10 px-12 lg:max-w-6xl'>
                <section aria-label='My worddrobe' className='flex flex-col md:flex-row md:justify-between md:items-end gap-4'>
                    {/* Headings */}
                    <div>
                        <TitleText title='My Wardrobe' description='' />
                        <TotalItems items={total} items_name={`wardrobe items`} />
                    </div>
                    <Button onClick={() => setUploadOpen(true)} className="w-full md:w-auto flex items-center justify-center gap-2 ">
                        <CirclePlus size={20} color='#ffff' aria-hidden='true' className='shrink-0' />
                        <span className='playfair uppercase text-[14px] sm:text-[18px] tracking-[2px] font-semibold leading-none'>Upload items</span>
                    </Button>
                </section>


                {/* FilterBar */}
                <div className='sticky top-18 z-40 bg-[#F7F4EF]  backdrop-blur-md py-3 w-full border-b border-[#E7E1CF]/40 flex flex-col lg:gap-0 lg:flex-row  lg:items-end justify-between '>
                    <FilterTabs active={activeFilter} onFilterChange={handleFilterChange} />
                    <SearchOutfit />
                </div>

                {loading ? (
                    <p className="text-center">Loading wardrobe...</p>
                ) : items.length === 0 ? (
                    <p className="text-center">No items found</p>
                ) : (
                    <CardGrid uploadModal={() => setUploadOpen(true)}>
                            
                                {Array.isArray(items) && items.map((item) => (
                                    <Card
                                        key={item.c_id} // use c_id
                                        src={item.image_url} // use image_url
                                        cardTitle={item.short_description} // use short_description
                                        cardText={item.category} // category
                                        cardPage="wardrobe"
                                        onDelete={() => handleDelete(item)} // pass c_id for delete
                                        selected={deleting == item.c_id}
                                        // selectedOutfit={true}
                                    />
                                ))}
                    </CardGrid>
                )}
                
                
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
                <UploadOption onClose={() => setUploadOpen(false)} onUpload={handleUpload} uploading={uploading} cameraFacing={`environment`} />
            </Modal>
            
            <Modal
                isOpen={deleteOpen}
                onClose={() => setDeleteOpen(false)}
                title="Delete Item"
                description={`Are you sure you want to delete "${deleteItemSelected?.short_description}" from wardrobe collection?`}
            >
                <div className="flex flex-col gap-3">
                    <div className="w-32 h-40 sm:w-40 sm:h-52 overflow-hidden rounded-xl border border-[#E7E1CF]">
                        <img
                            src={deleteItemSelected?.image_url}
                            alt={deleteItemSelected?.short_description}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                    <div className="flex justify-between gap-3 w-full">
                        <Button
                            onClick={() => setDeleteOpen(false)}
                            variant="ghost"
                        >
                            Cancel
                        </Button>

                        <Button
                            onClick={() => {
                                if (deleteItemSelected) deleteItem(deleteItemSelected.c_id);
                                setDeleteOpen(false);
                            }}
                            variant="primary"
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Wardrobe














// import React, { useState } from 'react'
// // import Navbar from '../components/Navbar'
// import TitleText from '../components/ui/TitleText'
// import TotalItems from '../components/wardrobe/TotalItems'
// import Button from '../components/ui/Button'
// import { CirclePlus } from 'lucide-react'
// import FilterTabs from "../components/wardrobe/FilterTab";
// import CardGrid from '../components/ui/CardGrid'
// import Card from '../components/ui/Card'
// import Pagination from '../components/ui/Pagination'
// import Modal from '../components/ui/Modal'
// import UploadOption from '../components/ui/UploadOption'
// import SearchOutfit from '../components/History/Filter/SearchOutfit'
// import { useSearchParams } from 'react-router-dom'




// function Wardrobe() {


//     const [uploadOpen, setUploadOpen] = useState(false);
//     const [searchParams, setSearchParams] = useSearchParams();
//     const activeFilter = searchParams.get('filter') || 'all';
//     const handleFilterChange = (filter) =>{
//         setSearchParams({filter:filter.toLowerCase()});
//         console.log(filter)
        
//     }

//     return (
//         <div className='page-enter flex flex-col gap-5 lg:justify-center lg:items-center lg:w-full pt-12 bg-[#F7F4EF]' >
//             {/* <Navbar /> */}
//             <div className='flex flex-col gap-10 px-12 lg:max-w-6xl'>
//                 <section aria-label='My worddrobe' className='flex flex-col md:flex-row md:justify-between md:items-end gap-4'>
//                     {/* Headings */}
//                     <div>
//                         <TitleText title='My Wardrobe' description='' />
//                         <TotalItems items={10} items_name={`wardrobe items`} />
//                     </div>
//                     <Button onClick={() => setUploadOpen(true)} className="w-full md:w-auto flex items-center justify-center gap-2 ">
//                         <CirclePlus size={20} color='#ffff' aria-hidden='true' className='shrink-0' />
//                         <span className='playfair uppercase text-[14px] sm:text-[18px] tracking-[2px] font-semibold leading-none'>Upload items</span>
//                     </Button>
//                 </section>
                

//                 {/* FilterBar */}
//                 <div className='sticky top-18 z-40 bg-[#F7F4EF]  backdrop-blur-md py-3 w-full border-b border-[#E7E1CF]/40 flex flex-col lg:gap-0 lg:flex-row  lg:items-end justify-between '>
//                     <FilterTabs active={activeFilter} onFilterChange={handleFilterChange} />
//                     <SearchOutfit />
//                 </div>

//                 {/* Cards */}
//                 <CardGrid uploadModal={() => setUploadOpen(true)}>
//                     <Card src="https://images.pexels.com/photos/6333499/pexels-photo-6333499.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
//                     <Card src="https://images.pexels.com/photos/5560028/pexels-photo-5560028.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
//                     <Card src="https://images.pexels.com/photos/2002717/pexels-photo-2002717.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
//                     <Card src="https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
//                     <Card src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
//                     <Card src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
//                     <Card src="image.png" cardTitle="cutton Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
//                     <Card src="image.png" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />
//                     <Card src="image.png" cardTitle="Silk Creame Blouse" cardText="Top" cardPage={`wardrobe`} />

//                 </CardGrid>
//                 <div>
//                     <Pagination totalPages={30} currentPage={15} />
//                 </div>
//             </div>
//             <Modal
//                 isOpen={uploadOpen}
//                 onClose={() => setUploadOpen(false)}
//                 title='Add to Your Wardrobe'
//                 description='Upload a piece and let AI identify the details for you'
//                 size='md'
//             >
//                 <UploadOption onClose={() => setUploadOpen(false)} onUpload={(e) => console.log(e.target)} cameraFacing={`environment`} />
//             </Modal>
//         </div>
//     )
// }

// export default Wardrobe
