import Button from "../ui/Button";
import { Camera } from 'lucide-react'

function ProfileCard({ openModal }) {
    return (
        <div className="px-5 py-9 md:py-13  flex flex-col justify-center items-center gap-4 w-2xs md:w-lg lg:w-sm bg-[#FDFAF6] rounded-4xl h-1/2">
            <div className="relative rounded-xl">
                <img src="https://static.vecteezy.com/system/resources/previews/019/495/228/non_2x/woman-girl-avatar-user-person-long-hair-pink-clothing-flat-style-vector.jpg" alt="photo"
                    className="h-30 w-30 p-1.5 rounded-full border-3 border-[#C5A059]" />
                <button
                    onClick={openModal}
                    className="absolute bottom-1 right-2 bg-[#C5A059]  rounded-full p-1.5 hover:scale-105 transition-all duration-200 hover:cursor-pointer hover:bg-[#af822f]">
                    <Camera color="#FFFFFF" />
                </button>
            </div>
            <div className="flex flex-col items-center">
                <p className="playfair text-3xl font-semibold italic">Riddhi</p>
                <p className="jost text-[#1C1C1A]/50 text-lg">Member since 2023</p>
            </div>
            {/* <div className="flex flex-col gap-5">
                <Button onClick={openModal} variant="upload" type="button" ><span className="jost px-10 lg:px-16 font-semibold uppercase">Upload Photo</span></Button>
                <Button variant="primary" type="button" className="uppercase" ><span className="jost px-10 lg:px-16 font-semibold uppercase">Edit Profile</span></Button>
            </div> */}
        </div>
    )
}

export default ProfileCard;