import React from 'react'
import SideImg from '../components/signup & login/SideImg'
import Form from '../components/signup & login/Form'
import SignUpSideImg from "../assets/signup & login/signup_sideimg.jpg";
import SignUpForm from '../components/signup & login/SignUpForm';


const SignUp = () => {
  return (
    <main className='flex flex-col-reverse items-center lg:flex-row min-h-[calc(100vh-80px)] bg-[#F7F4EF]'>
        <div className='w-full lg:block lg:w-2/5'>
        <SideImg image={SignUpSideImg} quote={'“Style is a way to say who you are without having to speak.”'} />
        </div>
        <div className='w-full lg:w-3/5 lg:h-auto'>
        <SignUpForm />
        </div>  
    </main>
  )
}

export default SignUp