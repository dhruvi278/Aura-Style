import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCreative, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-creative'
import previews from './generateOutfitPreviews'


function StyleInspiration() {
    const swiperRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <article
            aria-label='Style inspiration'
            className='bg-[#FDFAF6] border border-[#E7E5E4] rounded-3xl p-6 sm:p-8 flex flex-col gap-6'
        >

            <header className='flex flex-col gap-1'>
                <p className='text-[#C5A059] work-sans font-bold text-[11px] sm:text-[12px] uppercase tracking-[2px]'>
                    ✦ Style Ideas previews
                </p>
                <h2 className='playfair italic text-[1.3rem] sm:text-[1.5rem] text-[#1A1A18] font-medium'>
                    Your look will appear here
                </h2>
                <p className='work-sans text-[12px] text-[#6B6460] leading-relaxed'>
                    Fill in the details on the left and let AI curate your perfect outfit.
                </p>
            </header>

            {/* Carousel */}
            <div className='flex flex-col gap-2'>

                {/* Swiper */}
                <div className='relative rounded-[16px] overflow-hidden w-[220px] sm:w-[260px] mx-auto'>
                    <Swiper
                        modules={[EffectCreative, Autoplay]}
                        effect='creative'
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        loop={true}
                        speed={800}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        creativeEffect={{
                            prev: {
                                shadow: false,
                                translate: [0, 0, -400],
                                opacity: 0,
                            },
                            next: {
                                shadow: false,
                                translate: [0, 0, -400],
                                opacity: 0,
                            },
                        }}
                    >
                        {previews.map((item, i) => (
                            <SwiperSlide key={i}>
                                <figure className='relative overflow-hidden rounded-[24px]'>
                                    <img
                                        src={item.src}
                                        alt={`${item.occasion} outfit inspiration`}
                                        className='w-full h-[280px] sm:h-[320px] object-cover object-top'
                                    />

                                    <div className='absolute inset-0 bg-[#1C1C1A]/20' aria-hidden='true' />

                                    <div className='absolute bottom-3 left-1/2 -translate-x-1/2'>
                                        <span className='
                                            work-sans uppercase tracking-[1.5px]
                                            bg-[#FDFAF6]/90 backdrop-blur-sm
                                            text-[#1A1A18] font-medium
                                            rounded-full whitespace-nowrap
                                            text-[12px] px-3 py-1.5
                                        '>
                                            {item.occasion}
                                        </span>
                                    </div>
                                </figure>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


                <div className='flex justify-center gap-1.5 py-1'>
                    {previews.map((_, i) => (
                        <button
                            key={i}
                            type='button'
                            onClick={() => swiperRef.current?.slideToLoop(i)}
                            aria-label={`Go to ${previews[i].occasion}`}
                            className={`
                                rounded-full transition-all duration-300
                                ${i === activeIndex
                                    ? 'w-4 h-1.5 bg-[#C9A96E]'
                                    : 'w-1.5 h-1.5 bg-[#E7E1CF]'
                                }
                            `}
                        />
                    ))}
                </div>

            </div>


            <div className='flex items-center gap-3'>
                <div className='flex-1 h-[1px] bg-[#E7E1CF]' aria-hidden='true' />
                <span className='work-sans text-[10px] text-[#A8A29E] uppercase tracking-[2px]'>
                    ready when you are
                </span>
                <div className='flex-1 h-[1px] bg-[#E7E1CF]' aria-hidden='true' />
            </div>


            <footer className='flex items-start gap-3 p-4 rounded-[14px] bg-[#F5ECD9]/50 border border-[#E7E1CF]'>
                <span className='text-[#C9A96E] text-[18px] leading-none mt-0.5' aria-hidden='true'>✦</span>
                <p className='work-sans text-[12px] text-[#6B6460] leading-relaxed'>
                    Select an occasion, describe your event and let our AI stylist build a look from your wardrobe.
                </p>
            </footer>

        </article>
    )
}

export default StyleInspiration