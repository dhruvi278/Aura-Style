import React, { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { CalendarDays } from 'lucide-react';

function DateFilter() {
    const [selectionRange, setSelectionRange] = useState(null);

    const [tempRange, setTempRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    });

    const [isOpen, setIsOpen] = useState(false);

    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (ranges) => {
        setTempRange(ranges.selection);
    };

    const formatDate = (date) =>
        date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });

    return (
        <div ref={containerRef} className="relative inline-block">

            {/* Input field */}
            <div
                onClick={() => setIsOpen((prev) => !prev)}
                className={`flex items-center gap-2 min-w-[280px] px-3.5 py-2.5 rounded-lg border cursor-pointer select-none transition
                ${isOpen
                    ? 'border-[#EEBD2B] shadow-[0_0_0_3px_rgba(99,102,241,0.15)]'
                        : 'border-gray-300'}
                bg-[#FDFAF6]`}
            >
                <CalendarDays className="w-4 h-4 text-gray-500" />

                {selectionRange ? (
                    <>
                        <span className="text-sm text-gray-700 font-medium">
                            {formatDate(selectionRange.startDate)}
                        </span>
                        <span className="text-gray-400 text-sm">→</span>
                        <span className="text-sm text-gray-700 font-medium">
                            {formatDate(selectionRange.endDate)}
                        </span>
                    </>
                ) : (
                    <span className="text-sm text-gray-400">
                        Select date range
                    </span>
                )}

                <span className="ml-auto text-xs text-gray-400">
                    {isOpen ? '▲' : '▼'}
                </span>
            </div>

            {/* Calendar Dropdown */}
            {isOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 z-50 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden">

                    <DateRange
                        ranges={[tempRange]}
                        onChange={handleSelect}
                        moveRangeOnFirstSelection={false}
                        rangeColors={['#EEBD2B']}
                    />

                    {/* Action buttons */}
                    <div className="flex justify-end gap-2 px-4 py-2.5 border-t border-gray-100">
                        <button
                            onClick={() => {
                                setTempRange(
                                    selectionRange ?? {
                                        startDate: new Date(),
                                        endDate: new Date(),
                                        key: 'selection',
                                    }
                                );
                                setIsOpen(false);
                            }}
                            className="px-4 py-1.5 rounded-md border border-gray-200 bg-gray-50 text-gray-500 text-sm font-medium hover:bg-gray-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={() => {
                                setSelectionRange(tempRange);
                                setIsOpen(false);
                            }}
                            className="px-4 py-1.5 rounded-md bg-black text-white text-sm font-medium transition cursor-pointer"
                        >
                            Apply
                        </button>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default DateFilter;
