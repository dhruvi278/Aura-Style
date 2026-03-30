import { Facebook, Instagram } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <footer className="pt-12 w-full bg-[#F7F4EF] border border-[#1A1A18]/5 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col sm:flex-row justify-between gap-12 mb-12 px-6">
        <div className="flex-1 flex flex-col gap-6 ">
          <Logo />
          <p className="work-sans text-[15px] text-[#1A1A18]/60 max-w-50">
            The premier AI-powered personal stylist for the modern era.
          </p>
        </div>
        <div className="flex-2 flex flex-row sm:flex-row gap-12 justify-between">
          <nav className="flex-1 flex flex-col gap-4" aria-label="Footer Navigation">
          <h3 className="work-sans text-[16px] font-bold">Navigation</h3>
          <div className="flex flex-col gap-2">
            <a href="#about" className="work-sans text-[15px] text-[#1A1A18]/60 hover:text-[#C5A059] cursor-pointer">About</a>
            <a href='/#workSection' className="work-sans text-[15px] text-[#1A1A18]/60 hover:text-[#C5A059] cursor-pointer">How It Works</a>
            <NavLink to={`/support`} className="work-sans text-[15px] text-[#1A1A18]/60 hover:text-[#C5A059] cursor-pointer">Support</NavLink>
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-4">
          <h4 className="work-sans text-[16px] font-bold">Connect</h4>
          <div className="flex gap-2">
            <a href="https://www.facebook.com/" target="_blank" className="rounded-full text-[#1A1A18]/60 border hover:text-[#C5A059] border-[#1A1A18]/10 hover:border-[#C5A059] p-2 cursor-pointer"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/?hl=en" target="_blank" className="rounded-full text-[#1A1A18]/60 border hover:text-[#C5A059] border-[#1A1A18]/10 hover:border-[#C5A059] p-2 cursor-pointer"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
        </div>
      <div className="h-24 w-full border-t border-[#1A1A18]/5 flex justify-center items-center px-6">
        <p className="work-sans text-[15px] text-[#1A1A18]/40 text-center">© 2026 AuraStyle AI. All rights reserved. Part of the Editorial Fashion Group.</p>
      </div>
    </footer>
  );
};

export default Footer;
