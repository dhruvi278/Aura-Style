import CustomSelect from "../generateOutfit/CustomSelect";
import Button from "../ui/Button";
import Formfield from "../ui/Formfield";

function ProfileForm() {
    return (
        <div className="bg-[#FDFAF6] p-10 rounded-4xl w-2xs lg:w-lg mb-7 xl:w-xl md:w-lg">
            <h2 className="pb-4 border-b mb-5 border-gray-300 jost uppercase text-sm  font-medium text-[#C5A059] tracking-[3px]">My Profile</h2>
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
            <div className="text-center">
                <Button variant="primary" className="mt-10"><span className=" px-9 md:px-7 lg:px-35 ">Save Changes</span></Button>
            </div>
        </div>
    )
}
export default ProfileForm;