import { useState, useEffect, useRef } from "react";
import { Datepicker } from "flowbite-react";

function DateFilter() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startKey, setStartKey] = useState(0);
    const [endKey, setEndKey] = useState(0);

    const startRef = useRef(null);
    const endRef = useRef(null);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Clear the input text after remount when date is null
    useEffect(() => {
        if (!startDate && startRef.current) {
            const input = startRef.current.querySelector("input");
            if (input) input.value = "";
        }
    }, [startKey]);

    useEffect(() => {
        if (!endDate && endRef.current) {
            const input = endRef.current.querySelector("input");
            if (input) input.value = "";
        }
    }, [endKey]);

    const handleStartDate = (date) => {
        setStartDate(date);
        setEndDate(null);
        setEndKey((k) => k + 1);
    };

    const handleClearStart = () => {
        setStartDate(null);
        setEndDate(null);
        setStartKey((k) => k + 1);
        setEndKey((k) => k + 1);
    };

    const handleClearEnd = () => {
        setEndDate(null);
        setEndKey((k) => k + 1);
    };

    return (
        <div className="w-full flex flex-col lg:justify-end md:justify-center lg:mr-25 sm:flex-row sm:items-center sm:gap-4 px-0 sm:px-2 lg:px-0">
            {/* Start Date */}
            <div className="flex flex-col gap-1 w-full sm:max-w-[180px]">
                <label className="text-sm font-medium text-black">Start Date</label>
                <div className="relative" ref={startRef}>
                    <Datepicker
                        key={startKey}
                        title="Start Date"
                        autoHide
                        maxDate={today}
                        onSelectedDateChanged={handleStartDate}
                        position="left"
                        placeholder="Select date"
                        className="border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full"
                    />
                    {startDate && (
                        <button
                            onClick={handleClearStart}
                            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10 text-lg leading-none"
                        >
                            ×
                        </button>
                    )}
                </div>
            </div>

            {/* Arrow */}
            <span className="text-gray-500 hidden sm:block mt-3 sm:mt-6">→</span>

            {/* End Date */}
            <div className="flex flex-col gap-1 w-full sm:max-w-[180px]">
                <label className="text-sm font-medium text-black">End Date</label>
                <div className="relative" ref={endRef}>
                    <Datepicker
                        key={endKey}
                        title="End Date"
                        autoHide
                        maxDate={today}
                        minDate={startDate}
                        onSelectedDateChanged={(date) => setEndDate(date)}
                        placeholder="Select date"
                        position="left"
                        className="border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full"
                    />
                    {endDate && (
                        <button
                            onClick={handleClearEnd}
                            className="absolute right-8 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10 text-lg leading-none"
                        >
                            ×
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DateFilter;


// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// function DateFilter() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const handleStartDate = (date) => {
//         setStartDate(date);
//         setEndDate(null);
//     };

//     return (
//         <div className="w-full flex flex-col lg:justify-end md:justify-center lg:mr-25 sm:flex-row sm:items-center sm:gap-4 px-0 sm:px-2 lg:px-0">
//             {/* Start Date */}
//             <div className="flex flex-col gap-1 w-full sm:max-w-[180px]">
//                 <label className="text-sm font-medium text-black">Start Date</label>
//                 <Datepicker
//                     title="Start Date"
//                     autoHide
//                     maxDate={today}
//                     onSelectedDateChanged={handleStartDate}
//                     position="left"
//                     defaultDate={startDate || today}
                    
//                     className="border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full"
//                 />
//             </div>

//             {/* Arrow */}
//             <span className="text-gray-500 hidden sm:block mt-3 sm:mt-6">→</span>

//             {/* End Date */}
//             <div className="flex flex-col gap-1 w-full sm:max-w-[180px]">
//                 <label className="text-sm font-medium text-black">End Date</label>
//                 <Datepicker
//                     title="End Date"
//                     autoHide
//                     maxDate={today}
//                     minDate={startDate}
//                     onSelectedDateChanged={(date) => setEndDate(date)}
//                     defaultDate={endDate || today}
//                     position="left"
//                     className=" datepicker-container border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full datepicker-left     "
//                 />
//             </div>
//         </div>
//     );
// }
// export default DateFilter;