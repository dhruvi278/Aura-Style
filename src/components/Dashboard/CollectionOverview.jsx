
import CollectionCard from "./CollectionCard";
import { BookMinus, Shirt, Ruler, Gem, Footprints } from 'lucide-react'
function CollectionOverview({onSelect , overview}){
    return(
        <div>
            <h2 className="text-[#1A1A18]/40 font-bold text-sm sm:text-base">COLLECTION OVERVIEW</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-5 auto-rows-fr">
                <CollectionCard category="Total items" CollectionIcon={BookMinus} numberOfItems={overview?.total ?? 0} onClick={()=>onSelect("all")}  />
                <CollectionCard category="Tops" CollectionIcon={Shirt} numberOfItems={overview?.top ?? 0} onClick={()=>onSelect('top')} />
                <CollectionCard category="Bottoms" CollectionIcon={Ruler} numberOfItems={overview?.bottom ?? 0 } onClick={()=>onSelect('bottom')} />
                <CollectionCard category="Accessories" CollectionIcon={Gem} numberOfItems={overview?.accessory ?? 0 } onClick={() => onSelect('accessory')} />
                <CollectionCard category="Footwear" CollectionIcon={Footprints} numberOfItems={overview?.footwear ?? 0} onClick={() =>onSelect('footwear')}/>
            </div>
           
        </div>
    )
}

export default CollectionOverview;