import { ArrowLeft } from 'lucide-react';
import React from 'react'

function Pagination({ currentPage = 1, totalPages, onPageChange }) {

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
            pages.push(totalPages);
        }
    }

    const pages = getPages();

    return (
        <div className='flex gap-2 justify-center mt-6'>
            <Button><ArrowLeft /><span>Privious</span></Button>
        </div>
    )
}

export default Pagination
