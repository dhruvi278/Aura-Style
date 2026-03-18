import ProfileCard from "../components/Profile/ProfileCard";
import ProfileForm from "../components/Profile/ProfileForm";
import TitleText from "../components/ui/TitleText";

function Profile(){
    return(
        <div className="flex flex-col px-10 pt-10 bg-[#F7F4EF] gap-10 min-h-[calc(100dvh-80px)] ">
            <TitleText 
            title="Your Style Identity" 
            description="Define your vibe, explore your fashion, and let AI style you with looks tailored to your unique aesthetic."
            />
            <div className="flex flex-col m-auto max-w-5xl gap-15 xl:gap-20 md:flex-col lg:flex-row">
                    <ProfileCard />
                    <ProfileForm />
            </div>
        </div>
    )
}

export default Profile;