import Formfield from "../../ui/Formfield";
import { Search } from "lucide-react";

// function SearchOutfit(){
//     return(
//         <div>
//             <label>
//                 <Formfield type="text"
//                     placeholder="Search" 
//                     className="absolute w-sm"/>
//                 <Search className="relative bottom-2.5  "/>
//             </label>
//         </div>
//     )
// }
// export default SearchOutfit;    

function SearchOutfit() {
    return (
        <div className="w-full max-w-md">
            <label className="relative block">

                <Formfield
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />

                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    <Search />
                </span>

            </label>
        </div>
    )
}

export default SearchOutfit;