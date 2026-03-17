import React from "react";
import { Link } from "react-router-dom";
import Formfield from "../Formfield";
import Logo from "../Logo";
import TitleText from "../TitleText";
import Button from "../Button";

const LoginForm = () => {
  return (
    <section className="h-full w-full bg-[#F7F4EF] flex items-center justify-center px-6 py-12">
      <div className="flex flex-col gap-7 w-full max-w-150  ">
        <Logo />
        <TitleText
          title="Welcome Back"
          description="Sign in to your personal style sanctuary"
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <Formfield
            label="Email *"
            type="email"
            placeholder="alex@domain.com"
          />

          <Formfield
            label="Password *"
            type="password"
            placeholder="Enter your password"
          />
          <div className=" mb-8 flex justify-between items-center">
            <Link className="work-sans text-[14px] text-[#C4A982] italic">Forgot your password?</Link>
            <div className="flex gap-1 items-center">
                <input type="radio" name="remember" id="remember" value='remember' className="size-4 border" />
                <label className="work-sans text-[14px] text-[#475569]" htmlFor="remember">Remember me</label>
            </div>
          </div>
          <Button type="submit" className="w-full">
            <p className="jost py-1 tracking-[2px]">Sign In</p>
          </Button>
          
        </form>
        <div className="flex gap-1 justify-center mt-6">
          <p className="work-sans text-[14px] text-[#64748B]">
            New to AuraStyle?
          </p>
          <Link
            to={"/signup"}
            className="work-sans text-[14px] text-[#C4A982] font-bold"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
