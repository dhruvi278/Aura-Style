
import { useOutfit } from "../../hooks/useOutfit";
import GenerateOutfitImg from '../../assets/GenerateOutfit.png'
import { Key } from "lucide-react";

function OutfitDetails(){
    const {outfit } = useOutfit();
    return(
        <div className="flex flex-col gap-6">
            {outfit.map((item,index) =>(
                <div key={item.c_id} className="flex gap-4 sm:gap-6 items-start">
                    {/* item image  */}
                    <div className="flex-shrink-0 w-24 h-28 sm:w-32 sm:h-40 rounded-2xl overflow-hidden bg-[#F0EDE6] border border-[#E7E1CF] ">
                        <img src={item.image_url} alt={item.category} className="h-full w-full object-cover object-center"/>
                    </div>
                    {/* items details  */}
                    <div className="flex flex-col gap-2 pt-1 flex-1">
                        {/* index + category */}
                        <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-[#C5A059] flex items-center  justify-center flex-shrink-0 " >
                                <span className="work-sans text-[9px] text-white font-bold ">
                                    {index + 1}
                                </span>
                            </span>
                            <p className="work-sans text-[10px] sm:text-[11px] text-[#C5A059] font-bold uppercase tracking-[2px] ">{item.category}</p>
                        </div>
                        <p className="work-sans text-[12px] sm:text-[13px] md:text-[14px] text-[#1A1A18] leading-relaxed">{item.description}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default OutfitDetails;