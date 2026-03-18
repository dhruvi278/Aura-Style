import Formfield from "../../ui/Formfield";
import { Search } from "lucide-react";

function SearchOutfit() {
    return (
        <div className="w-full sm:w-auto">
            <label className="relative inline-block w-full sm:w-72 lg:w-80">
                <Formfield
                    type="text"
                    placeholder="Search"
                    className="w-full pr-10 h-10 sm:h-11 md:h-12 text-sm sm:text-base"
                />
                <span className="absolute right-3 sm:right-4 top-2/5 -translate-y-1/2 flex items-center pointer-events-none text-gray-500">
                    <Search size={16} className="sm:w-5 sm:h-5" />
                </span>
            </label>
        </div>
    );
}

export default SearchOutfit;
