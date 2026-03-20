import React from 'react'
import SideImg from '../components/signup & login/SideImg'
import SignUpSideImg from "../assets/signup & login/signup_sideimg.jpg";
import SignUpForm from '../components/signup & login/SignUpForm';


const SignUp = () => {
  return (
    <main className='flex flex-col-reverse items-center lg:flex-row min-h-[calc(100vh-80px)] bg-[#F7F4EF]'>
        <div className='w-full xl:block xl:w-2/5'>
        <SideImg image={SignUpSideImg} quote={'“Style is a way to say who you are without having to speak.”'} />
        </div>
        <div className='w-full xl:w-3/5 xl:h-auto'>
        <SignUpForm />
        </div>  
    </main>
  )
}

export default SignUp