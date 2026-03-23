import { useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileForm from "../components/Profile/ProfileForm";
import Modal from "../components/ui/Modal";
import TitleText from "../components/ui/TitleText";
import UploadOption from "../components/ui/UploadOption";
import Button from "../components/ui/Button";

function Profile() {

    const [selfiOpen, setSelfiOpen] = useState(false)
    const [deleteOpen, setDeleteOpen] = useState(false)
    return (
        // <div className=" flex flex-col px-10 pt-5 lg:w-full lg:items-center bg-[#F7F4EF] gap-12 min-h-[calc(100dvh-80px)] ">
        // <div className="flex flex-col px-10 pt-7 lg:w-full lg:items-center bg-[#F7F4EF] gap-12 h-[calc(100dvh-80px)] overflow-hidden">
        <main className="page-enter flex flex-col px-5 pt-10 lg:px-10 lg:pt-5 w-full lg:items-center bg-[#f7f4ef] gap-10 min-h-[calc(100dvh-80px)] overflow-y-auto">
            <div className="max-w-6xl flex flex-col gap-8">
                <header>
                    <TitleText
                        title="Your Style Identity"
                        description="Define your vibe, explore your fashion, and let AI style you with looks tailored to your unique aesthetic."
                    />
                </header>
                <section>
                    <div className="flex flex-col m-auto w-full gap-5 xl:gap-10 md:flex-col lg:flex-row lg:items-start items-center">
                        <ProfileCard openModal={() => setSelfiOpen(true)} openDeleteModal={() => setDeleteOpen(true)} />
                        <ProfileForm />
                    </div>
                </section>

                {/* Upload selfi Modal */}
                <Modal
                    title={` Update Your Portrait`}
                    description={`Upload or capture a photo for your personal style profile.`}
                    isOpen={selfiOpen}
                    onClose={() => setSelfiOpen(false)}
                >
                    <UploadOption onClose={() => setSelfiOpen(false)} onUpload={(e) => console.log(e.target)} cameraFacing="user" />
                </Modal>

                {/* Delete account Confirmation Modal */}

                <Modal
                    title={`Delete Your Account?`}
                    description={`Your wardrobe, looks and data will be permanently erased.`}
                    isOpen={deleteOpen}
                    onClose={() => setDeleteOpen(false)}
                >
                    <aside className="flex justify-between">
                        <Button onClick={() => setDeleteOpen(false)} type={`button`} variant="ghost"><span className="jost">Cancel</span></Button>
                        <Button onClick={() => {
                            console.log('hello')
                            setDeleteOpen(false)
                        }
                        }
                            type={`button`}><span className="jost">Delete Account</span></Button>
                    </aside>
                </Modal>
            </div>
        </main>
    )
}

export default Profile;