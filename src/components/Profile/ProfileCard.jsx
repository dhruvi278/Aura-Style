import { useSelector } from "react-redux";
import Button from "../ui/Button";
import { Camera } from "lucide-react";
import { useState } from "react";
import DefaultAvatar from "../../assets/DefaultAvatar.svg";
import ImageWithFallback from "../ui/ImgWithFallback";

function ProfileCard({ openModal, openDeleteModal }) {
  const { user } = useSelector((state) => state.auth);


  const full_name = user?.full_name.split(" ")[0] || "Guest";
  const displayName =
    full_name[0].toUpperCase() + full_name.slice(1).toLowerCase();
  const memberYear = user?.created_at
    ? new Date(user.created_at).getFullYear()
    : null;
  const avatarSrc =
    user?.image_url ? user.image_url : DefaultAvatar;
  return (
    <aside
      aria-label="Profile card"
      className="px-6 py-6 lg:py-8 flex flex-col justify-center items-center gap-4 lg:gap-5 w-full max-w-xs md:max-w-sm lg:max-w-xs bg-[#FDFAF6] rounded-3xl shadow-[0_4px_24px_rgba(28,28,26,0.08)] lg:self-start"
    >
      <figure className="relative flex items-center justify-center">
        <ImageWithFallback
          src={avatarSrc}
          alt={`${displayName}'s profile photo`}
          containerClassName="h-28 w-28 sm:h-32 sm:w-32 rounded-full border-[3px] border-[#C9A96E] overflow-hidden"
          fallbackClassName="h-28 w-28 sm:h-32 sm:w-32 rounded-full border-[3px] border-[#C9A96E]"
          className="rounded-full"
        />
        <button
          aria-label="Change profile photo"
          onClick={openModal}
          type="button"
          className="absolute bottom-1 right-2 bg-[#C5A059]  rounded-full p-1.5 hover:scale-105 transition-all duration-200 hover:cursor-pointer hover:bg-[#af822f]"
        >
          <Camera size={18} color="#FFFFFF" aria-hidden="true" />
        </button>
      </figure>
      <hgroup className="flex flex-col items-center gap-1 text-center">
        <h2 className="playfair text-2xl sm:text-3xl font-semibold italic text-[#1C1C1A]">
          {displayName}
        </h2>
        <p className="jost text-[#6B6460] text-sm sm:text-base">
          {memberYear ? `Member since ${memberYear}` : "Welcome!"}
        </p>
      </hgroup>

      <Button
        onClick={openDeleteModal}
        variant="ghost"
        type="button"
        className={"w-full"}
      >
        <span className="jost px-6 font-semibold uppercase tracking-widest text-sm">
          Delete Account
        </span>
      </Button>
    </aside>
  );
}

export default ProfileCard;
