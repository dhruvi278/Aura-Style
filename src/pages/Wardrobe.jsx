import React, { useEffect, useState } from 'react'
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
import SearchOutfit from '../components/History/Filter/SearchOutfit'
import { useSearchParams } from 'react-router-dom'
import { useWardrobe } from '../hooks/useWardrobe'
import { toast } from 'sonner'

function Wardrobe() {

    const {
        items, total, loading, uploading,
        deleting, error, activeCategory,
        fetch, upload,
        delete: deleteItem,
        setCategory, justUploaded,
        searchQuery ,setSearch
    } = useWardrobe();

    //pagination
    const itemPerPage = 4;

    const[currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage-1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;

    const currentItems = items.slice(startIndex,endIndex); 
    const totalPage = (items.length % itemPerPage) == 0 ? Math.ceil(items.length / itemPerPage) + 1 : Math.ceil(items.length / itemPerPage);


    // initial fetch on mount
    useEffect(() => {
        fetch();
    }, []);

    useEffect(() =>{
        setCurrentPage(1);
    },[searchQuery]);

    // refetch after upload to get real Gemini data
    useEffect(() => {
        if (justUploaded) {
            fetch();
        }
    }, [justUploaded]);

    const [uploadOpen, setUploadOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const activeFilter = searchParams.get('filter') || 'all';
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteItemSelected, setDeleteItemSelected] = useState(null);

    const handleFilterChange = (filter) => {
        if(filter == 'all'){
            setSearchParams({});
        } else{
            setSearchParams({ filter });
        }
        
        setCategory(filter);
    };

    useEffect(() => {
        const filterFromURL = searchParams.get('filter') || 'all';
        setCategory(filterFromURL);
    }, [searchParams]);

    const handleUpload = (file) => {
        setUploadOpen(false);

        const uploadItem = upload({file});

        toast.promise(uploadItem, {
            success: 'Your piece has been saved to your wardrobe',
            error: 'Please check your connection and try again'
        })
        
     
    };

    const handleDelete = (item) => {
        setDeleteItemSelected(item);
        setDeleteOpen(true);
    };

    return (
        <div className='page-enter flex flex-col gap-5 lg:justify-center lg:items-center lg:w-full pt-12 bg-[#F7F4EF] min-h-[calc(100dvh-72px)] lg:min-h-[calc(100dvh-80px)]'>

            <div className='flex flex-col gap-10 px-6 sm:px-8 lg:px-12 w-full max-w-6xl mx-auto flex-1'>
                <section aria-label='My wardrobe' className='flex flex-col md:flex-row md:justify-between md:items-end gap-4'>
                    <div>
                        <TitleText title='My Wardrobe' description='' />
                        <TotalItems items={total} items_name='wardrobe items' />
                    </div>
                    <Button
                        onClick={() => setUploadOpen(true)}
                        className="w-full md:w-auto flex items-center justify-center gap-2"
                    >
                        <CirclePlus size={20} color='#ffff' aria-hidden='true' className='shrink-0' />
                        <span className='playfair uppercase text-[14px] sm:text-[18px] tracking-[2px] font-semibold leading-none'>
                            Upload items
                        </span>
                    </Button>
                </section>

                {/* Filter Bar */}
                <div className='sticky top-18 z-40 bg-[#F7F4EF] backdrop-blur-md py-3 w-full border-b border-[#E7E1CF]/40 flex flex-col lg:gap-0 lg:flex-row lg:items-end justify-between'>
                    <FilterTabs active={activeFilter} onFilterChange={handleFilterChange} />
                    <SearchOutfit value={searchQuery} onChange={setSearch}/>
                </div>

            
                <div className="flex-1 flex flex-col">
                    {loading && items.length === 0 ? (
                        <p className="text-center playfair italic text-2xl mt-12">
                            Loading wardrobe...
                        </p>
                    ) : items.length === 0 ? (
                        <div className="flex-1 flex items-center justify-center">
                            <p className="text-center playfair italic text-2xl">
                                {searchQuery
                                    ? `No items found for "${searchQuery}"`
                                    : 'No items Found'}
                            </p>
                        </div>
                    ) : (
                        <CardGrid>
                            {Array.isArray(items) && currentItems.map((item) => (
                                <Card
                                    key={item.c_id}
                                    src={item.image_url}
                                    cardTitle={item.short_description}
                                    cardText={item.category}
                                    cardPage="wardrobe"
                                    onDelete={() => handleDelete(item)}
                                    selected={deleting == item.c_id}
                                    isLoading={item.isOptimistic}
                                />
                            ))}
                                    {currentPage === totalPage && (
                                        <div className='w-4xs  '>
                                            < Card uploadModal={() => setUploadOpen(true)} type='upload' />
                                        </div>
                                    )}
                        </CardGrid>
                    )}
                </div>

                <div>
                    <Pagination totalPages={totalPage} currentPage={currentPage} onPageChange={setCurrentPage} />
                </div>
            </div>

            {/* Upload Modal */}
            <Modal
                isOpen={uploadOpen}
                onClose={() => setUploadOpen(false)}
                title='Add to Your Wardrobe'
                description='Upload a piece and let AI identify the details for you'
                size='md'
            >
                <UploadOption
                    onClose={() => setUploadOpen(false)}
                    onUpload={handleUpload}
                    uploading={uploading}
                    cameraFacing='environment'
                />
            </Modal>

            {/* Delete Modal */}
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
                        <Button onClick={() => setDeleteOpen(false)} variant="ghost">
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                if (deleteItemSelected) {
                                    const deletItemPromise = deleteItem(deleteItemSelected.c_id);
                                    toast.promise(deletItemPromise,{
                                        success:'This piece has been deleted from your wardrobe'
                                    })
                                }
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
    );
}

export default Wardrobe;