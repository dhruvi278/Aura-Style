import React from "react";
import Logo from "../ui/Logo";
import TitleText from "../ui/TitleText";
import Formfield from "../ui/Formfield";
import Button from "../ui/Button";

const SignUpForm = () => {
  return (
    <section className="h-full w-full bg-[#F7F4EF] flex items-center justify-center px-6 py-12">
      <div className="flex flex-col gap-7 w-full max-w-150  ">
        <Logo />
        <TitleText
          title="Create Your Account"
          description="Your curated sartorial journey begins with a single step."
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <Formfield
            label="Full Name *"
            type="text"
            placeholder="Alexander McQueen"
          />
          <div className="flex flex-col sm:flex-row w-full sm:gap-6">
            <div className="flex-1">
              <Formfield
                label="Email Address *"
                type="email"
                placeholder="alex@domain.com"
              />
            </div>
            <div className="flex-1">
            <Formfield
              label="Phone Number"
              type="tel"
              placeholder="+1 (555) 000-0000"
            />
            </div>
          </div>
          <Formfield label="Password *" type="password" placeholder="••••••••" />
          <div className="flex flex-col gap-2">
            {/* Label */}
            <label className="jost uppercase text-sm text-gray-600 font-medium">
              Gender Identity *
            </label>

            <div className="flex gap-6 w-full">
              <Button variant="bordered" className="w-full">
                <p className="jost text-[16px] text-[#475569]">Male</p>
              </Button>
              <Button variant="bordered" className="w-full">
                <p className="jost text-[16px] text-[#475569]">Female</p>
              </Button>
            </div>

            {/* Error */}
            <p className="text-red-500 text-xs min-h-4"></p>
          </div>
          <Button type="submit" className="w-full">
            <p className="jost py-1 tracking-[2px]">CREATE ACCOUNT →</p>
          </Button>
        </form>
        <p className="jost text-[14px] text-[#64748B] text-center">Already part of the inner circle? <span className="text-[#C4A982] font-medium cursor-pointer">Login</span></p>
      </div>
    </section>
  );
};

export default SignUpForm;
