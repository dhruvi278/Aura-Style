import Button from "../ui/Button";

function ProfileCard(){
    return(
        <div className="px-5 py-9 md:py-13  flex flex-col justify-center items-center gap-4 w-2xs md:w-lg lg:w-sm bg-[#FDFAF6] rounded-4xl h-1/2">
            <div  className="flex rounded-xl">
                <img src="https://static.vecteezy.com/system/resources/previews/019/495/228/non_2x/woman-girl-avatar-user-person-long-hair-pink-clothing-flat-style-vector.jpg" alt="photo" 
                className="h-30 w-30 p-1.5 rounded-full border-2" />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-3xl actor-regular font-bold">Riddhi</p>
                <p className="jost text-[#1C1C1A]/50 text-lg">Member since 2023</p>
            </div>
            <div className="flex flex-col gap-5">
                <Button variant="upload" type="button" ><span className=" px-10 lg:px-20 uppercase">Upload Photo</span></Button>
                <Button variant="primary" type="button" children="Edit Profile"className="uppercase"/>
            </div>
        </div>
    )
}

export default ProfileCard;