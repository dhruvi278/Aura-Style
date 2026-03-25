import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

function Card({ src, alt, cardTitle, cardText, type = "normal", onDelete, cardPage = null, uploadModal, selectedOutfit, isLoading }) {

    const [load, setLoad] = useState(false)

    return (
        <article
            aria-label={cardTitle}
            className={`group relative rounded-[24px] lg:rounded-[30px] w-full overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${type !== "normal" ? `border-2 border-dashed border-[#E7E1CF] hover:border-[#C9A96E]` : `bg-white/50`}`}
        >
            {/* Upload Card */}
            {type !== "normal" && (
                <button onClick={uploadModal} className="w-full relative">
                    <div className="h-50 lg:h-80 w-full" />
                    <div className="min-h-[64px] md:min-h-[70px]" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center gap-3">
                        <div className="p-2 sm:p-3 border border-dashed border-[#E7E1CF] rounded-full group-hover:border-[#C9A96E] cursor-pointer transition-all duration-200">
                            <Plus size={20} className="opacity-20 group-hover:opacity-40 text-[#1C1C1A] sm:w-6 sm:h-6 md:w-7 md:h-7" />
                        </div>
                        <span className="uppercase newsreader text-[11px] sm:text-[12px] md:text-[13px] text-[#1C1C1A] opacity-40 group-hover:opacity-60 tracking-[2px] transition-all duration-200">
                            Add Item
                        </span>
                    </div>
                </button>
            )}

            {/* Shimmer — hide when isLoading (optimistic) since we have our own overlay */}
            {!load && !isLoading && type === "normal" && (
                <div aria-hidden="true" className="absolute inset-0 z-10 bg-gradient-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-[length:200%_100%] animate-shimmer" />
            )}

            {/* Item Card */}
            {type === "normal" && (
                <div>
                    <figure className="aspect-[4/5] overflow-hidden bg-[#F0EDE6] relative">
                        <img
                            src={src}
                            loading="lazy"
                            alt={alt}
                            onLoad={() => setLoad(true)}
                            className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${isLoading ? 'blur-[2px]' : ''}`}
                        />

                        {selectedOutfit && (
                            <div className="absolute top-3 right-2 md:right-3 sm:text-xs bg-[#EEBD2B] text-black text-[9px] md:text-[9px] rounded-full px-2 py-1 shadow-md uppercase tracking-wide z-20">
                                selected
                            </div>
                        )}

                        {/* ── Optimistic loading overlay ── */}
                        {isLoading && (
                            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-black/30 rounded-t-[24px] lg:rounded-t-[30px]">
                                <div className="w-7 h-7 border-[3px] border-white/40 border-t-white rounded-full animate-spin" />
                                <span className="text-white text-[10px] tracking-[2px] uppercase newsreader opacity-90">
                                    Analyzing...
                                </span>
                            </div>
                        )}

                        {/* Delete button — hidden while optimistic */}
                        {cardPage === "wardrobe" && !isLoading && (
                            <button
                                type="button"
                                aria-label={`Remove ${cardTitle} from wardrobe`}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (onDelete) onDelete();
                                }}
                                className={`
                                    absolute top-2 right-2
                                    sm:top-4 sm:right-4
                                    w-7 h-7 sm:w-8 sm:h-8
                                    rounded-full
                                    bg-white/90 backdrop-blur-sm
                                    flex items-center justify-center
                                    text-[#C0705A]
                                    shadow-md
                                    transition-all duration-200
                                    hover:bg-[#C0705A] hover:text-white
                                    opacity-100 md:opacity-0 md:group-hover:opacity-100
                                    scale-100 md:scale-75 md:group-hover:scale-100
                                    z-20 hover:cursor-pointer
                                `}
                            >
                                <Trash2 size={12} className="sm:w-3.5 sm:h-3.5" aria-hidden="true" />
                            </button>
                        )}
                    </figure>

                    <footer className="px-3 py-3 md:px-4 md:py-4 min-h-[64px] md:min-h-[72px] flex flex-col justify-center">
                        <h3 className="playfair text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 mb-1 capitalize truncate">
                            {/* show skeleton text while optimistic */}
                            {isLoading ? (
                                <span className="inline-block w-32 h-4 bg-[#E8E2D9] rounded animate-pulse" />
                            ) : cardTitle}
                        </h3>
                        <p className="work-sans text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs tracking-[2px] sm:tracking-[3px] md:tracking-[4px] text-[#EEBD2B] font-semibold uppercase">
                            {/* show skeleton text while optimistic */}
                            {isLoading ? (
                                <span className="inline-block w-16 h-3 bg-[#E8E2D9] rounded animate-pulse" />
                            ) : cardText}
                        </p>
                    </footer>
                </div>
            )}

        </article>
    );
}

export default Card;
