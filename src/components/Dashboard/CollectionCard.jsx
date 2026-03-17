
function CollectionCard({category, numberOfItems, CollectionIcon}){
    return(
        <div className="bg-white p-5 md:p-8 lg:p-8 lg:w-auto md:w-80 w-34 rounded-2xl md:rounded-3xl lg:rounded-3xl shadow-lg transition-shadow duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="flex justify-between ">
                <h2 className="text-xs sm:text-sm md:text-xl lg:text-xl">{category}</h2>
                {CollectionIcon && <CollectionIcon size={20}/>}
            </div>
            <div>
                <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#EEBD2B] ">{numberOfItems}<span className="text-[#1A1A1A]/30 text-xs ml-1.5">{numberOfItems > 1 ? "ITEMS" : "ITEM"}</span></p>
            </div>
        </div>
    )
}
export default CollectionCard;
