import React, { useState } from "react";
import Logo from "../ui/Logo";

const SideImg = ({image, quote}) => {
  const [load, setLoad] = useState(false);
  return (
    <aside className="relative w-full h-full bg-[#F7F4EF]">
      {/* Background Image */}
      <div className="p-5 lg:p-0">
        {!load && (
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-linear-to-r from-[#E8E2D9] via-[#F0EDE6] to-[#E8E2D9] bg-size-[200%_100%] animate-shimmer"
          />
        )}
        <img
          src={image}
          loading="lazy"
          alt="Elegantly dressed woman representing AuraStyle fashion"
          className="h-full max-h-[calc(100vh-80px)] w-full object-cover object-[center_30%] rounded-3xl lg:rounded-none"
          onLoad={() => setLoad(true)}
        />
      </div>
      {/* Text */}
      
        <div className="absolute bottom-10 left-10 right-10 text-[#FDFAF6] max-w-md ">
          <Logo />
          <blockquote className="playfair italic text-[30px] mt-8">
            {quote}
          </blockquote>
        </div>

    </aside>
  );
};

export default SideImg;
