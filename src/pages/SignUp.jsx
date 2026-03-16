import React from 'react'
import SignUpSideImg from '../components/signup/SignUpSideImg'
import SignUpForm from '../components/signup/signUpForm'

const SignUp = () => {
  return (
    <main className='flex flex-col-reverse items-center lg:flex-row min-h-[calc(100vh-80px)] bg-[#F7F4EF]'>
        <div className='w-full lg:block lg:w-2/5'>
        <SignUpSideImg />
        </div>
        <div className='w-full lg:w-3/5 lg:h-auto'>
        <SignUpForm />
        </div>  
    </main>
  )
}

export default SignUp