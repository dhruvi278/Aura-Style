import CollectionCard from "./CollectionCard";
import { BookMinus, Shirt, Ruler,Gem } from 'lucide-react'
function CollectionOverview(){
    return(
        <div>
            <h2 className="text-[#1A1A18]/40 font-bold">COLLECTION OVERVIEW</h2>
            <div className="flex gap-12 mt-5">
                <CollectionCard category="TOTAL ITEMS" CollectionIcon={BookMinus} numberOfItems="07" />
                <CollectionCard category="TOPS" CollectionIcon={Shirt} numberOfItems="04"/>
                <CollectionCard category="BOTTOMS" CollectionIcon={Ruler} numberOfItems="01"/>
                <CollectionCard category="ACCESSORIES" CollectionIcon={Gem} numberOfItems="01"/>
            </div>
           
        </div>
    )
}

export default CollectionOverview;