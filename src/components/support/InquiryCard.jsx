import { useState } from "react";
import Button  from "../ui/Button";
import Formfield from "../ui/Formfield";
import { useSupport } from "../../hooks/useSupport";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function InquiryCard(){
    const { sendInquiry, sending } = useSupport();
    
    const { 
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        defaultValues:{
            full_name:'',
            message:'',
        },
    });
        
    const onSubmit = async(data) =>{
        console.log('sending..',data)
        const result = await sendInquiry({message: data.message})
        if(result.type  === 'support/inquiry/fulfilled'){
            toast.success('Message sent! We will get back to you soon.');
            reset();
        } else{
            // toast.error(result.payload || 'Failed to send the inquiry. Please try again.');
            toast.error(
                typeof result.payload === 'string'
                    ? result.payload
                    : 'Failed to send inquiry. Please try again.'
            );
        }
    };


    return(
        <div className="flex flex-col gap-3 bg-[#FDFAF6] p-12 rounded-2xl pb-8">
            <h2
                className='playfair-display text-[22px] sm:text-[26px] md:text-[30px] text-[#1C1C1A] pb-3 sm:pb-4 '>
                Direct Inquiry
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                <Formfield 
                    label='FullName' 
                    placeholder='Fullname' 
                    name='full_name'
                    register={register}
                    error= {errors.full_name?.message}
                    formVariant="primary" />
                {/* <Formfield label='Topic' placeholder='Topic' /> */}
                <label className="jost uppercase text-sm  font-medium text-gray-600">Message *</label>
                <textarea
                    {...register('message',{
                        required:'Message is required',
                        minLength:{value:5, message:'Message must be at least 5 characters'}
                    })} 
                    placeholder="Tell us how we can elevate your experience ..." 
                    className='jost w-full px-5 py-3 bg-[#FDFAF6] outline-none placeholder:text-gray-400 transition border border-gray-300 rounded-full
    focus:border-[#EEBD2B] focus:ring-2 focus:ring-[#EEBD2B]/30' />
                    {errors.message && (
                        <p className="text-red-500 text-xs">{errors.message.message}</p>
                    )}
                <Button variant="secondray" type='submit' className='w-full mt-10' disabled={sending}>Send Inquiry</Button>
            </form>
        </div>
    )
}
export default InquiryCard;