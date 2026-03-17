function Action({ actionName, description, Icon }) {
    return (
        <div className="group bg-white shadow-lg p-6 sm:p-8 md:p-10 rounded-3xl 
                    hover:bg-[#1C1C1A] transition-colors duration-300 cursor-pointer 
                    w-full lg:w-96
                    flex flex-col items-center lg:items-start text-center lg:text-left h-56">

            {/* Icon container */}
            <div className="p-3 bg-[#F7F4EF] rounded-3xl w-fit group-hover:bg-[#ECB613] transition-colors duration-300">
                {Icon && <Icon size={24} />}
            </div>

            {/* Action name */}
            <h3 className=" work-sans text-lg sm:text-xl font-semibold group-hover:text-white transition-colors duration-300 mt-5 ">
                {actionName}
            </h3>

            {/* Description */}
            <p className="work-sans text-sm sm:text-base text-[#1A1A18]/60 group-hover:text-white transition-colors duration-300 mt-2">
                {description}
            </p>
        </div>
    );
}

export default Action;

