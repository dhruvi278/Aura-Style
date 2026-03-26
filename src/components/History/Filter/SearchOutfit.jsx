import { useRef, useState } from "react";
import Formfield from "../../ui/Formfield";
import { Search, X } from "lucide-react";

function SearchOutfit({value, onChange}) {

    const [localValue,setLocalValue] = useState(value || '');
    const timeRef = useRef(null);

    const handleChange = (text) =>{
        setLocalValue(text);
        if (timeRef.current) clearTimeout(timeRef.current);

        timeRef.current = setTimeout(() => {
            onChange(text);
        }, 400)
    }

    const handleClear = () => {
        setLocalValue('');
        if (timeRef.current) clearTimeout(timeRef.current);
        onChange('');   // clear immediately, no debounce needed
    };

    return (
        <div className="w-full sm:w-auto">
            <label className="relative inline-block w-full sm:w-72 lg:w-80">
                <Formfield
                    type="text"
                    placeholder="Search"
                    value = {localValue}
                    onChange={(e) => handleChange(e.target.value)}
                    className="w-full pr-10 h-10 sm:h-11 md:h-12 text-sm sm:text-base bg-[#F7F4EF]"
                    showError={false}
                />
                {/* <span className="absolute right-3 sm:right-4 top-3/5 -translate-y-1/2 flex items-center pointer-events-none text-gray-500">
                {value ? (
                    <button
                     type="button"
                     onClick={handleClear}
                     className="hover:text-gray-800 transition-colors cursor-pointer"
                            aria-label="Clear Search">< X size={16} className="sm:w-5 sm:h-5"  /></button>
                ):(
                            <Search size={16} className="sm:w-5 sm:h-5" />
                )}
                    
                </span> */}
                <span className="absolute right-3 sm:right-4 top-3/5 -translate-y-1/2 flex items-center text-gray-500">
                    {value ? (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="hover:text-gray-800 transition-colors cursor-pointer"
                            aria-label="Clear Search"
                        >
                            <X size={16} className="sm:w-5 sm:h-5" />
                        </button>
                    ) : (
                        <span className="pointer-events-none">
                            <Search size={16} className="sm:w-5 sm:h-5" />
                        </span>
                    )}
                </span>
            </label>
        </div>
    );
}

export default SearchOutfit;
