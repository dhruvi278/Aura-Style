import React, { useEffect, useState } from 'react'
import Button from '../ui/Button'
import StylePreviews from './StylePreviews'
import { useOutfit } from '../../hooks/useOutfit'
import { toast } from 'sonner'
import GenerateOutfitImg from '../../assets/GenerateOutfit.png'
import Modal from '../ui/Modal'
import OutfitDetails from './OutfitDetails'
import { useNavigate } from 'react-router-dom'

function OutfitCard({ onRegenerate }) {

    const { outfit, loading, saving, tryonImage, save, saved, clear, error, generatedOutfitId } = useOutfit();
    const [detailsOpen, setDetailsOpen] = useState(false);
    const navigate = useNavigate();

    const handleSave = async () => {
        const result = await save(generatedOutfitId);
        if (result.type === 'outfit/saveOutfit/fulfilled') {
            toast.success('Your Outfit is selected !');
        } else {
            toast.error('Failed to select Outfit!');
        }
    };

    // useEffect(() => {
    //     if (!error) return;
    //     const isInsufficientClothes =
    //         error.toLowerCase().includes('not found in wardrobe') ||
    //         error.toLowerCase().includes('empty wardrobe');
    //     if (isInsufficientClothes) {
    //         toast.error('Not enough clothes in your wardrobe', {
    //             description: 'Add more items to your wardrobe to generate a complete outfit.',
    //             action: {
    //                 label: 'Go to wardrobe',
    //                 onClick: () => navigate('/wardrobe'),
    //             },
    //             duration: 8000,
    //         });
    //     } else {
    //         toast.error('Something went wrong. Please try again.');
    //     }
    // }, [error]);

    const hasOutfit = outfit && outfit.length > 0;

    // single return — no early returns, column never collapses
    return (
        <>
            <article aria-label='Generated Outfit' className='flex flex-col gap-4 sm:gap-6 md:gap-8 ml-0 lg:ml-10 min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]'
>

                {/* ── figure area: shimmer OR tryon image OR style previews ── */}
                {loading ? (
                    // shimmer — same size as real image card so layout doesn't shift
                    <div className='bg-[#FDFAF6] border border-[#E7E5E4] rounded-3xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10'>
                        <div className='w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] rounded-2xl bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer' />
                    </div>
                ) : hasOutfit ? (
                    // real outfit image
                    <figure className='relative bg-[#FDFAF6] border border-[#E7E5E4] rounded-3xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10'>
                        <img
                            src={GenerateOutfitImg}
                            alt="Generated Outfit"
                            className='w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] object-cover object-top rounded-2xl'
                        />
                        <button
                            type='button'
                            onClick={() => setDetailsOpen(true)}
                            className='absolute bottom-1.5 right-8 flex items-center gap-1.5 px-3 py-1.5
                                bg-[#FDFAF6]/80 backdrop-blur-sm border border-[#E7E1CF] rounded-full
                                work-sans text-[10px] uppercase tracking-[2px] font-semibold text-[#1A1A18]
                                hover:bg-[#1A1A18] hover:text-[#FDFAF6] hover:border-[#1A1A18]
                                transition-all duration-200 cursor-pointer'
                        >
                            <span>View Details</span>
                        </button>
                    </figure>
                ) : (
                    // no outfit yet — style previews
                    <StylePreviews />
                )}

                {/* ── action row: shimmer OR real buttons ── */}
                <section aria-label='Outfit actions' className='flex flex-col gap-4'>
                    {loading ? (
                        // shimmer buttons
                        <div className='flex gap-2 sm:gap-3'>
                            <div className='h-10 w-28 rounded-full bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer' />
                            <div className='h-10 w-28 rounded-full bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer' />
                        </div>
                    ) : hasOutfit ? (
                        // real buttons
                        <div className='flex gap-2 sm:gap-3 w-full xl:w-auto justify-end '>
                            <Button
                                variant='bordered'
                                onClick={onRegenerate}
                                disabled={saved}
                                className="border-[#E7E5E4]"
                            >
                                <span className='work-sans text-[10px] sm:text-[12px] uppercase font-semibold tracking-[1px] sm:tracking-[2px] whitespace-nowrap'>
                                    Regenerate
                                </span>
                            </Button>
                            <Button
                                onClick={handleSave}
                                disabled={saving || saved}
                                className="border-[#E7E5E4]"
                            >
                                <span className='work-sans text-[10px] sm:text-[12px] uppercase font-semibold tracking-[1px] sm:tracking-[2px] whitespace-nowrap'>
                                    {saved ? 'Selected' : saving ? 'Saving...' : 'Select look'}
                                </span>
                            </Button>
                        </div>
                    ) : null}
                </section>

            </article>

            {/* outfit details modal */}
            <Modal
                isOpen={detailsOpen}
                onClose={() => setDetailsOpen(false)}
                title='Outfit Details'
                description='Your AI-curated outfit pieces for today'
                size='lg'
            >
                <OutfitDetails />
            </Modal>
        </>
    );
}

export default OutfitCard;










// import React, { useEffect, useState } from 'react'
// import Button from '../ui/Button'
// import StylePreviews from './StylePreviews'
// import { useOutfit } from '../../hooks/useOutfit'
// import { toast } from 'sonner'
// import GenerateOutfitImg from '../../assets/GenerateOutfit.png'
// import Modal from '../ui/Modal'
// import OutfitDetails from './OutfitDetails'
// import { useNavigate } from 'react-router-dom'


// function OutfitCard({ onRegenerate }) {

//     const { outfit, loading , saving, tryonImage, save, saved, clear,error } = useOutfit();
//     const [detailsOpen, setDetailsOpen] = useState(false);
//     const navigate = useNavigate();

//     const handleSave = async () => {
//         const result = await save({ outfit, tryon_image: tryonImage });
//         if (result.type === 'outfit/saveOutfit/fulfilled') {
//             toast.success('Outfit saved to your history!');
//         } else {
//             toast.error('Failed to save Outfit!');
//         }
//     };

//     useEffect(()=>{
//         if(!error) return;

//         const isInSufficientClothes = 
//             error.toLowerCase().includes('not found in wardrobe') ||
//             error.toLowerCase().includes('empty wardrobe')

//         if(isInSufficientClothes){
//             toast.error('Not enough clothes in your wardrobe',{
//                 description:'Add more items to your wardrobe to generate a complete outfit.',
//                 action:{
//                     label: 'Go to wardrobe',
//                     onClick: () => navigate('/wardrobe'),
//                 },
//                 duration:8000,
//             });
//         } else{
//             toast.error('Something went wrong. Please try again.');
//         }
//     },[error])

    

//     //  Shimmer skeleton while generating 
//     if (loading) {
        
//         return (
//             <article className='flex flex-col gap-4 sm:gap-6 md:gap-8 ml-0 lg:ml-10'>
//                 {/* main image skeleton */}
//                 <div className='bg-[#FDFAF6] border border-[#E7E5E4] rounded-3xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10'>
//                     <div className='w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] rounded-2xl bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer' />
//                 </div>

//                 <div className='flex flex-col xl:flex-row justify-between items-start sm:items-center gap-4'>

//                     <div className='flex gap-2 sm:gap-3'>
//                         <div className='h-10 w-28 rounded-full bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer' />
//                         <div className='h-10 w-28 rounded-full bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer' />
//                     </div>
//                 </div>
//             </article>
//         );
//     }

//     // No outfit yet
//     if (!outfit || outfit.length === 0) {
//         return (
//             <article className='ml-0 md:ml-10'>
//                 <StylePreviews />
//             </article>
//         );
//     }

//     //  Outfit ready
//     return (
//         <article aria-label='Generated Outfit' className='flex flex-col gap-4 sm:gap-6 md:gap-8 ml-0 lg:ml-10'>

//             {/* tryon image if available, else nothing */}
//             {GenerateOutfitImg && (
//                 <figure className='relative bg-[#FDFAF6] border border-[#E7E5E4] rounded-3xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10'>
//                     <img
//                         src={GenerateOutfitImg}
//                         alt="Generated Outfit"
//                         className='w-full h-[280px] sm:h-[360px] md:h-[420px] lg:h-[500px] object-cover object-top rounded-2xl'
//                     />
//                     <button className='absolute uppercase bottom-1.5 right-8 
//                             flex items-center gap-1.5 px-3 py-1.5 bg-[#FDFAF6]/80 backdrop-blur-sm
//                             border border-[#E7E1CF] rounded-full work-sans text-[10px] uppercase tracking-[2px] font-semibold text-[#1A11A18]
//                             transition-all duration-200 cursor-pointer ' onClick={() => setDetailsOpen(true)}><span>View Details</span></button>
//                 </figure>
//             )}

//             <section aria-label='Outfit actions' className='flex flex-col xl:flex-col justify-between items-start sm:items-center gap-4 '>
//                 {/* thumbnail strip */}


//                 <div className='flex gap-2 sm:gap-3 w-full xl:w-auto'>
//                     <Button
//                         variant='bordered'
//                         onClick={onRegenerate}
//                         className="border-[#E7E5E4]"
//                     >
//                         <span className='work-sans text-[10px] sm:text-[12px] uppercase font-semibold tracking-[1px] sm:tracking-[2px] whitespace-nowrap'>
//                             Regenerate
//                         </span>
//                     </Button>

//                     <Button
//                         onClick={handleSave}
//                         disabled={saving || saved}
//                         className="border-[#E7E5E4]"
//                     >
//                         <span className='work-sans text-[10px] sm:text-[12px] uppercase font-semibold tracking-[1px] sm:tracking-[2px] whitespace-nowrap'>
//                             {saved ? 'Selected' : saving ? 'Saving...' : 'Select look'}
//                         </span>
//                     </Button>
                    
//                 </div>
//             </section>
                
//                 <Modal isOpen={detailsOpen}
//                     onClose={() => setDetailsOpen(false)}
//                     title='Outfit Details'
//                     description='Your AI-curated outfit pieces for today'
//                     size='lg'> <OutfitDetails/></Modal>
//         </article>
//     );
// }

// export default OutfitCard;
