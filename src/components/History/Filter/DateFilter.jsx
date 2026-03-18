
import { useState } from "react";
import { Datepicker } from "flowbite-react";

function DateFilter() {
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
                    maxDate={today}
                    minDate={startDate}
                    onSelectedDateChanged={(date) => setEndDate(date)}
                    defaultDate={endDate || today}
                    position="left"
                    className=" datepicker-container border-[#E3E0DB] border-2 rounded-lg bg-[#F7F4EF] w-full datepicker-left     "
                />
            </div>
        </div>
    );
}
export default DateFilter;