import { useState } from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileForm from "../components/Profile/ProfileForm";
import Modal from "../components/ui/Modal";
import TitleText from "../components/ui/TitleText";
import UploadOption from "../components/ui/UploadOption";
import Button from "../components/ui/Button";
import { useDispatch } from "react-redux";
import { deleteUserAccount, saveProfile } from "../store/slices/authSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selfiOpen, setSelfiOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleProfilePhotoUpload = async (file) => {
    const result = await dispatch(saveProfile({ file }));
    if (saveProfile.fulfilled.match(result)) {
      toast.success("Profile Photo Updated", {
        description: "Your profile photo has been saved successfully.",
      });
      setSelfiOpen(false);
    } else {
      toast.error("Upload Failed", {
        description:
          result.payload || "Something went wrong. Please try again.",
      });
    }
  };

  const handleDeleteAccount = async () => {
    const result = await dispatch(deleteUserAccount());
    if (result.type === "auth/deleteAccount/fulfilled") {
      toast.success("Account deleted successfully");
      navigate("/");
    } else {
      toast.error(result.payload || "Failed to delete account");
    }
  };
  return (
    <main className="page-enter flex flex-col px-5 pt-6 pb-10 lg:px-10 lg:pt-6 lg:pb-6 w-full bg-[#F7F4EF] gap-4 lg:gap-6 min-h-[calc(100dvh-72px)] lg:min-h-[calc(100dvh-80px)] lg:overflow-hidden">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-4 lg:gap-5 lg:h-full">
        <header className="flex justify-center">
          <TitleText
            title="Your Style Identity"
            description="Define your vibe, explore your fashion, and let AI style you with looks tailored to your unique aesthetic."
          />
        </header>
        <section aria-label="Profile Settings" className="w-full lg:flex-1">
          <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center gap-6 w-full h-full">
            <ProfileCard
              openModal={() => setSelfiOpen(true)}
              openDeleteModal={() => setDeleteOpen(true)}
            />
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
          <UploadOption
            onClose={() => setSelfiOpen(false)}
            onUpload={handleProfilePhotoUpload}
            cameraFacing="user"
          />
        </Modal>

        {/* Delete account Confirmation Modal */}

        <Modal
          title={`Delete Your Account?`}
          description={`Your wardrobe, looks and data will be permanently erased.`}
          isOpen={deleteOpen}
          onClose={() => setDeleteOpen(false)}
        >
          <aside className="flex justify-between">
            <Button
              onClick={() => setDeleteOpen(false)}
              type={`button`}
              variant="ghost"
            >
              <span className="jost">Cancel</span>
            </Button>
            <Button onClick={handleDeleteAccount} type={`button`}>
              <span className="jost">Delete Account</span>
            </Button>
          </aside>
        </Modal>
      </div>
    </main>
  );
}

export default Profile;
