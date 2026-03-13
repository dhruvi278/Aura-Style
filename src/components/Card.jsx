import { Plus } from "lucide-react";
import { useState } from "react";

function Card({ src, alt, cardTitle, cardText, type = "normal" }) {


    const [load, setLoad] = useState(false)


    return (
        <div
            className={`group relative rounded-[24px] w-[320px] overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${type !== "normal" ? `border-2 border-dashed border-[#E7E1CF] hover:border-[#C9A96E]` : `bg-[#F0EDE6]`}`}

        >
            {/* Upload Card */}
            {type !== "normal" && <div className="aspect-[4/5] flex flex-col justify-center items-center gap-3">
                <div className="p-2 border border-dashed border-[#E7E1CF] rounded-full group-hover:border-[#C9A96E]">
                    <Plus size={28} color="#1C1C1A" className="opacity-20 group-hover:opacity-40" />
                </div>
                <div className="uppercase newsreader text-md text-[#1C1C1A] opacity-40 group-hover:opacity-60">add Item</div>
            </div>}

            {/* Loading Effect */}
            {!load && type === "normal" && <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer" />}

            {/* Item Card */}
            {type === "normal" && <div>
                <div className="aspect-[4/5] overflow-hidden bg-[#F0EDE6] relative">
                    <img src={src} loading="lazy" alt={alt} onLoad={() => setLoad(true)} className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105`} />
                </div>

                <div className="bg-white px-6 py-5">
                    <h3 className="playfair text-xl text-gray-800 mb-1">{cardTitle}</h3>
                    <p className="work-sans text-xs tracking-[4px] text-[#EEBD2B] font-semibold uppercase">
                        {cardText}
                    </p>

                </div>
            </div>}

        </div>
    );
}

export default Card;