import React from 'react'
import Question from './atoms/Question'

function FrequentlyQuestions() {
    return (
        <section aria-label='frequently asked question' className='flex flex-col gap-6 sm:gap-8'>

            <h2
                id='freq-heading'
                className='playfair-display text-[22px] sm:text-[26px] md:text-[30px] text-[#1C1C1A] pb-3 sm:pb-4 border-b border-[#1C1C1A]/10'>
                Frequently Asked Questions
            </h2>

            <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
                <Question
                    question={`How does the AI personalize my seasonal wardrobe`}
                    answer={`AuraStyle analyses your uploaded wardrobe pieces alongside your stated style preferences, body profile, and occasion history to build a living picture of your personal aesthetic. As the seasons shift, our engine cross-references your existing collection with current trends and climate data for your location — surfacing combinations you already own but may have overlooked, and flagging gaps worth filling. The more you interact with your recommendations, the sharper your style profile becomes.`}
                />

                <Question
                    question={`Can I request a physical consultation with a human stylist`}
                    answer={`Absolutely. While AuraStyle is built around intelligent self-service styling, we recognise that certain moments — a milestone event, a wardrobe overhaul, or simply a desire for a more personal touch — call for a human conversation. Premium and Enterprise members may request a one-on-one session with a dedicated stylist from our curated network. Sessions can be conducted virtually or in-person at select locations. To arrange a consultation, reach out through the Direct Inquiry form below or contact our concierge team directly.`}
                />
                <Question
                    question={`What is the policy for curated international returns`}
                    answer={`All curated pieces sourced through AuraStyle's personal shopping service are eligible for return within 14 days of delivery, provided they remain unworn, unaltered, and in their original packaging with tags intact. International returns are facilitated through our logistics partners — a prepaid return label will be issued upon request via your order dashboard. Please note that customs duties and import fees are non-refundable, and processing times may vary by region. For bespoke or made-to-measure items, all sales are considered final. If you have concerns about a specific order, our concierge team is available to assist within 24 hours.`}
                />
            </div>
        </section>
    )
}

export default FrequentlyQuestions
