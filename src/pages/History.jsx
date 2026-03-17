import SearchOutfit from "../components/History/Filter/SearchOutfit";
import TotalOutfitCard from "../components/History/TotalOutfitCard";
import TitleText from "../components/ui/TitleText";

function History(){
    return(
        <div className="px-10 pt-10">
            <TitleText title="Your Style Archive"/>
            <TotalOutfitCard/>
            <div>
                <SearchOutfit/>
            </div>

        </div>
    )
}
export default History;