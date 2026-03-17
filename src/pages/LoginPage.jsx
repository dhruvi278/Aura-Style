import React from "react";
import SideImg from "../components/signup & login/SideImg";
import LoginForm from "../components/signup & login/LoginForm";
import LoginSideImg from "../assets/signup & login/login_sideimg.jpg";

const LoginPage = () => {
  return (
    <main className="flex flex-col-reverse items-center lg:flex-row min-h-[calc(100vh-80px)] bg-[#F7F4EF]">
      <div className="w-full lg:block lg:w-2/5">
        <SideImg image={LoginSideImg} quote={'“Every outfit tells your story.”'} />
      </div>
      <div className="w-full lg:w-3/5 lg:h-auto">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
