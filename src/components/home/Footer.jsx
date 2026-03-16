import { Facebook, Instagram } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="pt-12 w-full bg-[#F7F4EF] border border-[#1A1A18]/5 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col sm:flex-row gap-10 mb-12 px-6">
        <div className="flex-1 flex flex-col gap-6 ">
          <h2 className="playfair-display text-[24px] font-bold">AuraStyle</h2>
          <p className="work-sans text-[12px] text-[#1A1A18]/60 max-w-50">
            The premier AI-powered personal stylist for the modern era.
          </p>
        </div>
        <nav className="flex-1 flex flex-col gap-4" aria-label="Footer Navigation">
          <h3 className="work-sans text-[12px] font-bold">Navigation</h3>
          <div className="flex flex-col gap-2">
            <p className="work-sans text-[12px] text-[#1A1A18]/60 hover:text-[#C5A059] cursor-pointer">About</p>
            <p className="work-sans text-[12px] text-[#1A1A18]/60 hover:text-[#C5A059] cursor-pointer">How It Works</p>
            <p className="work-sans text-[12px] text-[#1A1A18]/60 hover:text-[#C5A059] cursor-pointer">Support</p>
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="work-sans text-[12px] font-bold">Connect</h4>
          <div className="flex gap-2">
            <button className="rounded-full text-[#1A1A18]/60 border border-[#1A1A18]/10 p-2 cursor-pointer"><Facebook size={16} /></button>
            <button className="rounded-full text-[#1A1A18]/60 border border-[#1A1A18]/10 p-2 cursor-pointer"><Instagram size={16} /></button>
          </div>
        </div>
      </div>
      <div className="h-24 w-full border-t border-[#1A1A18]/5 flex justify-center items-center px-6">
        <p className="work-sans text-[10px] text-[#1A1A18]/40 text-center">© 2026 AuraStyle AI. All rights reserved. Part of the Editorial Fashion Group.</p>
      </div>
    </footer>
  );
};

export default Footer;
