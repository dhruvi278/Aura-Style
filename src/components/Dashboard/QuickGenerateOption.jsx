import Button from "../ui/Button";
import { WandSparkles } from 'lucide-react'

function QuickGenerateOption() {
    const occassion = ["Formal", "Work", "Casual", "Social", "Travel", "Active", "Festive", "Home"];
    return (
        <div className="bg-[#1C1C1A] p-8 rounded-3xl mb-3">
            <h2 className="text-white text-3xl ">What's the Occassion?</h2>
            <div className="flex justify-end">
                <Button type="submit" variant="secondray" className="flex justify-end"><span className=" flex px-5 gap-3"><WandSparkles />Generate Outfit</span></Button>
            </div>
            <div className="-mt-4">
                <ul className="flex gap-2">
                    {occassion.map((occassion) => (
                        <li key={occassion}>
                            <Button type="button" className="hover:border-[#D4AF37] hover:border-1" ><span className="px-5 text-[#D4AF37] ">{occassion}</span></Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default QuickGenerateOption;