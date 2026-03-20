import React, { useEffect, useState } from 'react'
import TitleText from '../components/ui/TitleText'
import OutfitForm from '../components/generateOutfit/OutfitForm'
import OutfitCard from '../components/generateOutfit/OutfitCard'
import AIResponce from '../components/generateOutfit/AIResponce'

// import { useLocationContext } from '../components/context/LocationContext'
// import axios from 'axios'    

function GenerateOutfit() {
    
    // Send Location to the backend 

    // const {location,address} = useLocationContext();

    // const sendLocation = async ()=>{
    //     if(!location){
    //         console.log("Location is not available. Please allow location on dashboard");
    //         return;
    //     }
    //     console.log(location);

    //     try{
    //         const payload = {
    //             latitude: location.lat,
    //             longitude: location.lng,
    //             accuray: location.accuray,
    //             city:address?.city || null,
    //             state:address?.state || null,
    //             country:address?.country || null,
    //             postcode:address?.postcode || null,
    //             full_address:address?.full || null,
    //             timeStamp: new Date().toISOString()
    //         };
    //         await axios.post('',payload,{
    //             headers:{
    //                 "Content-Type":"application/json",
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`,
    //             },
    //         });
    //         console.log(payload);
    //     } catch(err){
    //         console.log("Failed to send location to server.");
    //     }
    // };
    // useEffect(() =>{
    //     sendLocation();
    // },[]);

    return (
        <main className='flex flex-col lg:w-full lg:justify-center lg:items-center gap-5 px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 lg:pt-2 bg-[#F7F4EF] min-h-[calc(100dvh-80px)]'>
            <div className='lg:max-w-6xl flex flex-col gap-5 lg:gap-7 xl:gap-5'>
                <TitleText title='Style Your Movement' description='Generate a trendy outfit from your wardrobe and elevate your everyday style.' />
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0'>
                    <OutfitForm />
                    <OutfitCard />
                    <aside className='block lg:hidden mb-10 px-2.5'>
                        <AIResponce />
                    </aside>
                </div>
            </div>
        </main>
    )
}

export default GenerateOutfit
