function Action({actionName, description,Icon}){

    return (
        <div className="group bg-white shadow pl-10 pr-45 py-10 rounded-3xl hover:bg-[#1C1C1A] transition-colors duration-300 cursor-pointer">
            {/* <icon icon = {iconName} /> */}
            <div className="p-3 bg-[#F7F4EF] rounded-3xl w-12 group-hover:bg-[#ECB613] transition-colors duration-300 ">
                {Icon && <Icon className=" size={24} " />}
            </div>
            <h3 className="text-xl group-hover:text-white transition-colors duration-300">{actionName}</h3>
            <p className="text-sm text-[#1A1A18]/50 group-hover:text-white transition-colors duration-300">{description}</p>
        </div>
        
    )
}

export default Action;