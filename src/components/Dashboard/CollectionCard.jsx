
function CollectionCard({category, numberOfItems, CollectionIcon}){
    return(
        <div className="bg-white  p-8 w-xl rounded-3xl shadow-lg hover:scale-105 transition hover:shadow-2xl transition">
            <div className="flex justify-between ">
                <h2>{category}</h2>
                {CollectionIcon && <CollectionIcon />}
            </div>
            <div>
                <p className="text-5xl text-[#EEBD2B] ">{numberOfItems}<span className="text-[#1A1A1A]/30 text-xs ml-1.5">{numberOfItems > 1 ? "ITEMS" : "ITEM"}</span></p>
            </div>
        </div>
    )
}
export default CollectionCard;