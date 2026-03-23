
import CollectionCard from "./CollectionCard";
import { BookMinus, Shirt, Ruler,Gem } from 'lucide-react'
function CollectionOverview({onSelect}){
    return(
        <div>
            <h2 className="text-[#1A1A18]/40 font-bold text-sm sm:text-base">COLLECTION OVERVIEW</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 ">
                <CollectionCard category="TOTAL ITEMS" CollectionIcon={BookMinus} numberOfItems="07" onClick={()=>onSelect("All")}  />
                <CollectionCard category="TOPS" CollectionIcon={Shirt} numberOfItems="04" onClick={()=>onSelect('Tops')} />
                <CollectionCard category="BOTTOMS" CollectionIcon={Ruler} numberOfItems="01" onClick={()=>onSelect('Bottoms')} />
                <CollectionCard category="ACCESSORIES" CollectionIcon={Gem} numberOfItems="01" onClick={()=>onSelect('Accessories')} />
            </div>
           
        </div>
    )
}

export default CollectionOverview;