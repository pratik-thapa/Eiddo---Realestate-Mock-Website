import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TimelineData from '../Data/Timeline';
export default function Timeline() {
    return (
            <Swiper
               
                loop={true}
                loopFillGroupWithBlank={true}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}

                breakpoints={
                    {
                        640:{
                            slidesPerView:1,
                        },

                        768:{
                            slidesPerView:2,
                            spaceBetween:20,
                        },

                        990:{
                            slidesPerView:4,
                            spaceBetween:50,
                        }
                    }
                }
            >

                {TimelineData.map((a) => (
                    <SwiperSlide>
                        <div className="time mt-5 mb-4 container">

                            <img src={a.url} className="w-100" alt="" />
                            <p className='bg-black px-2 py-2 text-light fs-6 fw-semibold'>{a.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    );
}
