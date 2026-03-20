import CollectionOverview from "../components/Dashboard/CollectionOverview";
import QuickActions from "../components/Dashboard/QuickActions";
import QuickGenerateOption from "../components/Dashboard/QuickGenerateOption";
import RecentlyGenerated from "../components/Dashboard/RecentlyGenerated";
import TitleText from "../components/ui/TitleText";
import useGeolocation from "../hooks/sensors/useGeoLocation";
import { useEffect } from "react";

function Dashboard() {
    
    const { fetchLocation } = useGeolocation();
    useEffect(()=>{
        fetchLocation();
    },[])


    return (
        <main className="px-10 pt-10 bg-[#F7F4EF] flex flex-col gap-20 lg:w-full xl:items-center">
 
            <div className="max-w-6xl gap-20 flex flex-col">
                <header>
                    <TitleText
                        title="Welcome back, Eleanor"
                        description="Your curated wardrobe is ready for today's selection."
                    />
                </header>
                
                <section >
                    <QuickActions />
                </section>

                <section >
                    <CollectionOverview />
                </section>

                <section >
                    <RecentlyGenerated />
                </section>

                <section >
                    <QuickGenerateOption />
                </section>
            </div>
        </main>
    );
}

export default Dashboard;



// import CollectionOverview from "../components/Dashboard/CollectionOverview";
// import QuickActions from "../components/Dashboard/QuickActions";
// import QuickGenerateOption from "../components/Dashboard/QuickGenerateOption";
// import RecentlyGenerated from "../components/Dashboard/RecentlyGenerated";
// import TitleText from "../components/ui/TitleText";

// function Dashboard (){
//     return(
//         <div className="px-10 pt-10 bg-[#F7F4EF] flex flex-col gap-20 lg:w-full xl:items-center ">
//             <div className="max-w-6xl gap-20 flex flex-col">
//                 <TitleText title="Welcome back, Eleanor" description="Your curated wardrobe is ready for today's selection." />
//                 <div>
//                     <QuickActions />
//                 </div>
//                 <div>
//                     <CollectionOverview />
//                 </div>
//                 <div>
//                     <RecentlyGenerated />
//                 </div>
//                 <div>
//                     <QuickGenerateOption />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Dashboard;