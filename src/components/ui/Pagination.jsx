import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react'

function Pagination({ currentPage = 1, totalPages, onPageChange }) {

    if (currentPage >totalPages){
        onPageChange(totalPages)
    } 
    const getPages = () => {
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
            return pages;
        }

        if (currentPage <= 3) {
            pages.push(1, 2, 3, "...");
            pages.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
            pages.push(1, "...");
            pages.push(totalPages - 2, totalPages - 1, totalPages);
        } else {
            pages.push(1, "...");
            pages.push(currentPage - 1, currentPage, currentPage + 1);
            pages.push("...")
            pages.push(totalPages);
        }
        return pages;
    }

    const pages = getPages();

    return (
        <nav aria-label='Pagination' className='flex gap-2 sm:gap-4 justify-center items-center mb-6'>

            {/* Privious Button */}
            <button
                onClick={() => onPageChange(currentPage => currentPage - 1)}
                disabled={currentPage === 1} className='tracking-[2px] flex gap-2 items-center hover:cursor-pointer opacity-80 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50'>
                <ArrowLeft size={14} />
                <span className='newsreader uppercase text-[10px] sm:text-[12px] tracking-[2px] text-[#1C1C1A] hidden sm:inline'>previous</span>

                {/* ALL Buttons */}
            </button>
            <ul className='flex gap-2 sm:gap-3 items-center'>
                {pages.map((page, i) =>
                    page === "..."
                        ? (
                            <li key={i} aria-hidden="true" className='text-[#1C1C1A]/30 text-sm'>...</li>
                        )
                        : (
                            <li key={i} className='flex justify-center items-center'>
                                <button
                                    onClick={() => onPageChange(page)}
                                    className={`text-[14px] newsreader hover:cursor-pointer  h-8 w-8 sm:h-9 sm:w-9 transition-all duration-200
                                     ${page === currentPage ?
                                            `text-[#1C1C1A] text-[13px] sm:text-[14px] rounded-full bg-[#EEBD2B] flex justify-center items-center`
                                            : `text-[#1C1C1A]/40 hover:text-[#1C1C1A]/80 text-[13px] sm:text-[14px]`
                                        }`}>
                                    {page}
                                </button>
                            </li>
                        )
                )}
            </ul>

            {/* Next Button */}
            <button
                onClick={() => onPageChange(currentPage => currentPage + 1)}
                disabled={currentPage === totalPages} className='tracking-[2px] flex gap-2 items-center hover:cursor-pointer opacity-80 hover:opacity-100 disabled:cursor-not-allowed disabled:opacity-50'>
                <span className='newsreader uppercase text-[10px] sm:text-[12px] tracking-[2px] text-[#1C1C1A] hidden sm:inline'>Next</span>
                <ArrowRight size={14} />
            </button>
        </nav>
    )
}

export default Pagination
