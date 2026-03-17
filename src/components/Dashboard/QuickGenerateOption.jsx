
import Button from "../Button";
import { WandSparkles } from 'lucide-react'

function QuickGenerateOption() {
    const occassion = ["Formal", "Work", "Casual", "Social", "Travel", "Active", "Festive", "Home"];
    return (
        <div className="bg-[#1C1C1A] py-5 px-2.5 lg:p-8 md:p-8 rounded-3xl mb-3">
            <h2 className="text-white text-2xl lg:text-3xl md:text-3xl px-3">What's the Occassion?</h2>
            <div className="hidden md:flex justify-end">
                <Button type="submit" variant="secondray" className="flex justify-end "><span className=" flex px-5 gap-3 "><WandSparkles />Generate Outfit</span></Button>
            </div>
            <div className="mt-4 max-w-7xl   ">
                <ul className="gap-3 sm:gap-3  grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 ">
                    {occassion.map((occassion) => (
                        <li key={occassion} >
                            <Button type="button" className="hover:border-[#D4AF37] hover:border-1  text-xs sm:text-base md:text-sm lg:text-base " ><span className="px-0 lg:px-2 md:px-3 text-[#D4AF37] ">{occassion}</span></Button>
                    </li>
                    ))}
                </ul>
            </div>
            <div className="flex md:hidden lg:hidden justify-end mt-3">
                <Button type="submit" variant="secondray" className="flex justify-center w-full "><span className=" flex px-5 gap-3 "><WandSparkles />Generate Outfit</span></Button>
            </div>
        </div>
    )
}
export default QuickGenerateOption;


