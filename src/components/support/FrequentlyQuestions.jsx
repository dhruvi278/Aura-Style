import React, { useState } from 'react'
import Question from './atoms/Question'
import faqs from './atoms/faqs'

function FrequentlyQuestions() {

    const [activeIndex, setActiveIndex] = useState(null)

    return (
        <section aria-label='frequently asked question' className='flex flex-col gap-6 sm:gap-8'>

            <h2
                id='freq-heading'
                className='playfair-display text-[22px] sm:text-[26px] md:text-[30px] text-[#1C1C1A] pb-3 sm:pb-4 border-b border-[#1C1C1A]/10'>
                Frequently Asked Questions
            </h2>

            <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
                {faqs.map((faq, i) => (
                    <Question
                        key={i}
                        question={faq.question}
                        answer={faq.answer}
                        open={activeIndex === i}
                        onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
                    />
                ))}
            </div>
        </section>
    )
}

export default FrequentlyQuestions
