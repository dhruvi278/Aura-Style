import { Sparkles } from "lucide-react";

function TotalOutfitCard() {
    return (
        <div className='flex items-center gap-3'>
            <p className='work-sans uppercase tracking-[3px] text-[#1C1C1A]'>
                Looks
            </p>
            <div className='flex items-center justify-center bg-[#C9A96E] rounded-md px-2.5 py-1 min-w-[32px]'>
                <strong className='playfair italic  font-medium text-[#FDFAF6] leading-none'>
                    4
                </strong>
            </div>
        </div>
    )
}
export default TotalOutfitCard;