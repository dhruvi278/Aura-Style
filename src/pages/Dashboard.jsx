import CollectionOverview from "../components/Dashboard/CollectionOverview";
import QuickActions from "../components/Dashboard/QuickActions";
import QuickGenerateOption from "../components/Dashboard/QuickGenerateOption";
import RecentlyGenerated from "../components/Dashboard/RecentlyGenerated";
import TitleText from "../components/ui/TitleText";

function Dashboard (){
    return(
        <div className="px-10 pt-10 bg-[#F7F4EF] flex flex-col gap-20">
            <TitleText title="Welcome back, Eleanor" description="Your curated wardrobe is ready for today's selection."/>
            <div>
                <QuickActions />
            </div>
            <div>
                <CollectionOverview />
            </div>
            <div>
                <RecentlyGenerated />
            </div>
            <div>
                <QuickGenerateOption />
            </div>
        </div>
    )
}

export default Dashboard;