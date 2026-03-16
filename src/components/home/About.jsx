import React from 'react'
import AboutLady from "../../assets/home/About_Lady.png";
import Button from "../Button";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen w-full bg-[#F7F4EF] flex justify-center items-center px-6 py-20">
        <div className="max-w-6xl w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">
          <div className="flex-1 flex flex-col gap-6 lg:gap-8 justify-center">
            <h5 className="work-sans font-bold text-[12px] text-[#C5A059] tracking-[2.4px]">
              AI-Powered Fashion Intelligence
            </h5>
            <h1 className="playfair-display text-[48px] lg:text-[72px] leading-tight lg:leading-20">
              Dress with Intention.{" "}
              <span className="italic">Every Single Day</span>.
            </h1>
            <p className="lg:text-[18px] text-[16px] text-[#1A1A18] work-sans leading-[29.3px] max-w-md md:block hidden">
              Experience a personal wardrobe stylist that blends high-fashion
              sensibility with sophisticated AI logic. Tailored to your
              silhouette, lifestyle, and unique aura.
            </p>
            <Button onClick={() => navigate('/signup')} className='w-fit work-sans font-semibold tracking-[1.5px] text-[14px]'><p className='px-4'>Start Your Journey</p></Button>
          </div>
          <div className="flex-1 min-h-125 lg:max-h-full">
            <img
              src={AboutLady}
              alt="Fashion model wearing a curated AuraStyle outfit"
              className="w-full h-full object-cover lg:rounded-2xl shadow-2xl rounded-t-full"
            />
          </div>
        </div>
      </section>
  )
}

export default About