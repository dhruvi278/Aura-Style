import { Plus, X } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";

function Card({ src, alt, cardTitle, cardText, type = "normal", onDelete, cardPage = null }) {


    const [load, setLoad] = useState(false)

    return (
        <article
            aria-label={cardTitle}
            className={`group relative rounded-[24px] lg:rounded-[48px] w-full overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${type !== "normal" ? `border-2 border-dashed border-[#E7E1CF] hover:border-[#C9A96E]` : `bg-[#F0EDE6]`}`}

        >
            {/* Upload Card */}
            {type !== "normal" && <div className="absolute inset-0 flex flex-col justify-center items-center gap-3">
                <div className="p-2 sm:p-3 border border-dashed border-[#E7E1CF] rounded-full group-hover:border-[#C9A96E] transition-all duration-200">
                    <Plus size={20} color="#1C1C1A" className="opacity-20 group-hover:opacity-40 text-[#1C1C1A] sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <div className="uppercase newsreader text-[11px] sm:text-[12px] md:text-[13px] text-[#1C1C1A] opacity-40 group-hover:opacity-60 tracking-[2px] transition-all duration-200">add Item</div>
            </div>}

            {/* Loading Effect */}
            {!load && type === "normal" && <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer" />}

            {/* Item Card */}
            {type === "normal" && <div>
                <figure className="aspect-[4/5] overflow-hidden bg-[#F0EDE6] relative">
                    <img src={src} loading="lazy" alt={alt} onLoad={() => setLoad(true)} className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105`} />

                    {cardPage === "wardrobe" && <button
                        type="button"
                        aria-label={`Remove ${cardTitle} from wardrobe`}
                        onClick={(e) => {
                            e.stopPropagation()
                            if (onDelete) onDelete()
                        }}
                        className={`
                            absolute top-4 right-4
                            sm:top-3 sm:right-3
                            w-7 h-7 sm:w-8 sm:h-8
                            rounded-full
                            bg-white/90 backdrop-blur-sm
                            flex items-center justify-center
                            text-[#C0705A]
                            shadow-md
                            transition-all duration-200
                            hover:bg-[#C0705A] hover:text-white
                            opacity-0 group-hover:opacity-100
                            scale-75 group-hover:scale-100
                            z-20 hover:cursor-pointer
                       `}
                    >
                        <X size={12} className="sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                    </button>}
                </figure>

                <footer className="bg-white/50 px-3 py-3 md:px-6 md:py-5">
                    <h3 className="playfair text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-1">{cardTitle}</h3>
                    <p className="work-sans text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-[#EEBD2B] font-semibold uppercase">
                        {cardText}
                    </p>

                </footer>
            </div>}

        </article>
    );
}

export default Card;