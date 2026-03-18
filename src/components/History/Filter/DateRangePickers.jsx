// import React, { useEffect, useRef, useState } from "react";
// import { DateRangePicker } from "flowbite-datepicker";
// // import "flowbite-datepicker/dist/flowbite-datepicker.css";

// export default function DateRangePickers() {
//     const containerRef = useRef(null);
//     const startRef = useRef(null);
//     const endRef = useRef(null);

//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     useEffect(() => {
//         // Inject CSS inline without separate file
//         const style = document.createElement("style");
//         style.innerHTML = `
//       .datepicker--cell.active {
//         background-color: #2563eb; /* Tailwind blue-600 */
//         color: white;
//         border-radius: 9999px;
//       }
//       .datepicker--cell.range,
//       .datepicker--cell.range-hover {
//         background-color: transparent !important;
//       }
//     `;
//         document.head.appendChild(style);

//         if (containerRef.current && startRef.current && endRef.current) {
//             const drp = new DateRangePicker(containerRef.current, {
//                 inputs: [startRef.current, endRef.current],
//                 autohide: true,
//             });

//             startRef.current.addEventListener("changeDate", (e) => {
//                 setStartDate(e.detail.date);
//                 setEndDate(null);
//             });
//             endRef.current.addEventListener("changeDate", (e) => setEndDate(e.detail.date));
//         }

//         return () => {
//             document.head.removeChild(style);
//         };
//     }, []);

//     return (
//         <div className="p-6 flex flex-col gap-4">
//             <h2 className="text-lg font-semibold text-gray-700">Select Date Range</h2>

//             <div ref={containerRef} className="flex items-center gap-4">
//                 <div className="relative w-40">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <input
//                         type="text"
//                         ref={startRef}
//                         placeholder="Start date"
//                         className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <span className="text-gray-500 mt-6">→</span>

//                 <div className="relative w-40">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <input
//                         type="text"
//                         ref={endRef}
//                         placeholder="End date"
//                         className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }





// import React, { useEffect, useRef, useState } from "react";
// import { DateRangePicker } from "flowbite-datepicker";
// // import "flowbite-datepicker/dist/flowbite-datepicker.css";

// export default function DateRangePickers() {
//     const containerRef = useRef(null);
//     const startRef = useRef(null);
//     const endRef = useRef(null);

//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     useEffect(() => {
//         // Inject CSS to highlight only selected dates
//         const style = document.createElement("style");
//         style.innerHTML = `
//       /* Highlight only selected dates */
//       .datepicker--cell.active {
//         background-color: #2563eb !important; /* Tailwind blue-600 */
//         color: white !important;               /* Keep text visible */
//         border-radius: 9999px !important;     /* Rounded circle */
//       }

//       /* Remove range highlight */
//       .datepicker--cell.range,
//       .datepicker--cell.range-hover {
//         background-color: transparent !important;
//       }
//     `;
//         document.head.appendChild(style);

//         // Initialize DateRangePicker
//         if (containerRef.current && startRef.current && endRef.current) {
//             new DateRangePicker(containerRef.current, {
//                 inputs: [startRef.current, endRef.current],
//                 autohide: true,
//             });

//             startRef.current.addEventListener("changeDate", (e) => {
//                 setStartDate(e.detail.date);
//                 setEndDate(null);
//             });
//             endRef.current.addEventListener("changeDate", (e) => setEndDate(e.detail.date));
//         }

//         return () => {
//             document.head.removeChild(style);
//         };
//     }, []);

//     return (
//         <div className="p-6 flex flex-col gap-4">
//             <h2 className="text-lg font-semibold text-gray-700">Select Date Range</h2>

//             <div ref={containerRef} className="flex items-center gap-4">
//                 <div className="relative w-40">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <input
//                         type="text"
//                         ref={startRef}
//                         placeholder="Start date"
//                         className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <span className="text-gray-500 mt-6">→</span>

//                 <div className="relative w-40">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <input
//                         type="text"
//                         ref={endRef}
//                         placeholder="End date"
//                         className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }




// import React, { useEffect, useRef, useState } from "react";
// import { DateRangePicker } from "flowbite-datepicker";
// // import "flowbite-datepicker/dist/flowbite-datepicker.css";

// export default function DateRangePickers() {
//     const containerRef = useRef(null);
//     const startRef = useRef(null);
//     const endRef = useRef(null);

//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     useEffect(() => {
//         if (containerRef.current && startRef.current && endRef.current) {
//             // Initialize DateRangePicker
//             new DateRangePicker(containerRef.current, {
//                 inputs: [startRef.current, endRef.current],
//                 autohide: true,
//             });

//             // Update state when start or end date changes
//             startRef.current.addEventListener("changeDate", (e) => {
//                 setStartDate(e.detail.date);
//                 setEndDate(null); // reset end date when start changes
//             });
//             endRef.current.addEventListener("changeDate", (e) => setEndDate(e.detail.date));
//         }
//     }, []);

//     return (
//         <div className="p-6 flex flex-col gap-4">
//             <h2 className="text-lg font-semibold text-gray-700">Select Date Range</h2>

//             <div ref={containerRef} className="flex items-center gap-4">
//                 {/* Start date */}
//                 <div className="relative w-40">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <input
//                         ref={startRef}
//                         type="text"
//                         placeholder="Start date"
//                         className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <span className="text-gray-500 mt-6">→</span>

//                 {/* End date */}
//                 <div className="relative w-40">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <input
//                         ref={endRef}
//                         type="text"
//                         placeholder="End date"
//                         className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//             </div>

//             {/* Show selected range */}
//             {startDate && endDate && (
//                 <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                     <p className="text-sm text-blue-700 font-medium">
//                         📅 {startDate.toDateString()} → {endDate.toDateString()}
//                     </p>
//                     <p className="text-xs text-blue-500 mt-1">
//                         {Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))} days
//                         selected
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// }



// import React, { useEffect, useRef, useState } from "react";
// import { DateRangePicker } from "flowbite-datepicker";
// // import "flowbite-datepicker/dist/flowbite-datepicker.css";

// export default function HighlightedDateRangePicker() {
//     const containerRef = useRef(null);
//     const startRef = useRef(null);
//     const endRef = useRef(null);

//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     useEffect(() => {
//         if (containerRef.current && startRef.current && endRef.current) {
//             // Initialize DateRangePicker
//             const drp = new DateRangePicker(containerRef.current, {
//                 inputs: [startRef.current, endRef.current],
//                 autohide: true,  // closes after selecting end date
//             });

//             // Update React state when start date changes
//             startRef.current.addEventListener("changeDate", (e) => {
//                 setStartDate(e.detail.date);
//                 setEndDate(null); // Reset end date when start changes
//             });

//             // Update React state when end date changes
//             endRef.current.addEventListener("changeDate", (e) => {
//                 setEndDate(e.detail.date);
//             });
//         }
//     }, []);

//     return (
//         <div className="p-6 flex flex-col gap-4 w-xl">
//             <h2 className="text-lg font-semibold text-gray-700">Select Date Range</h2>

//             <div ref={containerRef} className="flex items-center gap-4">
//                 {/* Start Date Input */}
//                 <div className="relative w-40">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <input
//                         type="text"
//                         ref={startRef}
//                         placeholder="Start date"
//                         className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>

//                 <span className="text-gray-500 mt-6">→</span>

//                 {/* End Date Input */}
//                 <div className="relative w-40">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <input
//                         type="text"
//                         ref={endRef}
//                         placeholder="End date"
//                         className="block w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     />
//                 </div>
//             </div>

//             {/* Display selected range */}
//             {/* {startDate && endDate && (
//                 <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                     <p className="text-sm text-blue-700 font-medium">
//                         📅 {startDate.toDateString()} → {endDate.toDateString()}
//                     </p>
//                     <p className="text-xs text-blue-500 mt-1">
//                         {Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))} days
//                         selected
//                     </p>
//                 </div>
//             )} */}
//         </div>
//     );
// }



// ---try validation

// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const today = new Date();

//     const handleStartDate = (date) => {
//         if (date > today) {
//             alert("Start date cannot be after today!");
//             return;
//         }
//         setStartDate(date);
//         // Reset end date if it's before new start date
//         if (endDate && endDate < date) setEndDate(null);
//     };

//     const handleEndDate = (date) => {
//         if (startDate && date < startDate) {
//             alert("End date cannot be before start date!");
//             return;
//         }
//         setEndDate(date);
//     };

//     return (
//         <div className="flex flex-col gap-4 p-6 w-xl">
//             <h2 className="text-lg font-semibold text-gray-700">Select Date Range</h2>

//             <div className="flex items-center gap-4">
//                 {/* Start Date */}
//                 <div className="flex flex-col gap-1 w-1/3">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <Datepicker
//                         title="Start Date"
//                         autoHide={true}
//                         onSelectedDateChanged={handleStartDate}
//                         defaultDate={startDate || today}
//                     />
//                 </div>

//                 <span className="text-gray-500 mt-5">→</span>

//                 {/* End Date */}
//                 <div className="flex flex-col gap-1">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <Datepicker
//                         title="End Date"
//                         autoHide={true}
//                         onSelectedDateChanged={handleEndDate}
//                         defaultDate={endDate || startDate || today}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const [startError, setStartError] = useState("");
//     const [endError, setEndError] = useState("");

//     const today = new Date();

//     const handleStartDate = (date) => {
//         if (date > today) {
//             setStartError("Start date cannot be after today.");
//             setStartDate(null);
//             return;
//         }
//         setStartError("");
//         setStartDate(date);

//         // Reset end date if it is before new start date
//         if (endDate && endDate < date) {
//             setEndDate(null);
//             setEndError("End date cannot be before the selected start date.");
//         } else {
//             setEndError("");
//         }
//     };

//     const handleEndDate = (date) => {
//         if (startDate && date < startDate) {
//             setEndError("End date cannot be before the selected start date.");
//             setEndDate(null);
//             return;
//         }
//         setEndError("");
//         setEndDate(date);
//     };

//     return (
//         <div className="flex flex-col gap-4 p-6 w-xl">
//             <h2 className="text-lg font-semibold text-gray-700">Select Date Range</h2>

//             <div className="flex items-center gap-4">
//                 {/* Start Date */}
//                 <div className="flex flex-col gap-1 w-1/3">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <Datepicker
//                         title="Start Date"
//                         autoHide={true}
//                         onSelectedDateChanged={handleStartDate}
//                         defaultDate={startDate || today}
//                     />
//                     {startError && (
//                         <p className="text-xs text-red-500 mt-1">{startError}</p>
//                     )}
//                 </div>

//                 <span className="text-gray-500 mt-5">→</span>

//                 {/* End Date */}
//                 <div className="flex flex-col gap-1">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <Datepicker
//                         title="End Date"
//                         autoHide={true}
//                         onSelectedDateChanged={handleEndDate}
//                         defaultDate={endDate || startDate || today}
//                     />
//                     {endError && <p className="text-xs text-red-500 mt-1">{endError}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// }

// -------app--

// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const handleStartDate = (date) => {
//         setStartDate(date);
//         setEndDate(null);
//     };

//     return (
//         <div className="flex flex-col gap-4 w-md items-start">

//             {/* Always row layout */}
//             <div className="flex flex-col sm:flex-row items-center md:items-end gap-2">

//                 {/* Start Date */}
//                 <div className="flex flex-col gap-1 flex-1 ">
//                     <label className="text-xs sm:text-sm font-medium text-black">
//                         Start Date
//                     </label>

//                     <div className="custom-datepicker">
//                         <Datepicker
//                             title="Start Date"
//                             autoHide={true}
//                             maxDate={today}
//                             onSelectedDateChanged={handleStartDate}
//                             defaultDate={startDate || today}
//                             className="w-full border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] text-sm sm:text-base w-xs"
//                         />
//                     </div>
//                 </div>

//                 {/* Arrow */}
//                 <div className="flex items-center justify-center text-gray-500 text-sm sm:text-lg px-1">
//                     →
//                 </div>

//                 {/* End Date */}
//                 <div className="flex flex-col gap-1 flex-1 min-w-0">
//                     <label className="text-xs sm:text-sm font-medium text-black">
//                         End Date
//                     </label>

//                     <div className="custom-datepicker w-full">
//                         <Datepicker
//                             title="End Date"
//                             autoHide={true}
//                             minDate={startDate || today}
//                             onSelectedDateChanged={(date) => setEndDate(date)}
//                             defaultDate={endDate || today}
//                             className="w-full border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] text-sm sm:text-base w-xs"
//                         />
//                     </div>
//                 </div>

//             </div>

//             {/* Selected Range */}
//             {startDate && endDate && (
//                 <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                     <p className="text-sm text-blue-700 font-medium">
//                         📅 {startDate.toDateString()} → {endDate.toDateString()}
//                     </p>
//                     <p className="text-xs text-blue-500 mt-1">
//                         {Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))} days selected
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// }
// finally complete
import { useState } from "react";
import { Datepicker } from "flowbite-react";

export default function DateRangePickers() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const handleStartDate = (date) => {
        setStartDate(date);
        setEndDate(null);
    };

    return (
        <div className="w-full flex flex-col lg:justify-end md:justify-center lg:mr-25 sm:flex-row sm:items-center sm:gap-4 px-0 sm:px-2 lg:px-0">
            {/* Start Date */}
            <div className="flex flex-col gap-1 w-full sm:max-w-[180px]">
                <label className="text-sm font-medium text-black">Start Date</label>
                <Datepicker
                    title="Start Date"
                    autoHide
                    maxDate={today}
                    onSelectedDateChanged={handleStartDate}
                    position="left"
                    defaultDate={startDate || today}
                    
                    className="border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full"
                />
            </div>

            {/* Arrow */}
            <span className="text-gray-500 hidden sm:block mt-3 sm:mt-6">→</span>

            {/* End Date */}
            <div className="flex flex-col gap-1 w-full sm:max-w-[180px]">
                <label className="text-sm font-medium text-black">End Date</label>
                <Datepicker
                    title="End Date"
                    autoHide
                    minDate={startDate || today}
                    onSelectedDateChanged={(date) => setEndDate(date)}
                    defaultDate={endDate || today}
                    position="left"
                    className=" datepicker-container border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full datepicker-left     "
                />
            </div>
        </div>
    );
}

/// =========responsive ------------

// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const handleStartDate = (date) => {
//         setStartDate(date);
//         setEndDate(null);
//     };

//     return (

//         <div className="w-full flex md:justify-start lg:justify-center px-4">
//             <div className="flex flex-col md:flex-row gap-3 items-start w-full max-w-lg">

//                 {/* Start Date */}
//                 <div className="flex flex-col gap-1 w-full max-w-[180px]">
//                     <label className="text-sm font-medium text-black">
//                         Start Date
//                     </label>
//                     <Datepicker
//                         title="Start Date"
//                         autoHide
//                         maxDate={today}
//                         onSelectedDateChanged={handleStartDate}
//                         defaultDate={startDate || today}
//                         className="border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full"
//                     />
//                 </div>

//                 {/* Arrow */}
//                 <span className="text-gray-500 hidden md:block mt-6">→</span>

//                 {/* End Date */}
//                 <div className="flex flex-col gap-1 w-full max-w-[180px]">
//                     <label className="text-sm font-medium text-black">
//                         End Date
//                     </label>
//                     <Datepicker
//                         title="End Date"
//                         autoHide
//                         minDate={startDate || today}
//                         onSelectedDateChanged={(date) => setEndDate(date)}
//                         defaultDate={endDate || today}
//                         className="border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full"
//                     />
//                 </div>

//             </div>
//         </div>
//     );
// }


///-------final-----

// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const today = new Date();   
//     today.setHours(0, 0, 0, 0);

//     const handleStartDate = (date) => {
//         setStartDate(date);
//         setEndDate(null);
//     };

//     return (
//         <div className="flex  gap-4  sm:w-xs md:w-9/20  items-center">
//             <div className="flex flex-col items-center md:flex-row  gap-1 lg:w-xs md:2xl 2xl:ml-20">

//                 {/* Start Date */}
//                 <div className="flex flex-col gap-1 w-xs md:w-3xs">
//                     <label className="text-sm font-medium text-black">Start Date</label>
//                     <div className="custom-datepicker">
//                         <Datepicker
//                             title="Start Date"
//                             autoHide={true}
//                             maxDate={today}
//                             onSelectedDateChanged={handleStartDate}
//                             defaultDate={startDate || today}
//                             className="border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full"
//                         />
//                     </div>
                    
//                 </div>

//                 <span className="text-gray-500 mt-5 ">→</span>

//                 {/* End Date */}
//                 <div className="flex flex-col gap-1 w-xs  md:w-3xs">
//                     <label className="text-sm font-medium text-black">End Date</label>
//                     <div className="custom-datepicker">
//                         <Datepicker
//                             title="End Date"
//                             autoHide={true}
//                             minDate={startDate || today}
//                             onSelectedDateChanged={(date) => setEndDate(date)}
//                             defaultDate={endDate || today}
//                             className="border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF]"
//                         />
//                     </div>
//                 </div>

//             </div>

            
//         </div>
//     );
// }





/// uijnfghjkf============
// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const handleStartDate = (date) => {
//         setStartDate(date);
//         setEndDate(null); // Reset end date when start changes
//     };

//     return (
//         <div className="flex flex-col gap-4 p-6">
//             <div className="flex items-center gap-4">

//                 {/* Start Date */}
//                 <fieldset className="flex flex-col gap-1 w-1/3">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <Datepicker
//                         title="Start Date"
//                         autoHide={true}
//                         maxDate={today}
//                         onSelectedDateChanged={handleStartDate}
//                         defaultDate={startDate || today}
//                     />
//                 </fieldset>

//                 <span className="text-gray-500 mt-5">→</span>

//                 {/* End Date */}
//                 <fieldset className="flex flex-col gap-1 w-1/3">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <Datepicker
//                         title="End Date"
//                         autoHide={true}
//                         minDate={startDate} 
//                         maxDate={today}
//                         onSelectedDateChanged={(date) => setEndDate(date)}
//                         defaultDate={endDate || today}
//                     />
//                 </fieldset>

//             </div>

//             {/* Show selected range */}
//             {/* {startDate && endDate && (
//                 <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                     <p className="text-sm text-blue-700 font-medium">
//                         📅 {startDate.toDateString()} → {endDate.toDateString()}
//                     </p>
//                     <p className="text-xs text-blue-500 mt-1">
//                         {Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))} days selected
//                     </p>
//                 </div>
//             )} */}
//         </div>
//     );
// }

// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const today = new Date();
//     today.setHours(0, 0, 0, 0); // Normalize to midnight

//     const handleStartDate = (date) => {
//         setStartDate(date);
//         setEndDate(null); // Reset end date when start changes
//     };

//     return (
//         <div className="flex flex-col gap-4 p-6">
//             <div className="flex items-center gap-4">

//                 {/* Start Date */}
//                 <fieldset className="flex flex-col gap-1 w-1/3">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <Datepicker
//                         title="Start Date"
//                         autoHide={true}
//                         maxDate={today}              
//                         onSelectedDateChanged={handleStartDate}
//                         defaultDate={startDate || today}
//                     />
//                 </fieldset>

//                 <span className="text-gray-500 mt-5">→</span>

//                 {/* End Date */}
//                 <fieldset className="flex flex-col gap-1 w-1/3">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <Datepicker
//                         title="End Date"
//                         autoHide={true}
//                         minDate={startDate || today}  
//                         onSelectedDateChanged={(date) => setEndDate(date)}
//                         defaultDate={endDate || today}
//                     />
//                 </fieldset>

//             </div>

//             {/* Show selected range */}
//             {startDate && endDate && (
//                 <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                     <p className="text-sm text-blue-700 font-medium">
//                         📅 {startDate.toDateString()} → {endDate.toDateString()}
//                     </p>
//                     <p className="text-xs text-blue-500 mt-1">
//                         {Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))} days selected
//                     </p>
//                 </div>
//             )}
//         </div>
//     );
// }

// ------------complete -------------

// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const handleStartDate = (date) => {
//         setStartDate(date);
//         setEndDate(null); // Reset end date when start changes
//     };

//     return (
//         <div className="flex flex-col gap-4 p-6 ">

//             <div className="flex items-center gap-4 ">
//                 {/* Start Date */}
//                 <fieldset className="flex flex-col gap-1 w-1/3">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <Datepicker
//                         title="Start Date"
//                         autoHide={true}
//                         onSelectedDateChanged={handleStartDate}
//                         defaultDate={startDate || new Date()}
//                     />
//                 </fieldset>

//                 <span className="text-gray-500 mt-5">→</span>

//                 {/* End Date */}
//                 <fieldset className="flex flex-col gap-1">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <Datepicker
//                         title="End Date"
//                         autoHide={true}
//                         // minDate={startDate || new Date()}
//                         // minDate={startDate && startDate < new Date() ? new Date() :startDate}
//                         minDate={startDate && startDate < endDate}

//                         onSelectedDateChanged={(date) => setEndDate(date)}
//                         defaultDate={endDate || new Date()}
//                     />
//                 </fieldset>
//             </div>

            
//         </div>
//     );
// }

//complete claude
// import { useState } from "react";
// import { Datepicker } from "flowbite-react";

// export default function DateRangePickers() {
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     return (
//         <div className="flex flex-col gap-4 p-6">
//             <h2 className="text-lg font-semibold text-gray-700">Select Date Range</h2>

//             <div className="flex items-center gap-4 flex-wrap">
//                 {/* Start Date */}
//                 <div className="flex flex-col gap-1">
//                     <legend className="text-sm text-gray-600">Start Date</legend>
//                     <Datepicker
//                         title="Start Date"
//                         onSelectedDateChanged={(date) => setStartDate(date)}
//                         autoHide={true}
//                     />
//                 </div>

//                 <span className="text-gray-500 mt-5">→</span>

//                 {/* End Date */}
//                 <div className="flex flex-col gap-1">
//                     <legend className="text-sm text-gray-600">End Date</legend>
//                     <Datepicker
//                         title="End Date"
//                         minDate={startDate || new Date()}   // Can't pick before start date
//                         onSelectedDateChanged={(date) => setEndDate(date)}
//                         autoHide={true}
//                     />
//                 </div>
//             </div>

//             {/* Display selected range */}
//             {startDate && endDate && (
//                 <p className="text-sm text-green-600 font-medium">
//                     Selected: {startDate.toDateString()} → {endDate.toDateString()}
//                 </p>
//             )}
//         </div>
//     );
// }







// // EditableDateRangeHover.jsx
// import React, { useEffect, useRef } from "react";
// import "flowbite-datepicker/dist/index.css";
// import { DateRangePicker } from "flowbite-datepicker";

// const DateRangePickers = () => {
//     const startRef = useRef(null);
//     const endRef = useRef(null);
//     const containerRef = useRef(null);

//     useEffect(() => {
//         if (containerRef.current && startRef.current && endRef.current) {
//             // Initialize Flowbite DateRangePicker
//             new DateRangePicker(containerRef.current, {
//                 inputs: [startRef.current, endRef.current],
//                 autohide: true, // calendar hides after selecting end date
//             });
//         }
//     }, []);

//     return (
//         <div
//             ref={containerRef}
//             className="flex items-center gap-2"
//         >
//             <div className="relative w-40">
//                 <input
//                     ref={startRef}
//                     type="text"
//                     placeholder="Start date"
//                     className="block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//             </div>

//             <span className="text-gray-500">to</span>

//             <div className="relative w-40">
//                 <input
//                     ref={endRef}
//                     type="text"
//                     placeholder="End date"
//                     className="block w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//             </div>
//         </div>
//     );
// };

// export default DateRangePickers;



// DateRangePicker.jsx
// import React, { useEffect, useRef } from "react";
// import { DateRangePicker } from "flowbite-datepicker";

// const DateRangePickerComponent = () => {
//     const startRef = useRef(null);
//     const endRef = useRef(null);
//     const containerRef = useRef(null);

//     useEffect(() => {
//         if (containerRef.current && startRef.current && endRef.current) {
//             new DateRangePicker(containerRef.current, {
//                 inputs: [startRef.current, endRef.current],
//                 // Optional:
//                 // format: "mm/dd/yyyy",
//                 // autohide: true,
//             });
//         }
//     }, []);

//     return (
//         <div
//             ref={containerRef}
//             className="flex items-center gap-2"
//         >
//             <input
//                 ref={startRef}
//                 type="text"
//                 placeholder="Start date"
//                 className="block w-40 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <span className="text-gray-500">to</span>
//             <input
//                 ref={endRef}
//                 type="text"
//                 placeholder="End date"
//                 className="block w-40 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//         </div>
//     );
// };

// export default DateRangePickerComponent;


// import React, { useEffect } from "react";
// import "flowbite/dist/flowbite.css";
// import "flowbite/dist/flowbite.js";

// const DateRangePicker = () => {
//     useEffect(() => {
//         // Initialize Flowbite range picker manually
//         const rangePickerEl = document.getElementById("date-range-picker");
//         if (rangePickerEl && window.DateRangePicker) {
//             window.DateRangePicker.init(rangePickerEl);
//         }
//     }, []);

//     return (
//         <div
//             id="date-range-picker"
//             date-rangepicker
//             className="flex items-center gap-2"
//         >
//             <div className="relative w-40">
//                 <input
//                     id="datepicker-range-start"
//                     name="start"
//                     type="text"
//                     className="block w-full px-3 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 shadow-sm"
//                     placeholder="Start date"
//                 />
//             </div>

//             <span className="text-gray-500">to</span>

//             <div className="relative w-40">
//                 <input
//                     id="datepicker-range-end"
//                     name="end"
//                     type="text"
//                     className="block w-full px-3 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 shadow-sm"
//                     placeholder="End date"
//                 />
//             </div>
//         </div>
//     );
// };

// export default DateRangePicker;
// import React, { useEffect, useRef } from "react";
// import { Datepicker } from "flowbite-datepicker"; // import the JS module

// const DateRangePicker = () => {
//     const inputRef = useRef(null);

//     useEffect(() => {
//         if (inputRef.current) {
//             new Datepicker(inputRef.current, {
//                 mode: "range",         // enables start & end date
//                 format: "mm/dd/yyyy",  // customize format
//                 autohide: true,
//                 todayBtn: true,
//                 clearBtn: true,
//             });
//         }
//     }, []);

//     return (
//         <div className="relative w-80">
//             <input
//                 type="text"
//                 ref={inputRef}
//                 placeholder="Select date range"
//                 className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                 readOnly
//             />
//         </div>
//     );
// };

// export default DateRangePicker;