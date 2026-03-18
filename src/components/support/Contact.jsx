import React from 'react'
import ContactCard from './atoms/ContactCard'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

function Contact() {
  return (
    <section className='p-6  md:p-10 bg-[#1C1C1A] rounded-2xl sm:rounded-3xl flex flex-col gap-7 sm:gap-9" aria-labelledby="contact-heading'>

      <div>
        <h2 id="contact-heading" className="playfair-display text-[26px] sm:text-[32px] md:text-[36px] text-[#F1F5F9]">Contact Information</h2>
        <p className='work-sans text-[16px] sm:text-[18px] md:text-[20px] text-[#94A3B8] leading-relaxed'>Reach out directly to our luxury headquarters. We typically respond within 15 minutes during operating hours.</p>
      </div>

      <div className='flex flex-col gap-4 sm:gap-[17px]'>
        <ContactCard icon={<Phone size={28} color="#F2CC0D" />} contactType={`phone`} contactInformation={`+1 (888) AURA-STYLE`} />
        <ContactCard icon={<Mail size={28} color="#F2CC0D" />} contactType={`mail`} contactInformation={`aurastyle.support@gmail.com`} />
        <ContactCard icon={<Clock size={28} color="#F2CC0D" />} contactType={`hours`} contactInformation={`24/7 Priority Support`} />
        <ContactCard icon={<MapPin size={28} color="#F2CC0D" />} contactType={`Atelier`} contactInformation={`742 Fifth Avenue, New York`} />
      </div>

    </section>
  )
}

export default Contact
