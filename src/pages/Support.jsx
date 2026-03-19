import React from 'react'
import TitleText from '../components/ui/TitleText'
import FrequentlyQuestions from '../components/support/FrequentlyQuestions'
import Contact from '../components/support/Contact'

function Support() {
    return (
        <main className='flex flex-col px-4 md:px-10  xl:px-40 py-8 sm:py-12 md:py-16 xl:py-20 gap-10 sm:gap-16 md:gap-20 lg:gap-30 lg:items-center'>
            <div className='max-w-6xl flex flex-col gap-10 sm:gap-16 md:gap-20 lg:gap-30 '>
                <TitleText title='How may we assist you?' description='Experience our bespoke support services, tailored to your unique style journey.
            Search our archives or reach out to your dedicated stylist.' />
            <FrequentlyQuestions />
            <Contact />
            </div>
        </main>
    )
}

export default Support
