import { useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileForm from "../components/Profile/ProfileForm";
import Modal from "../components/ui/Modal";
import TitleText from "../components/ui/TitleText";
import UploadOption from "../components/ui/UploadOption";

function Profile() {

    const [selfiOpen, setSelfiOpen] = useState(false)
    return (
        <div className="flex flex-col px-10 pt-10 bg-[#F7F4EF] gap-20 min-h-[calc(100dvh-80px)] ">
            <TitleText
                title="Your Style Identity"
                description="Define your vibe, explore your fashion, and let AI style you with looks tailored to your unique aesthetic."
            />
            <div className="flex flex-col m-auto max-w-5xl gap-15 xl:gap-20 md:flex-col lg:flex-row">
                <ProfileCard openModal={() => setSelfiOpen(true)} />
                <ProfileForm />
            </div>

            <Modal
                title={` Update Your Portrait`}
                description={`Upload or capture a photo for your personal style profile.`}
                isOpen={selfiOpen}
                onClose={() => setSelfiOpen(false)}
            >
                <UploadOption onClose={() => setSelfiOpen(false)} onUpload={(e) => console.log(e.target)} cameraFacing="user"/>
            </Modal>
        </div>
    )
}

export default Profile;