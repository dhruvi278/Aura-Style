import { CircleUserRound } from "lucide-react";
import CustomSelect from "../generateOutfit/CustomSelect";
import Button from "../ui/Button";
import Formfield from "../ui/Formfield";

function ProfileForm() {
    return (
        <div className="bg-[#FDFAF6] px-10 py-8 rounded-4xl w-2xs lg:w-lg mb-7 xl:w-xl md:w-lg">
            <h2
                className="pb-4 border-b mb-5 flex items-center gap-2 border-gray-300 jost uppercase text-sm  font-medium text-[#C5A059] tracking-[3px]">
                <CircleUserRound size={20} />
                <span>My Profile</span>
            </h2>
            <form className="mx-4">
                <Formfield label="Full name"
                    type="text"
                    name="fullname"
                    value="Riddhi kapoor"
                    variant="secondary"
                    placeholder={`Enter Your Name`}
                    className="border-b-1 border-t-0 border-l-0 border-r-0 rounded-none " />
                <Formfield label="Email Address"
                    type="email"
                    name="email"
                    value="ridhi@gmail.com"
                    variant="secondary"
                    placeholder={`abc@example.com`}
                    className="border-b-1 border-t-0 border-l-0 border-r-0 rounded-none " />
                <Formfield label="Phone Number"
                    type="text"
                    name="phone"
                    value="+44 7700 900077"
                    variant="secondary"
                    placeholder={`123456789`}
                    className="border-b-1 border-t-0 border-l-0 border-r-0 rounded-none " />
                <label className="jost uppercase text-sm  font-medium text-[#C5A059] ">Gender Identity</label>
                <CustomSelect options={["Female", "Male"]} />
            </form>
            <div className="flex flex-col  justify-between sm:flex-row ">
                <Button variant="primary" className="mt-10"><span className=" px-5 w-sm md:px-5 lg:px-5 jost">Save Changes</span></Button>
                <Button variant="ghost" className="mt-10"><span className="px-10 w-sm md:px-7 lg:px-12 jost">Cancel</span></Button>
            </div>
        </div>
    )
}
export default ProfileForm;