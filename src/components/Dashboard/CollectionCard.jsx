
function CollectionCard({category, numberOfItems, CollectionIcon}){
    return(
        <div className="bg-white p-4 md:p-8 lg:p-8 w-full  rounded-2xl md:rounded-3xl lg:rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
            <div className="flex justify-between ">
                <h2 className="text-xs sm:text-sm md:text-lg lg:text-lg ">{category}</h2>
                {CollectionIcon && <CollectionIcon size={18}/>}
            </div>
            <div>
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#EEBD2B] playfair-display">{numberOfItems}<span className="text-[#1A1A1A]/30 text-xs ml-1.5">{numberOfItems > 1 ? "ITEMS" : "ITEM"}</span></p>
            </div>
        </div>
    )
}
export default CollectionCard;
